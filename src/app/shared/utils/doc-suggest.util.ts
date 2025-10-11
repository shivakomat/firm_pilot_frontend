export interface DocumentSuggestion {
  tag?: string;
  year?: number | null;
  confidence: number;
  source: 'title';
  category?: string;
}

export interface DocumentSuggestionConfig {
  FILENAME_SUGGESTION: boolean;
  YEAR_PARSE: boolean;
}

export class DocumentSuggestionUtil {
  private static readonly FORM_TAGS = {
    'W-2': { pattern: /\bW-?2\b/i, confidence: 0.8, category: 'tax-documents' },
    '1099-INT': { pattern: /\b1099-?INT\b/i, confidence: 0.8, category: 'tax-documents' },
    '1099-DIV': { pattern: /\b1099-?DIV\b/i, confidence: 0.8, category: 'tax-documents' },
    '1099-NEC': { pattern: /\b1099-?NEC\b/i, confidence: 0.8, category: 'tax-documents' },
    '1099-MISC': { pattern: /\b1099-?MISC\b/i, confidence: 0.8, category: 'tax-documents' },
    '1099-R': { pattern: /\b1099-?R\b/i, confidence: 0.8, category: 'tax-documents' },
    '1099-K': { pattern: /\b1099-?K\b/i, confidence: 0.8, category: 'tax-documents' },
    '1099': { pattern: /\b1099(?!-[A-Z])\b/i, confidence: 0.6, category: 'tax-documents' }, // Generic 1099
    '1098': { pattern: /\b1098(?!-[A-Z])\b/i, confidence: 0.7, category: 'tax-documents' },
    '1098-E': { pattern: /\b1098-?E\b/i, confidence: 0.8, category: 'tax-documents' },
    '1098-T': { pattern: /\b1098-?T\b/i, confidence: 0.8, category: 'tax-documents' },
    'SSA-1099': { pattern: /\bSSA-?1099\b/i, confidence: 0.8, category: 'tax-documents' },
    'K-1': { pattern: /\bK-?1\b/i, confidence: 0.7, category: 'tax-documents' },
    'IRS Notice': { pattern: /\bCP\d{3,4}\b/i, confidence: 0.7, category: 'tax-documents' },
    'Receipt': { pattern: /\b(receipt|invoice|bill)\b/i, confidence: 0.6, category: 'receipts' },
    'Bank Statement': { pattern: /\b(bank\s+statement|statement)\b/i, confidence: 0.6, category: 'financial-statements' },
    'Financial Statement': { pattern: /\b(financial\s+statement|balance\s+sheet|income\s+statement)\b/i, confidence: 0.7, category: 'financial-statements' }
  };

  private static readonly YEAR_PATTERN = /20(1[6-9]|2[0-9])/g;
  private static readonly GENERIC_TITLES = ['scan_01', 'document', 'file', 'untitled', 'img_', 'photo'];

  /**
   * Parse document title and generate suggestions
   */
  static parseTitleForSuggestions(
    title: string, 
    config: DocumentSuggestionConfig = { FILENAME_SUGGESTION: true, YEAR_PARSE: true }
  ): DocumentSuggestion {
    if (!config.FILENAME_SUGGESTION || !title || this.isGenericTitle(title)) {
      return { confidence: 0.0, source: 'title' };
    }

    const cleanTitle = title.trim();
    let bestMatch: { tag: string; confidence: number; category: string } | null = null;
    let extractedYear: number | null = null;

    // Find the best matching form tag (prefer more specific matches)
    const sortedTags = Object.entries(this.FORM_TAGS).sort((a, b) => {
      // Sort by specificity (longer patterns first, then by confidence)
      const aSpecificity = a[0].length + a[1].confidence;
      const bSpecificity = b[0].length + b[1].confidence;
      return bSpecificity - aSpecificity;
    });

    for (const [tag, config] of sortedTags) {
      if (config.pattern.test(cleanTitle)) {
        bestMatch = { tag, confidence: config.confidence, category: config.category };
        break; // Take the first (most specific) match
      }
    }

    // Extract year if enabled
    if (config.YEAR_PARSE) {
      const yearMatches = cleanTitle.match(this.YEAR_PATTERN);
      if (yearMatches && yearMatches.length > 0) {
        // Get the maximum year found
        const years = yearMatches.map(y => parseInt(y, 10));
        extractedYear = Math.max(...years);
      }
    }

    // Build suggestion
    const suggestion: DocumentSuggestion = {
      confidence: bestMatch ? bestMatch.confidence : 0.0,
      source: 'title'
    };

    if (bestMatch) {
      suggestion.tag = bestMatch.tag;
      suggestion.category = bestMatch.category;
    }

    if (extractedYear) {
      suggestion.year = extractedYear;
    }

    return suggestion;
  }

  /**
   * Check if title is generic and should not trigger suggestions
   */
  private static isGenericTitle(title: string): boolean {
    const lowerTitle = title.toLowerCase();
    return this.GENERIC_TITLES.some(generic => lowerTitle.includes(generic));
  }

  /**
   * Format suggestion for display
   */
  static formatSuggestionText(suggestion: DocumentSuggestion): string {
    if (!suggestion.tag && !suggestion.year) {
      return '';
    }

    const parts: string[] = [];
    if (suggestion.tag) {
      parts.push(suggestion.tag);
    }
    if (suggestion.year) {
      parts.push(`(${suggestion.year})`);
    }

    const confidence = Math.round(suggestion.confidence * 100);
    return `${parts.join(' ')} • ${confidence}%`;
  }

  /**
   * Check if suggestion matches current form values
   */
  static suggestionMatchesForm(
    suggestion: DocumentSuggestion, 
    currentCategory: string, 
    currentYear: number | null
  ): boolean {
    const categoryMatches = suggestion.category === currentCategory;
    const yearMatches = !suggestion.year || suggestion.year === currentYear;
    return categoryMatches && yearMatches;
  }

  /**
   * Map suggestion category to form category options
   */
  static mapSuggestionToFormCategory(suggestion: DocumentSuggestion): string {
    if (!suggestion.category) {
      return '';
    }
    
    // Map internal categories to form options
    const categoryMap: { [key: string]: string } = {
      'tax-documents': 'tax-documents',
      'financial-statements': 'financial-statements',
      'receipts': 'receipts'
    };

    return categoryMap[suggestion.category] || 'other';
  }
}

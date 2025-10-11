import { DocumentSuggestionUtil } from './doc-suggest.util';

describe('DocumentSuggestionUtil', () => {
  describe('parseTitleForSuggestions', () => {
    it('should detect W-2 form', () => {
      const result = DocumentSuggestionUtil.parseTitleForSuggestions('My W-2 form for 2024');
      expect(result.tag).toBe('W-2');
      expect(result.year).toBe(2024);
      expect(result.confidence).toBe(0.8);
      expect(result.category).toBe('tax-documents');
    });

    it('should detect 1099-INT form', () => {
      const result = DocumentSuggestionUtil.parseTitleForSuggestions('1099-INT Interest Income 2023');
      expect(result.tag).toBe('1099-INT');
      expect(result.year).toBe(2023);
      expect(result.confidence).toBe(0.8);
    });

    it('should prefer specific over generic forms', () => {
      const result = DocumentSuggestionUtil.parseTitleForSuggestions('1099-NEC form 2024');
      expect(result.tag).toBe('1099-NEC');
      expect(result.confidence).toBe(0.8);
    });

    it('should extract maximum year when multiple years present', () => {
      const result = DocumentSuggestionUtil.parseTitleForSuggestions('W2 2022 and 2024 comparison');
      expect(result.year).toBe(2024);
    });

    it('should return zero confidence for generic titles', () => {
      const result = DocumentSuggestionUtil.parseTitleForSuggestions('Scan_01');
      expect(result.confidence).toBe(0.0);
    });

    it('should detect IRS notices', () => {
      const result = DocumentSuggestionUtil.parseTitleForSuggestions('IRS Notice CP2000 2024');
      expect(result.tag).toBe('IRS Notice');
      expect(result.confidence).toBe(0.7);
    });

    it('should detect receipts', () => {
      const result = DocumentSuggestionUtil.parseTitleForSuggestions('Office supplies receipt');
      expect(result.tag).toBe('Receipt');
      expect(result.category).toBe('receipts');
    });
  });

  describe('formatSuggestionText', () => {
    it('should format suggestion with tag and year', () => {
      const suggestion = { tag: 'W-2', year: 2024, confidence: 0.8, source: 'title' as const };
      const result = DocumentSuggestionUtil.formatSuggestionText(suggestion);
      expect(result).toBe('W-2 (2024) • 80%');
    });

    it('should format suggestion with only tag', () => {
      const suggestion = { tag: 'Receipt', confidence: 0.6, source: 'title' as const };
      const result = DocumentSuggestionUtil.formatSuggestionText(suggestion);
      expect(result).toBe('Receipt • 60%');
    });
  });

  describe('suggestionMatchesForm', () => {
    it('should match when category and year align', () => {
      const suggestion = { tag: 'W-2', year: 2024, confidence: 0.8, source: 'title' as const, category: 'tax-documents' };
      const result = DocumentSuggestionUtil.suggestionMatchesForm(suggestion, 'tax-documents', 2024);
      expect(result).toBe(true);
    });

    it('should not match when category differs', () => {
      const suggestion = { tag: 'W-2', year: 2024, confidence: 0.8, source: 'title' as const, category: 'tax-documents' };
      const result = DocumentSuggestionUtil.suggestionMatchesForm(suggestion, 'receipts', 2024);
      expect(result).toBe(false);
    });
  });
});

// Console test examples
console.log('🧪 Document Suggestion Utility Tests:');

// Test W-2 detection
const w2Test = DocumentSuggestionUtil.parseTitleForSuggestions('My W-2 form for 2024');
console.log('W-2 Test:', w2Test);

// Test 1099 detection
const form1099Test = DocumentSuggestionUtil.parseTitleForSuggestions('1099-INT Interest Income 2023');
console.log('1099-INT Test:', form1099Test);

// Test receipt detection
const receiptTest = DocumentSuggestionUtil.parseTitleForSuggestions('Office supplies receipt');
console.log('Receipt Test:', receiptTest);

// Test generic title (should return 0 confidence)
const genericTest = DocumentSuggestionUtil.parseTitleForSuggestions('Scan_01');
console.log('Generic Test:', genericTest);

// Test formatting
const formattedText = DocumentSuggestionUtil.formatSuggestionText(w2Test);
console.log('Formatted Text:', formattedText);

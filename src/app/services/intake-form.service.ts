import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TaxIntakeForm } from '../models/intake-form.model';

@Injectable({
  providedIn: 'root'
})
export class IntakeFormService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /**
   * Get client's intake form responses
   * GET /clients/:id/intake
   */
  getClientIntakeForm(clientId: number): Observable<TaxIntakeForm> {
    return this.http.get<TaxIntakeForm>(`${this.apiUrl}/clients/${clientId}/intake`);
  }

  /**
   * Submit intake form response
   * POST /clients/:id/intake/submit
   */
  submitIntakeForm(clientId: number, formData: TaxIntakeForm): Observable<any> {
    return this.http.post(`${this.apiUrl}/clients/${clientId}/intake/submit`, formData);
  }

  /**
   * Auto-save form data (using submit endpoint for now)
   */
  autoSaveForm(clientId: number, formData: Partial<TaxIntakeForm>): Observable<any> {
    return this.http.post(`${this.apiUrl}/clients/${clientId}/intake/submit`, {
      ...formData,
      status: 'draft'
    });
  }

  /**
   * Mask SSN for display (show only last 4 digits)
   */
  maskSSN(ssn: string): string {
    if (!ssn || ssn.length < 4) return '***-**-****';
    return `***-**-${ssn.slice(-4)}`;
  }

  /**
   * Format SSN input (add dashes)
   */
  formatSSN(ssn: string): string {
    const cleaned = ssn.replace(/\D/g, '');
    if (cleaned.length >= 9) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5, 9)}`;
    } else if (cleaned.length >= 5) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5)}`;
    } else if (cleaned.length >= 3) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    }
    return cleaned;
  }

  /**
   * Calculate form completion percentage
   */
  calculateProgress(formData: Partial<TaxIntakeForm>): number {
    let completedSections = 0;
    const totalSections = 7;

    // Section A - Personal Information
    if (formData.personalInformation?.fullName && 
        formData.personalInformation?.ssn && 
        formData.personalInformation?.address?.street) {
      completedSections++;
    }

    // Section B - Dependents (optional but check if started)
    if (formData.dependents !== undefined) {
      completedSections++;
    }

    // Section C - Income
    if (formData.incomeSource && formData.incomeSource.length > 0) {
      completedSections++;
    }

    // Section D - Deductions
    if (formData.deductionsAdjustments) {
      completedSections++;
    }

    // Section E - Health Coverage
    if (formData.healthCoverage?.hadInsuranceAllYear !== undefined) {
      completedSections++;
    }

    // Section F - Credits
    if (formData.credits) {
      completedSections++;
    }

    // Section G - Prior Year
    if (formData.priorYearInfo?.filedLastYear !== undefined) {
      completedSections++;
    }

    return Math.round((completedSections / totalSections) * 100);
  }

  /**
   * Generate unique ID for form elements
   */
  generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

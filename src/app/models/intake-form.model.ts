export interface PersonalInformation {
  fullName: string;
  dateOfBirth: string;
  ssn: string;
  maritalStatus: 'single' | 'married-jointly' | 'married-separately' | 'head-of-household' | 'qualifying-widower';
  spouseName?: string;
  spouseSsn?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  phone: string;
  email: string;
  driverLicense: {
    number: string;
    state: string;
    expiration: string;
  };
}

export interface Dependent {
  id: string;
  name: string;
  ssn: string;
  dateOfBirth: string;
  relationship: string;
  monthsLivedWithYou: number;
  fullYear: boolean;
  childCareExpenses: boolean;
  childCareAmount?: number;
}

export interface IncomeSource {
  id: string;
  type: 'w2' | '1099-nec' | '1099-misc' | '1099-int' | '1099-div' | '1099-b' | '1099-r' | 'ssa-1099' | 'rental' | 'business' | 'other';
  description: string;
  amount: number;
  employerName?: string;
  details?: any;
}

export interface DeductionsAdjustments {
  mortgageInterest: boolean;
  mortgageAmount?: number;
  propertyTaxes: boolean;
  propertyTaxAmount?: number;
  charitableCash: number;
  charitableNonCash: number;
  studentLoanInterest: boolean;
  studentLoanAmount?: number;
  iraContributions: number;
  iraType?: string;
  medicalExpenses: number;
  otherAdjustments: string;
}

export interface HealthCoverage {
  hadInsuranceAllYear: boolean;
  marketplaceCoverage: boolean;
  employerCoverage: boolean;
  form1095A: boolean;
  form1095B: boolean;
  form1095C: boolean;
}

export interface Credits {
  educationExpenses: number;
  tuition1098T: boolean;
  childCareExpenses: number;
  childCareProviderName?: string;
  childCareProviderEin?: string;
  adoptionExpenses: number;
  energyEfficiencyUpgrades: number;
}

export interface PriorYearInfo {
  filedLastYear: boolean;
  estimatedTaxPayments: Array<{
    date: string;
    amount: number;
  }>;
  irsNotices: boolean;
  otherNotes: string;
}

export interface TaxIntakeForm {
  id?: number;
  clientId: number;
  personalInformation: PersonalInformation;
  dependents: Dependent[];
  incomeSource: IncomeSource[];
  deductionsAdjustments: DeductionsAdjustments;
  healthCoverage: HealthCoverage;
  credits: Credits;
  priorYearInfo: PriorYearInfo;
  status: 'draft' | 'submitted' | 'completed';
  currentSection: number;
  progress: number;
  lastSaved: string;
  submittedAt?: string;
}

export interface IntakeFormSection {
  id: number;
  title: string;
  description: string;
  icon: string;
  completed: boolean;
  required: boolean;
}

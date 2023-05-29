export interface AppManagementState {
  currentLocale: string;
  mode: 'light' | 'dark';
  loading: boolean;
  error: string;
  userData: any;
}

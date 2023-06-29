export interface AuthManagementProps {
  readonly location?: any;
  readonly section?: 'login' | 'register';
  readonly appVersion?: string;
}

export interface AuthManagementState {
  loading: boolean;
  error: string;
}

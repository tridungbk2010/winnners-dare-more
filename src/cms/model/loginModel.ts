export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginState {
  token?: string;
  userName?: string;
  loading: boolean;
  error?: string;
}
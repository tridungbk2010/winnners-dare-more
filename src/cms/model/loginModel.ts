export interface LoginForm {
  email: string;
  password: string;
  token?: string;
}

export interface LoginState {
  token?: string;
  userName?: string;
  loading: boolean;
  error?: string;
  status?: number;
}

export interface UserState {
  token?: string;
  userName?: string;
  loading: boolean;
  error?: string;
  status?: number;
}
export interface LoginData {
  username: string,
  password: string
}

export const createEmptyFormData = () : LoginData => ({
  username: '',
  password: '',
});
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface typeRegister {
  username: string;
  email: string;
  password: string;
  password2: string;
}

export interface typeLogin {
  username: string;
  email: string;
  password: string;
}

// props in input component
export interface RegisterInputProps {
  register: typeRegister;
  errors: FieldErrors<typeRegister>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

// props in loginInput component
export interface LoginInputProps {
  login: UseFormRegister<typeLogin>;
  errors: FieldErrors<typeLogin>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

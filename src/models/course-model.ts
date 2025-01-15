import { FieldErrors } from "react-hook-form";

export interface CourseType {
  title: string;
  subDescription: string;
  description?: string;
  originalPrice: number;
  price: number;
  image?: string;
}

export interface CourseSliceType {
  id: number;
  title: string;
  subDescription: string;
  description?: string;
  originalPrice: number;
  price: number;
  image?: string;
}

// form props from in modal
export interface FormProps {
  course: CourseType;
  text: string;
  imagePreview: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: FieldErrors<CourseType>;
}

export interface CardProps {
  title: string;
  price: number;
  subDescription: string;
  description?: string;
  originalPrice: number;
  image?: string;
}

import {FieldError} from 'react-hook-form'
import {LucideIcon} from "lucide-react";
import {InputHTMLAttributes} from "react";

export interface IFieldProps {
  name: string
  placeholder: string
  error?: FieldError
  Icon?: LucideIcon
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps
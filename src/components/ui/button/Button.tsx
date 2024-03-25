import {InputHTMLAttributes} from "react";
import {Loader} from "@/components/ui/loader/Loader";
import styles from'./Button.module.scss';
interface IButton extends InputHTMLAttributes<HTMLButtonElement>{
  isLoading?: boolean
}

export function Button ({isLoading, children}:IButton, ){
  return<button className={styles.button}>{isLoading ? <Loader /> : children}</button>
}
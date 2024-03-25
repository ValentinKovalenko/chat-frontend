import cn from "clsx";
import styles from './Field.module.scss'
import {TypeInputProps} from "@/components/ui/field/field.types";

const Field = (({error,name, style, Icon, className, ...rest}: TypeInputProps) => {

    return (
      <label className={cn(styles.field, className)} style={style}>
        {Icon && (
          <div className={styles.icon}>
            <Icon/>
          </div>
        )}
        <input name={name} {...rest}/>
        {error && <div className={styles.error}>{error.message}</div>}
      </label>
    )
  }
)

export default Field;
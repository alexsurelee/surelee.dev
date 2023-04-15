import cn from "clsx";

import styles from "styles/components/button.module.scss";

export function Button({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const classes = cn(className, styles.button);
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

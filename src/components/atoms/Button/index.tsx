import { VariantProps, cx } from "class-variance-authority"
import { ButtonHTMLAttributes, FC } from "react"
import button from "./button.cva"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button> & {

}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <>
      <button className={cx(button(props), className)} {...props}>
        {children}
      </button>
    </>
  )
}

export default Button
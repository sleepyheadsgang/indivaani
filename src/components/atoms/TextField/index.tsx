import { FC, TextareaHTMLAttributes } from "react"
import textarea from "./textarea.cva"
import { VariantProps, cx } from "class-variance-authority"


type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & VariantProps<typeof textarea> & {

}
const TextField: FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <>
      <textarea className={cx(textarea(), className)} {...props} />
    </>
  )
}

export default TextField
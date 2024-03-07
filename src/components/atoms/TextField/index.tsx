import { FC, TextareaHTMLAttributes } from "react"

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {

}
const TextField: FC<TextareaProps> = ({ ...props }) => {
  return (
    <>
      <textarea {...props} />
    </>
  )
}

export default TextField
import { nanoid } from 'nanoid';
import { FC, SelectHTMLAttributes } from "react"

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options?: { value: string, label: string }[]
}
const Select: FC<SelectProps> = ({ label, options = [], ...props }) => {
  return (
    <div>
      {label ? (
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
      ) : null}
      <select
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 outline-none sm:text-sm sm:leading-6 appearance-none"
        {...props}
      >
        {options.map(option => {
          return (
            <option
              key={nanoid()}
              value={option.value}
            >
              {option.label}
            </option>
          )
        })}
      </select>

    </div>
  )
}

export default Select
import languagesOption from '@utils/languages'
import Select from '../atoms/Select'
import TextField from '../atoms/TextField'
import { FC } from 'react'

type LanguageTextField = {
  type: 'prompt' | 'result'
}

const LanguageTextField: FC<LanguageTextField> = ({ type }) => {
  return (
    <div className='flex flex-col gap-4'>
      <Select options={languagesOption} />
      <TextField placeholder={type === 'prompt' ? 'Enter text...' : 'Result'} className='w-80 h-40' />
    </div>
  )
}

export default LanguageTextField
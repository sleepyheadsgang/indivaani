import Button from '../atoms/Button'
import Select from '../atoms/Select'
import TextField from '../atoms/TextField'
import { FC, useEffect, useState } from 'react'
import language from '@api/language'
import translate from '@api/translate'
import { ClipboardIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'

const LanguageTextField: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  const [listOfLanguages, setListOfLanguages] = useState([]);
  const [translationResult, setTranslationResult] = useState('');
  const [text, setText] = useState('')

  useEffect(() => {
    language().then((result) => {
      const langs = result.map(lang => {
        const langCap = lang.charAt(0).toUpperCase() + lang.slice(1);
        return ({ label: langCap, value: lang })
      })

      setListOfLanguages(langs)
    })

  }, []);


  const copyToClipboard = () => {
    navigator.clipboard.writeText(translationResult)
    toast('Copied to clipboard!', { type: 'success' })
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await translate(text, selectedLanguage, 'random id')

    setTranslationResult(result)
  }

  return (
    <>
      <div className='flex flex-col w-full gap-4 border-primary border-2 rounded-md overflow-hidden mt-10'>
        <TextField value={text} onChange={(e) => {
          setText(e.target.value)
        }} className="p-3 resize-none outline-none" />

        <div className='flex justify-between items-center m-3'>
          <Select options={listOfLanguages} value={selectedLanguage} onChange={(e) => { setSelectedLanguage(e.target.value) }} />
          <Button variant='primary' roundness='pill' onClick={onSubmit}>
            Translate
          </Button>
        </div>
      </div>

      {translationResult ? <div className='mt-8'>
        <div className='flex justify-between'>
          <p className='font-bold text-lg'>Result</p>
          <button onClick={copyToClipboard}>
            <ClipboardIcon className='w-6 h-6' />
          </button>
        </div>
        <div className='w-full p-4 rounded-md mt-2 border-2'>
          {translationResult}
        </div>
      </div> : null}
    </>
  )
}

export default LanguageTextField
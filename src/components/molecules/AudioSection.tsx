import transcribe from "@api/transcribe"
import { MicrophoneIcon } from "@heroicons/react/24/outline"
import { cx } from "class-variance-authority"
import { useEffect, useState } from "react"
import { useAudioRecorder } from 'react-audio-voice-recorder'
import Select from "../atoms/Select"
import language from "@api/language"
import Button from "../atoms/Button"
const AudioSection = () => {
  const [listOfLanguages, setListOfLanguages] = useState([]);
  const [loading, setLoading] = useState(false)
  const { startRecording, isRecording, stopRecording, recordingBlob } = useAudioRecorder()

  useEffect(() => {
    language().then((result) => {
      const langs = result.map((lang: string) => {
        const langCap = lang.charAt(0).toUpperCase() + lang.slice(1);
        return ({ label: langCap, value: lang })
      })

      setListOfLanguages(langs)
    })

  }, []);

  const onTranscribe = () => {

    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  useEffect(() => {
    // convert blob ito file
    if (recordingBlob) {
      const audioFile = new File([recordingBlob], 'audio.wav');

      transcribe(audioFile, 'hindi')
    }

  }, [recordingBlob])

  return (
    <>
      <section className='flex px-6 lg:px-8'>
        <img src="/women-on-call.svg" className='w-full max-w-sm' alt="" />
        <div className='flex items-center w-full flex-col'>
          <p className='text-4xl font-bold tracking-tight text-gray-900'>Record and translate your voice!</p>
          <p className='text-xl mt-10'>Transcribe your voice to any language!</p>

          <div className='mt-10 flex flex-col items-center'>
            <div className="relative z-20 mb-4">
              <Button disabled className='bg-primary p-6 rounded-full' onClick={onTranscribe}>
                <MicrophoneIcon className='w-8 h-8 text-white' />
              </Button>
              <span className={cx(`w-20 h-20 rounded-full bg-primary absolute -z-10 top-0 left-0`, isRecording ? 'animate-ping' : '')}>

              </span>
            </div>
            <Select options={listOfLanguages} />

            <Button variant='primary' disabled={!recordingBlob} roundness='pill' className="mt-4">Transcribe</Button>

          </div>
        </div>
      </section>
    </>
  )
}

export default AudioSection
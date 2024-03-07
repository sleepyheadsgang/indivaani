import transcribe from "@api/transcribe"
import { MicrophoneIcon } from "@heroicons/react/24/outline"
import { cx } from "class-variance-authority"
import { useEffect } from "react"
import { useAudioRecorder } from 'react-audio-voice-recorder'
import Select from "../atoms/Select"
const AudioSection = () => {
  const { startRecording, isRecording, stopRecording, recordingBlob } = useAudioRecorder()

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

          <div className='mt-24 flex flex-col items-center'>
            <div className="relative z-20">
              <Select />
              <button className='bg-primary p-6 rounded-full' onClick={onTranscribe}>
                <MicrophoneIcon className='w-8 h-8 text-white' />
              </button>
              <span className={cx(`w-20 h-20 rounded-full bg-primary absolute -z-10 top-0 left-0`, isRecording ? 'animate-ping' : '')}>

              </span>
            </div>

            <p className='text-xl mt-10'>Transcribe your voice to any language!</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AudioSection
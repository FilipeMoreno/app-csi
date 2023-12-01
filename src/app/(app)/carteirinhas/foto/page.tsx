'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

export default function CarteirinhasFoto() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'environment',
  }

  const webcamRef = useRef<Webcam>(null)
  const [url, setUrl] = useState<string | null>(null)
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()
    if (imageSrc) {
      setUrl(imageSrc)
    }
  }, [webcamRef])

  return (
    <div className="h-full w-full rounded-lg bg-secondary p-4">
      {!url && (
        <div>
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
            screenshotQuality={1}
          />
          <Button variant={'outline'} className="my-2 w-full" onClick={capture}>
            Tirar foto
          </Button>
        </div>
      )}
      {url && (
        <div>
          <div>
            <Image src={url} alt="Screenshot" />
          </div>
          <div className="my-2 flex flex-row space-x-2">
            <Button
              onClick={() => {
                setUrl(null)
              }}
              className="w-full"
              variant={'outline'}
            >
              Tirar novamente
            </Button>
            <Button variant={'outline'} className="w-full">
              Confirmar
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

'use client'

import { Button } from '@/components/ui/button'
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
    <div>
      {!url && (
        <div>
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          />
          <Button onClick={capture}>Tirar foto</Button>
        </div>
      )}
      {url && (
        <div>
          <div>
            <img src={url} alt="Screenshot" />
          </div>
          <Button
            onClick={() => {
              setUrl(null)
            }}
          >
            Deletar
          </Button>
        </div>
      )}
    </div>
  )
}

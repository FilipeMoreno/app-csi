'use client'

import { Button } from '@/components/ui/button'
import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

export default function CarteirinhasScanner() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
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
      <div className="flex flex-wrap gap-8">
        <div className="w-full">
          <h1 className="text-2xl font-bold">Carteirinha</h1>
          <p className="text-sm text-gray-300">Detalhes da carteirinha</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-red-900 p-4">
          <span className="font-thin">Status:</span>
          <span className="text-xl font-bold">Aguardando foto</span>
        </div>
        <div className="flex w-full flex-row items-center justify-center space-x-2">
          <Button className="w-full">Tirar foto</Button>
          <Button className="w-full">Produzir</Button>
          <Button className="w-full">Pronta</Button>
          <Button className="w-full">Entregar</Button>
        </div>
      </div>
      <div className="my-4">
        <div className="flex flex-wrap gap-4">
          <div className="w-full">
            <h1 className="text-2xl font-bold">Nome</h1>
            <p className="text-sm text-gray-300">Nome do aluno</p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-bold">Curso</h1>
            <p className="text-sm text-gray-300">Nome do curso</p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-bold">Matrícula</h1>
            <p className="text-sm text-gray-300">Número da matrícula</p>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-bold">Validade</h1>
            <p className="text-sm text-gray-300">Data de validade</p>
          </div>
        </div>
      </div>
      <div className="bg-red-500">
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <Button onClick={capture}>Tirar foto</Button>
        {url && (
          <>
            <div>
              <Button
                onClick={() => {
                  setUrl(null)
                }}
              >
                Deletar
              </Button>
            </div>
            <div>
              <img src={url} alt="Screenshot" />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

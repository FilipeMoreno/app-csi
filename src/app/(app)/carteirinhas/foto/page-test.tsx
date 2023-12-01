'use client'
import { Button } from '@/components/ui/button'
import { useState, useRef, useEffect } from 'react'
import { Camera, CameraType } from 'react-camera-pro-with-torch'

export default function CarteirinhasFoto() {
  const [numberOfCameras, setNumberOfCameras] = useState(0)
  const [image, setImage] = useState<string | null>(null)
  const [showImage, setShowImage] = useState<boolean>(false)
  const camera = useRef<CameraType>(null)
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([])
  const [activeDeviceId, setActiveDeviceId] = useState<string | undefined>(
    undefined,
  )

  useEffect(() => {
    ;(async () => {
      const devices = await navigator.mediaDevices.enumerateDevices()
      const videoDevices = devices.filter((i) => i.kind === 'videoinput')
      setDevices(videoDevices)
    })()
  })

  return (
    <div className="h-full w-full rounded-lg bg-secondary p-4">
      <div className="h-16 w-16">
        <Camera
          ref={camera}
          aspectRatio="cover"
          // numberOfCamerasCallback={(i) => setNumberOfCameras(i)}
          // videoSourceDeviceId={activeDeviceId}
          errorMessages={{
            noCameraAccessible:
              'No camera device accessible. Please connect your camera or try a different browser.',
            permissionDenied:
              'Permission denied. Please refresh and give camera permission.',
            switchCamera:
              'It is not possible to switch camera to different one because there is only one video device accessible.',
            canvas: 'Canvas is not supported.',
          }}
          videoReadyCallback={() => {
            console.log('Video feed ready.')
          }}
        />
      </div>
      {camera?.current?.flashStatus() ? (
        <button
          onClick={() => {
            if (camera?.current) {
              camera.current.toggleTorch()
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 16 16"
            fill="#00000"
          >
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
          </svg>
        </button>
      ) : (
        ''
      )}
    </div>
  )
}
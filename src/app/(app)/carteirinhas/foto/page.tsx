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
      {showImage ? (
        <div
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            setShowImage(!showImage)
          }}
        />
      ) : (
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
      )}
      <div>
        <select
          onChange={(event) => {
            setActiveDeviceId(event.target.value)
          }}
        >
          {devices.map((d) => (
            <option key={d.deviceId} value={d.deviceId}>
              {d.label}
            </option>
          ))}
        </select>
        <div
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => {
            setShowImage(!showImage)
          }}
        />
        <div
          onClick={() => {
            if (camera.current) {
              const photo = camera.current.takePhoto()
              console.log(photo)
              setImage(photo)
            }
          }}
        />
        <Button
          disabled={numberOfCameras <= 1}
          onClick={() => {
            if (camera.current) {
              const result = camera.current.switchCamera()
              console.log(result)
            }
          }}
        />
      </div>
    </div>
  )
}

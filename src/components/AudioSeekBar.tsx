import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  FunctionComponent,
  MouseEvent,
} from 'react'
import { useGlobalAudioPlayer } from 'react-use-audio-player'
import { Slider } from './ui/slider'

interface AudioSeekBarProps {
  className?: string
}

export const AudioSeekBar: FunctionComponent<AudioSeekBarProps> = (props) => {
  const { className = '' } = props
  const { playing, getPosition, duration, seek } = useGlobalAudioPlayer()
  const [pos, setPos] = useState(0)
  const frameRef = useRef<number>()

  const seekBarElem = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animate = () => {
      setPos(getPosition())
      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = window.requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const goTo = useCallback(
    (event: MouseEvent) => {
      const { pageX: eventOffsetX } = event

      if (seekBarElem.current) {
        const elementOffsetX = seekBarElem.current.offsetLeft
        const elementWidth = seekBarElem.current.clientWidth
        const percent = (eventOffsetX - elementOffsetX) / elementWidth
        seek(percent * duration)
      }
    },
    [duration, playing, seek],
  )

  if (duration === Infinity) return null

  return (
    <div>
      {/* <div
        className="mt-4 flex h-1 w-96 cursor-pointer overflow-hidden rounded-full bg-zinc-800"
        ref={seekBarElem}
        onClick={goTo}
      >
        <div
          style={{
            width: `${(pos / duration) * 100}%`,
          }}
          className="rounded-full bg-primary"
        />
        <div className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"></div>
      </div> */}
      <input
        type="range"
        min="0"
        max={duration}
        value={pos}
        className="mt-2 w-80 cursor-pointer overflow-hidden rounded-full accent-zinc-800 lg:w-96"
        ref={seekBarElem as React.RefObject<HTMLInputElement>}
        onChange={(e) => seek(Number(e.target.value))}
        onClick={goTo}
      />
    </div>
  )
}

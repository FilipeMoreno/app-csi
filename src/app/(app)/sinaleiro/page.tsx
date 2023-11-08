'use client'
import { useEffect, useState } from 'react'
import { useGlobalAudioPlayer } from 'react-use-audio-player'
import config from './config.json'
import songsJson from './musicas.json'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  TrackNextIcon,
  TrackPreviousIcon,
  PlayIcon,
  PauseIcon,
} from '@radix-ui/react-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function SinaleiroHome() {
  const [songIndex, setSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volumeValue, setVolumeValue] = useState(0.5)
  const [tocandoAgora, setTocandoAgora] = useState(0)

  const { load, play, pause, setVolume } = useGlobalAudioPlayer()

  useEffect(() => {
    load(songsJson[songIndex].url, {
      autoplay: verifyAutoPlay(),
      initialVolume: volumeValue,
      onend: () => nextMusic(),
      onpause: () => console.log('Música pausada.'),
      onplay: () => console.log(`Tocando agora: ${songsJson[songIndex].title}`),
      onload() {
        console.log('Música carregada.')
        setTocandoAgora(songsJson[songIndex].id)
      },
    })
  }, [songIndex])

  function playMusic() {
    if (!isPlaying) {
      play()
      setIsPlaying(true)
    }
  }

  function pauseMusic() {
    if (isPlaying) {
      pause()
      setIsPlaying(false)
    }
  }

  function nextMusic() {
    console.log(`Próxima música: ${songIndex + 1}`)
    if (songIndex === songsJson.length - 1) {
      setSongIndex(0)
      return
    }
    setSongIndex(songIndex + 1)
  }

  function verifyAutoPlay() {
    if (isPlaying) {
      return true
    }
    return false
  }

  const handleVolumeChange = (event) => {
    setVolume(event.target.value)
    setVolumeValue(event.target.value)
    console.log(`Setting volume to ${event.target.value}`)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="space-x-2">
        <Button onClick={nextMusic}>
          <TrackPreviousIcon />
        </Button>
        {(isPlaying && (
          <Button onClick={pauseMusic}>
            <PauseIcon />
          </Button>
        )) || (
          <Button onClick={playMusic}>
            <PlayIcon />
          </Button>
        )}

        <Button onClick={nextMusic}>
          <TrackNextIcon />
        </Button>
        <Input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volumeValue}
          onChange={handleVolumeChange}
        />
      </div>
      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>Lista de músicas</CardTitle>
            <CardDescription>Mostrando músicas disponíveis</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {songsJson.map((song, index) =>
                song.id === tocandoAgora ? (
                  <li
                    key={song.id}
                    className="rounded-lg bg-zinc-900 p-2 hover:cursor-pointer hover:bg-opacity-40"
                    onClick={() => setSongIndex(index)}
                  >
                    <b>{song.title}</b>
                  </li>
                ) : (
                  <li
                    key={song.id}
                    className="rounded-lg border border-zinc-950 p-2 hover:cursor-pointer hover:border hover:border-zinc-900 hover:bg-opacity-40"
                    onClick={() => setSongIndex(index)}
                  >
                    {song.title}
                  </li>
                ),
              )}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

'use client'
import { useEffect, useRef, useState } from 'react'
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
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Volume1Icon, Volume2Icon, VolumeIcon, VolumeXIcon } from 'lucide-react'
import { date } from 'zod'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@radix-ui/react-dropdown-menu'

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
      onstop: () => console.log('Música parada.'),
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
    if (songIndex === songsJson.length - 1) {
      setSongIndex(0)
      return
    }
    setSongIndex(songIndex + 1)
  }

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(event.target.value)
    setVolume(volume)
    setVolumeValue(volume)
    localStorage.setItem('volume', event.target.value)
  }

  function verifyAutoPlay() {
    if (isPlaying) {
      return true
    }
    return false
  }

  function muteMusica() {
    const getVolume = localStorage.getItem('volume')
    setVolumeValue(getVolume ? parseFloat(getVolume) : 0.5)
    setVolume(getVolume ? parseFloat(getVolume) : 0.5)

    if (volumeValue > 0) {
      setVolumeValue(0)
      setVolume(0)
    }
  }

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xs">Horário atual:</h1>
        <h1 className="text-3xl font-bold text-red-400">
          {date.getHours().toLocaleString('pt-BR', {
            minimumIntegerDigits: 2,
          })}
          :
          {date.getMinutes().toLocaleString('pt-BR', {
            minimumIntegerDigits: 2,
          })}
          :
          {date.getSeconds().toLocaleString('pt-BR', {
            minimumIntegerDigits: 2,
          })}
        </h1>
      </div>
      <div className="mb-2  w-full ">
        <h1 className="text-center text-xl font-bold uppercase">
          {isPlaying ? 'Em execução' : 'Pausado'}
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex flex-row space-x-2">
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
        </div>

        <div className="flex w-full flex-row items-center space-x-1">
          {volumeValue === 0 && <VolumeXIcon onClick={muteMusica} />}
          {volumeValue < 0.5 && volumeValue > 0 && (
            <Volume1Icon onClick={muteMusica} />
          )}
          {volumeValue >= 0.5 && <Volume2Icon onClick={muteMusica} />}
          <Input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volumeValue}
            onChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </div>

      <Tabs defaultValue="musicas" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="musicas">Músicas</TabsTrigger>
          <TabsTrigger value="horarios">Horários</TabsTrigger>
          <TabsTrigger value="config">Configurações</TabsTrigger>
        </TabsList>
        <TabsContent value="musicas">
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
        </TabsContent>
        <TabsContent value="horarios">
          <Card>
            <CardHeader>
              <CardTitle>Lista de horários</CardTitle>
              <CardDescription>Horários em que a musica tocará</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="config">
          <Card>
            <CardHeader>
              <CardTitle>Configurações</CardTitle>
              <CardDescription>
                Mostrando as configurações do sistema
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

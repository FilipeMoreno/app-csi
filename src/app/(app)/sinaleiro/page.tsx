'use client'

import { useEffect, useState } from 'react'
import { useGlobalAudioPlayer } from 'react-use-audio-player'
import { BounceLoader } from 'react-spinners'
import {
  CheckIcon,
  Trash2Icon,
  Volume1Icon,
  Volume2Icon,
  VolumeIcon,
  VolumeXIcon,
} from 'lucide-react'
import { Player } from '@lottiefiles/react-lottie-player'

import horarios from './horarios.json'
import songsJson from './musicas.json'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  TrackNextIcon,
  TrackPreviousIcon,
  PlayIcon,
  PauseIcon,
} from '@radix-ui/react-icons'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { AudioSeekBar } from '@/components/AudioSeekBar'
import { TimeLabel } from '@/components/AudioTimeLabel'

export default function SinaleiroHome() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volumeValue, setVolumeValue] = useState(0.5)
  const [tocandoAgora, setTocandoAgora] = useState(0)
  const [loadMusic, setLoadMusic] = useState(true)
  const [search, setSearch] = useState('')
  const [musicResults, setMusicResults] = useState(songsJson)
  const [currentSongId, setCurrentSongId] = useState(1)
  const [modoAleatorio, setModoAleatorio] = useState(false)
  const [mostrarControles, setMostrarControles] = useState(true)

  const { load, play, pause, setVolume } = useGlobalAudioPlayer()

  useEffect(() => {
    const currentSong = musicResults.find((song) => song.id === currentSongId)
    if (!currentSong) return

    load(currentSong.url, {
      autoplay: verifyAutoPlay(),
      initialVolume: volumeValue,
      onend: () => nextMusic(),
      onpause: () => console.log('Música pausada.'),
      onplay: () => console.log(`Tocando agora: ${currentSong.title}`),
      onstop: () => console.log('Música parada.'),
      onload() {
        console.log('Música carregada.')
        setTocandoAgora(currentSong.id)
        setLoadMusic(false)
      },
    })
  }, [currentSongId])

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
    setLoadMusic(true)

    if (modoAleatorio) {
      const randomIndex = Math.floor(Math.random() * musicResults.length)
      if (currentSongId === musicResults[randomIndex].id) {
        return nextMusic()
      }
      setCurrentSongId(musicResults[randomIndex].id)
      return
    }

    const currentIndex = musicResults.findIndex(
      (song) => song.id === currentSongId,
    )
    const nextIndex = (currentIndex + 1) % musicResults.length
    setCurrentSongId(musicResults[nextIndex].id)
  }

  function previousMusic() {
    setLoadMusic(true)

    const currentIndex = musicResults.findIndex(
      (song) => song.id === currentSongId,
    )
    let nextIndex = currentIndex - 1
    if (nextIndex < 0) {
      nextIndex = musicResults.length - 1
    }
    setCurrentSongId(musicResults[nextIndex].id)
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

    if (getVolume && parseFloat(getVolume) === 0) {
      setVolumeValue(0.5)
      setVolume(0.5)
      localStorage.setItem('volume', (0.5).toString())
      return
    }

    if (volumeValue > 0) {
      setVolumeValue(0)
      setVolume(0)
    }
  }

  async function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value === '') {
      setMusicResults(songsJson)
      return
    }

    setSearch(event.target.value.toLowerCase())
    const results = songsJson.filter((musica) =>
      musica.title.toLowerCase().includes(search.toLowerCase()),
    )

    if (results.length === 0) {
      return setMusicResults([])
    }

    setMusicResults(results)
  }

  function selectMusic(id: number) {
    if (id === currentSongId) {
      return
    }

    setLoadMusic(true)

    const currentIndex = musicResults.findIndex((song) => song.id === id)

    setCurrentSongId(musicResults[currentIndex].id)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {mostrarControles && (
        <div className="mb-2  w-full ">
          <h1 className="text-center text-xs font-bold uppercase">
            Controle manual
          </h1>
        </div>
      )}
      <div className="flex w-full flex-col items-center justify-center">
        {mostrarControles && (
          <>
            <div className="flex flex-row space-x-2">
              <Button
                onClick={previousMusic}
                className="bg-zinc-800 hover:bg-zinc-800 hover:bg-opacity-60"
              >
                <TrackPreviousIcon className="text-primary" />
              </Button>
              {(isPlaying && (
                <Button
                  className="bg-zinc-800 hover:bg-zinc-800 hover:bg-opacity-60"
                  onClick={pauseMusic}
                >
                  <PauseIcon className="text-primary" />
                </Button>
              )) || (
                <Button
                  className="bg-zinc-800 hover:bg-zinc-800 hover:bg-opacity-60"
                  onClick={playMusic}
                >
                  <PlayIcon className="text-primary" />
                </Button>
              )}

              <Button
                className="bg-zinc-800 hover:bg-zinc-800 hover:bg-opacity-60"
                onClick={nextMusic}
              >
                <TrackNextIcon className="text-primary" />
              </Button>
            </div>
            <div className="bg-text-400 mt-2 flex w-96 flex-row items-center">
              {volumeValue === 0 && (
                <VolumeXIcon
                  onClick={muteMusica}
                  className=" mr-2 cursor-pointer text-red-500"
                />
              )}
              {volumeValue < 0.2 && volumeValue > 0 && (
                <VolumeIcon
                  onClick={muteMusica}
                  className="mr-2 cursor-pointer"
                />
              )}
              {volumeValue < 0.7 && volumeValue > 0.2 && (
                <Volume1Icon
                  onClick={muteMusica}
                  className="mr-2 cursor-pointer"
                />
              )}
              {volumeValue >= 0.7 && (
                <Volume2Icon
                  size={25}
                  onClick={muteMusica}
                  className="mr-2 cursor-pointer"
                />
              )}
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volumeValue}
                onChange={handleVolumeChange}
                className="w-full cursor-pointer accent-zinc-800"
              />
            </div>
            <div className="">
              <div className="playBar__timeStuff">
                <AudioSeekBar className="w-full" />
              </div>
              <div className="flex items-center justify-center">
                <TimeLabel id={0} />
              </div>
            </div>
          </>
        )}
      </div>

      <Tabs defaultValue="musicas" className="my-4 w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="musicas">Músicas</TabsTrigger>
          <TabsTrigger value="horarios">Horários</TabsTrigger>
          <TabsTrigger value="config">Configurações</TabsTrigger>
        </TabsList>
        <TabsContent value="musicas">
          <Card>
            <CardHeader>
              <CardTitle>Lista de músicas</CardTitle>
              <div className="flex flex-row items-center justify-between">
                <CardDescription>Mostrando músicas disponíveis</CardDescription>
                <Button variant="default">+ Nova música</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Pesquisar uma música..."
                onChange={handleInputChange}
              />
              <ScrollArea className="my-4 h-96 w-full">
                {musicResults.length === 0 && (
                  <div>
                    <h1 className="text-center text-xs">
                      nenhum resultado encontrado
                    </h1>
                  </div>
                )}
                {loadMusic && (
                  <div className="absolute h-screen w-screen bg-zinc-950 opacity-60">
                    <BounceLoader
                      color="#FFF"
                      size={100}
                      style={{
                        position: 'absolute',
                        top: '10%',
                        left: '30%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  </div>
                )}

                <ul className="space-y-2">
                  {musicResults.map((song) =>
                    song.id === tocandoAgora ? (
                      <li
                        key={song.id}
                        className="flex flex-row items-center space-x-2 rounded-lg bg-zinc-800 p-4 hover:cursor-pointer hover:bg-opacity-40"
                        onClick={() => {
                          selectMusic(song.id)
                        }}
                      >
                        {(isPlaying && (
                          <Player
                            autoplay
                            loop
                            src="/lottie/audio-wave.json"
                            style={{
                              height: '20px',
                              width: '20px',
                              color: 'green',
                            }}
                          />
                        )) || <p>{song.id}.</p>}
                        {(isPlaying && (
                          <b className="text-green-500">{song.title}</b>
                        )) || <b>{song.title}</b>}

                        {!mostrarControles && <TimeLabel id={1} />}
                      </li>
                    ) : (
                      <li
                        key={song.id}
                        className="flex flex-row space-x-2 rounded-lg border border-zinc-950 p-4 hover:cursor-pointer hover:border hover:border-zinc-800 hover:bg-opacity-40"
                        onClick={() => {
                          selectMusic(song.id)
                        }}
                      >
                        <p>{song.id}.</p>
                        <p>{song.title}</p>
                      </li>
                    ),
                  )}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="horarios" className="max-h-screen">
          <Card>
            <CardHeader>
              <CardTitle>Lista de horários</CardTitle>
              <div className="flex flex-row items-center justify-between">
                <CardDescription>
                  Horários em que a musica tocará
                </CardDescription>
                <Button variant="default">+ Novo horário</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="segunda-feira" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  {Object.entries(horarios).map(([day], index) => (
                    <TabsTrigger key={index} value={day}>
                      {day.replace('-feira', '')}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <ScrollArea className="h-96 w-full">
                  {Object.entries(horarios).map(([day, times], index) => (
                    <TabsContent key={index} value={day}>
                      {times.length === 0 && (
                        <div className="my-4 flex items-center justify-center">
                          <h1 className="text-xs">
                            nenhum horário cadastrado para {day}
                          </h1>
                        </div>
                      )}
                      {times.map((time) => (
                        <div
                          key={time.id}
                          className="my-4 flex h-full flex-row items-center space-x-4"
                        >
                          <label className="w-full">
                            Horário
                            <Input type="time" defaultValue={time.horario} />
                          </label>

                          <label className="w-full">
                            Duração
                            <Input type="number" defaultValue={time.duracao} />
                          </label>

                          <Button className="mt-6 h-full" variant={'outline'}>
                            <CheckIcon size={15} />
                          </Button>
                          <Button className="mt-6 h-full" variant={'outline'}>
                            <Trash2Icon size={15} />
                          </Button>
                        </div>
                      ))}
                    </TabsContent>
                  ))}
                </ScrollArea>
              </Tabs>
            </CardContent>
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
            <CardContent className="grid gap-6">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="necessary" className="flex flex-col space-y-1">
                  <span>Controle manual</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    Exibe os controles de música na tela
                  </span>
                </Label>
                {(mostrarControles && (
                  <Switch
                    id="controles"
                    checked
                    onClick={() => setMostrarControles(false)}
                  />
                )) || (
                  <Switch
                    id="controles"
                    onClick={() => setMostrarControles(true)}
                  />
                )}
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="necessary" className="flex flex-col space-y-1">
                  <span>Aleatório</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    Toca as músicas em ordem aleatória
                  </span>
                </Label>
                {(modoAleatorio && (
                  <Switch
                    id="aleatorio"
                    checked
                    onClick={() => setModoAleatorio(false)}
                  />
                )) || (
                  <Switch
                    id="aleatorio"
                    onClick={() => setModoAleatorio(true)}
                  />
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Salvar configurações
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

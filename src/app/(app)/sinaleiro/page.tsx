'use client'

import { useEffect, useState } from 'react'
import { useGlobalAudioPlayer } from 'react-use-audio-player'
import { BounceLoader } from 'react-spinners'
import { Volume1Icon, Volume2Icon, VolumeXIcon } from 'lucide-react'
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

export default function SinaleiroHome() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volumeValue, setVolumeValue] = useState(0.5)
  const [tocandoAgora, setTocandoAgora] = useState(0)
  const [loadMusic, setLoadMusic] = useState(true)
  const [search, setSearch] = useState('')
  const [musicResults, setMusicResults] = useState(songsJson)
  const [currentSongId, setCurrentSongId] = useState(1)

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
    setLoadMusic(true)

    const currentIndex = musicResults.findIndex((song) => song.id === id)

    setCurrentSongId(musicResults[currentIndex].id)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-2  w-full ">
        <h1 className="text-center text-xs font-bold uppercase">
          Controle manual
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
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

        <div className="bg-text-400 flex w-full flex-row items-center">
          {volumeValue === 0 && (
            <VolumeXIcon onClick={muteMusica} className=" mr-2 text-red-500" />
          )}
          {volumeValue < 0.5 && volumeValue > 0 && (
            <Volume1Icon onClick={muteMusica} className="mr-2" />
          )}
          {volumeValue >= 0.5 && (
            <Volume2Icon onClick={muteMusica} className="mr-2" />
          )}
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
              <CardDescription>Horários em que a musica tocará</CardDescription>
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
                          <h1>nenhum horário cadastrado</h1>
                        </div>
                      )}
                      {times.map((time) => (
                        <div
                          key={time.id}
                          className="flex w-full flex-row items-center justify-between space-x-8 space-y-4"
                        >
                          <label className="w-full">
                            Hora:
                            <Input type="number" value={time.hora} />
                          </label>
                          <label className="w-full">
                            Minutos:
                            <Input type="number" value={time.minuto} />
                          </label>
                          <label className="w-full">
                            Duração:
                            <Input type="number" value={time.duracao} />
                          </label>
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
            <CardContent></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

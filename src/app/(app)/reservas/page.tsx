'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { useState } from 'react'
import AdicionarReserva from './nova-reserva'

import setores from './setores.json'
import horarios from './horarios.json'
import { Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import AgendarAgendamento from './agendar'

export default function ReservasHome() {
  const [date, setDate] = useState(new Date())
  const [periodo, setPeriodo] = useState('Manhã')
  const [setor, setSetor] = useState('Informática')

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Reservas</h1>
          <p className="text-sm">Mostrando todas as reservas</p>
        </div>
        <div>
          <AdicionarReserva />
        </div>
      </div>
      <div className="mt-4 flex flex-row space-x-2">
        <Select onValueChange={setSetor} value={setor}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o setor" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {setores.map((setor) => (
                <SelectItem key={setor.id} value={setor.nome}>
                  {setor.nome}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={setPeriodo} value={periodo}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o período" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Manhã">Manhã</SelectItem>
              <SelectItem value="Tarde">Tarde</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4 flex w-full flex-col space-y-4 lg:flex-row lg:space-x-8">
        <div className="flex w-full justify-center lg:max-w-[300px]">
          <Calendar
            className="flex h-80 w-full items-center justify-center rounded-lg border"
            mode="single"
            selected={date}
            onSelect={(day) => setDate(day as Date)}
            disabled={(date) => {
              const today = new Date()
              today.setHours(0, 0, 0, 0)
              return date < today || date < new Date('1900-01-01')
            }}
            initialFocus
          />
        </div>
        <div className="flex w-full flex-col space-y-4">
          {horarios
            .filter(
              (horario) =>
                horario.setor === setor &&
                horario.horarios.some(
                  (horarios) => horarios.periodo === periodo,
                ),
            )
            .map((horario) =>
              horario.horarios
                .filter((horario) => horario.periodo === periodo)
                .map((horario) => (
                  <Card
                    key={horario.id}
                    className={`border ${
                      horario.reservado ? 'border-error' : 'border-success'
                    }`}
                  >
                    <CardHeader>
                      <CardTitle
                        className={`flex flex-row items-center text-xl font-bold ${
                          horario.reservado ? 'text-error' : 'text-success'
                        }
                        `}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {horario.inicio} - {horario.fim}
                        {horario.reservado ? (
                          <Badge
                            variant={'outline'}
                            className="ml-2 border border-error font-bold uppercase text-error"
                          >
                            Reservado
                          </Badge>
                        ) : (
                          <Badge
                            variant={'outline'}
                            className="ml-2 border border-success font-bold uppercase text-success"
                          >
                            Disponível
                          </Badge>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {!horario.reservado && (
                        <AgendarAgendamento
                          data={date}
                          setor={setor}
                          horario={horario.inicio + ' - ' + horario.fim}
                        />
                      )}
                      {horario.reservado && (
                        <div className="mt-2 flex flex-row items-center space-x-8">
                          <div className="flex flex-col">
                            <p className="text-[10px] font-bold uppercase text-zinc-600">
                              Reservado por
                            </p>
                            <p className="text-zinc-400">
                              {horario.reserva?.usuario}
                            </p>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[10px] font-bold uppercase text-zinc-600">
                              Série/Turma
                            </p>
                            <p className="text-zinc-400">Xº ANO X</p>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[10px] font-bold uppercase text-zinc-600">
                              Atividades
                            </p>
                            <p className="text-zinc-400">Trilhas</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )),
            )}
        </div>
      </div>
    </div>
  )
}

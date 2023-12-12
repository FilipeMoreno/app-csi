'use client'

import { Clock } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
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

import AgendarAgendamento from './agendar'
import horarios from './horarios.json'
import AdicionarReserva from './nova-reserva'
import setores from './setores.json'

export default function ReservasHome() {
  const [date, setDate] = useState(new Date())
  const [periodo, setPeriodo] = useState('Manhã')
  const [setor, setSetor] = useState('Informática')

  const horariosFiltrados = horarios.filter(
    (horario) =>
      horario.setor === setor &&
      horario.horarios.some((horarios) => horarios.periodo === periodo),
  )

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Agendamentos</h1>
          <p className="text-sm">Mostrando todos os agendamentos</p>
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
        <Link href="/agendamentos/todos">
          <Button variant={'outline'}>Visualizar todos</Button>
        </Link>
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
          {horariosFiltrados.length === 0 ? (
            <div className="flex items-center justify-center p-4">
              <p>Não há horários cadastrados.</p>
            </div>
          ) : (
            horariosFiltrados.flatMap((horario) =>
              horario.horarios
                .filter((horario) => horario.periodo === periodo)
                .flatMap((horario) => (
                  <Card
                    key={horario.id}
                    className={`border-2 ${
                      horario.reservado
                        ? 'border-l-red-600'
                        : 'border-l-green-600'
                    }`}
                  >
                    <CardHeader>
                      <CardTitle
                        className={`flex flex-row items-center text-xl font-bold ${
                          horario.reservado ? 'text-red-600' : 'text-green-600'
                        }
                        `}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {horario.inicio} às {horario.fim}
                        {horario.reservado ? (
                          <Badge
                            variant={'outline'}
                            className="ml-2 border border-red-600 font-bold uppercase text-red-600"
                          >
                            Reservado
                          </Badge>
                        ) : (
                          <Badge
                            variant={'outline'}
                            className="ml-2 border border-green-600 font-bold uppercase text-green-600"
                          >
                            Livre
                          </Badge>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {!horario.reservado && (
                        <AgendarAgendamento
                          data={date}
                          setor={setor}
                          horario={`${horario.inicio} às ${horario.fim}`}
                        />
                      )}
                      {horario.reservado && (
                        <div className="mt-2 flex flex-row items-center space-x-8">
                          <div className="flex flex-col">
                            <p className="text-[10px] font-bold uppercase text-zinc-500">
                              Reservado por
                            </p>
                            <p className="text-primary">
                              {horario.reserva?.usuario}
                            </p>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[10px] font-bold uppercase text-zinc-500">
                              Série/Turma
                            </p>
                            <p className="text-primary">
                              {horario.reserva?.serie} {horario.reserva?.turma}
                            </p>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[10px] font-bold uppercase text-zinc-500">
                              Atividades
                            </p>
                            <p className="text-primary">
                              {horario.reserva?.atividades}
                            </p>
                          </div>
                          {horario.reserva?.equipamentos && (
                            <div className="flex flex-col">
                              <p className="text-[10px] font-bold uppercase text-zinc-500">
                                Equipamentos
                              </p>
                              <p className="text-primary">
                                {horario.reserva?.equipamentos}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )),
            )
          )}
        </div>
      </div>
    </div>
  )
}

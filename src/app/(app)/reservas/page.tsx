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
          <SelectTrigger className="w-[180px]">
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
          <SelectTrigger className="w-[180px]">
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
                      <CardTitle>
                        {horario.inicio} - {horario.fim}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{horario.reservado ? 'Reservado' : 'Disponível'}</p>
                      {!horario.reservado && <Button>Reservar horário</Button>}
                      {horario.reservado && (
                        <div>
                          <p>Reservado por: {horario.reserva?.usuario}</p>
                          <p>Setor: {horario.reserva?.setor}</p>
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

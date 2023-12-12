'use client'
import { Clock } from 'lucide-react'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import horarios from '../horarios.json'

export default function ReservasHome() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Todos agendamentos</h1>
        <p className="text-sm">Mostrando todos os horários agendados do dia.</p>
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
            .flatMap((horario) =>
              horario.horarios
                .filter((horario) => horario.reservado === true)
                .flatMap((horarioReservado) => ({
                  ...horarioReservado,
                  setor: horario.setor,
                })),
            )
            .flat()
            .sort((a, b) => {
              const horaA = a.inicio.split(':').join('')
              const horaB = b.inicio.split(':').join('')
              return horaA > horaB ? 1 : -1
            })
            .flatMap((horario) => (
              <Card
                key={horario.id}
                className={`border-2 ${
                  horario.reservado ? 'border-l-error' : 'border-l-success'
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
                    {horario.inicio} às {horario.fim}
                    <Badge
                      variant={'outline'}
                      className="ml-2 border border-error font-bold uppercase text-error"
                    >
                      Reservado
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 flex flex-row items-center space-x-8">
                    <div className="flex flex-col">
                      <p className="text-[10px] font-bold uppercase text-zinc-500">
                        Setor
                      </p>
                      <p className="text-primary">{horario.reserva?.setor}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] font-bold uppercase text-zinc-500">
                        Reservado por
                      </p>
                      <p className="text-primary">{horario.reserva?.usuario}</p>
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
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

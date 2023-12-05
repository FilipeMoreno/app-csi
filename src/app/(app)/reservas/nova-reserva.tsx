import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import { CalendarIcon, Plus } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import setores from './setores.json'
import horarios from './horarios.json'
import { ptBR } from 'date-fns/locale'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format, setDate } from 'date-fns'
import { Badge } from '@/components/ui/badge'

export default function AdicionarReserva() {
  const [setor, setSetor] = useState('')
  const [periodo, setPeriodo] = useState('')
  const [selectedHorarios, setSelectedHorarios] = useState([])
  const [date, setDate] = useState(new Date())

  const handleCheckboxChange = (event: any) => {
    const { value } = event.target
    setSelectedHorarios((prev: any) => {
      if (prev.includes(value)) {
        return prev.filter((horario: any) => horario !== value)
      } else {
        return [...prev, value]
      }
    })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'}>
          <Plus className="h-4 w-4" /> Reservar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Novo agendamento</DialogTitle>
          <DialogDescription>Preencha os dados abaixo</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex w-full flex-row items-center">
            <Label className="w-20">Data</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[280px] w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground',
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    format(date, 'dd/MM/yyyy')
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
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
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex w-full flex-row items-center">
            <Label className="w-20">Setor</Label>
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
          </div>
          <div className="flex w-full flex-row items-center">
            <Label className="w-20">Período</Label>
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
          <div className="flex w-full flex-row items-center">
            <Label className="w-20">Horários</Label>
            <div className="flex flex-col space-y-3">
              {horarios
                .filter((horario) => horario.setor === setor)
                .map((horario) => {
                  return horario.horarios
                    .filter(
                      (horarioInterno) =>
                        horarioInterno.periodo === periodo &&
                        !horarioInterno.reservado,
                    )
                    .map((horarioInterno) => {
                      return (
                        <div
                          key={horarioInterno.id}
                          className="flex flex-row space-x-2"
                        >
                          <Checkbox
                            id={horarioInterno.id.toString()}
                            value={horarioInterno.id.toString()}
                            onChange={handleCheckboxChange}
                            disabled={horarioInterno.reservado}
                          />
                          <label
                            htmlFor={horarioInterno.id.toString()}
                            className="text-base font-medium"
                          >
                            {horarioInterno.inicio} - {horarioInterno.fim}
                          </label>
                        </div>
                      )
                    })
                })}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Reservar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

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

export default function AdicionarReserva() {
  const [setor, setSetor] = useState('')
  const [periodo, setPeriodo] = useState('')
  const [selectedHorarios, setSelectedHorarios] = useState([])
  const [date, setDate] = useState(new Date())

  const handleCheckboxChange = (event) => {
    const { value } = event.target
    setSelectedHorarios((prev) => {
      if (prev.includes(value)) {
        return prev.filter((horario) => horario !== value)
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
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center justify-between gap-16">
            <Label htmlFor="name" className="text-right">
              Data
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[280px] justify-start text-left font-normal',
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
          <div className="flex items-center justify-between gap-16">
            <Label htmlFor="name" className="text-right">
              Setor
            </Label>
            <Select onValueChange={setSetor} value={setor}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um setor" />
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
          <div className="flex items-center justify-between gap-16">
            <Label htmlFor="name" className="text-right">
              Período
            </Label>
            <Select onValueChange={setPeriodo} value={periodo}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um período" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Manhã">Manhã</SelectItem>
                  <SelectItem value="Tarde">Tarde</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between gap-16">
            <Label htmlFor="username" className="text-right">
              Horário
            </Label>
            {horarios
              .filter((horario) => horario.setor === setor)
              .map((horario) => {
                return horario.horarios.map((horarioInterno) => {
                  return (
                    <div key={horarioInterno.id} className="flex flex-col">
                      <Checkbox
                        id={horarioInterno.id.toString()}
                        value={horarioInterno.id.toString()}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor={horarioInterno.id.toString()}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {horarioInterno.inicio} - {horarioInterno.fim}
                      </label>
                    </div>
                  )
                })
              })}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Reservar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

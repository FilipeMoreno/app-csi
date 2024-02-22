import { api } from '@/app/data/api'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock } from 'lucide-react'

interface ReservaType {
	id: number
	data: string
	horario: string
	setor: string
	serie: string
	turma: string
	curso: string
	usuario: string
	atividades: string
	equipamentos: string
}

interface HorarioType {
	id: number
	inicio: string
	fim: string
	reservado: boolean
	reserva: ReservaType
}

interface HorariosType {
	id: number
	setor: string
	horarios: HorarioType[]
}

export async function AgendamentosHorarios() {
	const getHorario = await api('/agendamentos_horarios')
	const horarios = await getHorario.json()

	return (
		<>
			{horarios
				.flatMap((horario: HorariosType) =>
					horario.horarios
						.filter((horario) => horario.reservado === true)
						.map((horarioReservado) => ({
							...horarioReservado,
							setor: horario.setor,
						})),
				)
				.map((horario: HorarioType) => {
					return (
						<Card key={horario.id} className="border-2 border-l-error">
							<CardHeader>
								<CardTitle className="flex flex-row items-center text-xl font-bold text-error">
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
					)
				})}
		</>
	)
}

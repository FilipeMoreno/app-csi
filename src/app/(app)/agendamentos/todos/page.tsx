'use client'

import { Suspense, useState } from 'react'

import { Calendar } from '@/components/ui/calendar'
import { Skeleton, Skeleton } from '@/components/ui/skeleton'
import { AgendamentosHorarios } from '../horarios'

export default async function ReservasHome() {
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
					<Suspense
						fallback={
							<div className='flex flex-col space-y-3'>
								<Skeleton className="h-[125px] w-full rounded-lg" />
								<Skeleton className="h-[125px] w-full rounded-lg" />
							</div>
						}
					>
						<AgendamentosHorarios />
					</Suspense>
				</div>
			</div>
		</div>
	)
}

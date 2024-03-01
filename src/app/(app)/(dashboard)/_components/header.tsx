import { Suspense } from 'react'

export default async function DashboardHeader() {
	const data = await fetch(
		'http://localhost:3000/api/profile?email=eu@filipemoreno.com.br',
	).then((res) => res.json())

	return (
		<div className="my-8 flex flex-col space-y-4 sm:flex-row">
			<div>
				<Suspense fallback={<h1>Loading...</h1>}>
					<h1 className="text-2xl font-bold">Olá, {data.profile.name}!</h1>
				</Suspense>
				<p className="text-md">
					{Intl.DateTimeFormat('pt-BR', {
						weekday: 'long',
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					}).format(new Date())}
				</p>
			</div>
		</div>
	)
}

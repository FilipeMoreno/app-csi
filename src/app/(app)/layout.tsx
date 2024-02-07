'use client'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import NextTopLoader from 'nextjs-toploader'
import { useState } from 'react'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Toaster } from '@/components/ui/sonner'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
	Home,
	LayoutDashboard,
	LifeBuoy,
	List,
	Podcast,
	ScanLine,
	Settings,
	Speaker,
	Ticket,
	Wifi,
} from 'lucide-react'
import { BiSupport } from 'react-icons/bi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaRegAddressCard } from 'react-icons/fa6'
import { TbTimeDuration45 } from 'react-icons/tb'

import {
	Drawer,
	DrawerContent,
	DrawerOverlay,
	DrawerPortal,
	DrawerPortal,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import '@/styles/globals.css'
import GoogleAnalytics from '../GoogleAnalytics'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [showSidebar, setShowSidebar] = useState(false)

	const sidebarNavItems = [
		{
			title: 'Dashboard',
			icon: LayoutDashboard,
			subitems: [
				{
					href: '/',
					title: 'Início',
					icon: Home,
				},
			],
		},
		{
			title: 'Suporte',
			icon: LifeBuoy,
			subitems: [
				{
					href: '/suporte',
					title: 'Chamados',
					icon: BiSupport,
				},
			],
		},
		{
			title: 'Reservas',
			icon: FaRegCalendarAlt,
			role: ['reservas', 'admin'],

			subitems: [
				{
					href: '/agendamentos',
					title: 'Agendamentos',
					icon: TbTimeDuration45,
					role: ['reservas.agendamentos', 'admin'],
				},
			],
		},
		{
			title: 'Carteirinhas',
			icon: FaRegAddressCard,
			subitems: [
				{
					href: '/carteirinhas/solicitacoes',
					title: 'Solicitações',
					role: ['carteirinhas.solicitacoes', 'admin'],
					icon: List,
				},
				{
					href: '/carteirinhas/scanner/acoes',
					title: 'Scanner',
					role: ['carteirinhas.scanner', 'admin'],
					icon: ScanLine,
				},
				// {
				//   href: '/carteirinhas/configuracoes',
				//   title: 'Configurações',
				//   role: ['carteirinhas.configuracoes', 'admin'],
				//   icon: Settings,
				// },
			],
		},
		{
			title: 'Wi-Fi',
			icon: Wifi,
			subitems: [
				{
					href: '/wifi',
					title: 'Vouchers',
					role: ['wifi.voucher', 'admin'],
					icon: Ticket,
				},
			],
		},
		{
			title: 'Sinaleiro',
			icon: Speaker,
			subitems: [
				{
					href: '/sinaleiro',
					title: 'Sinal',
					role: ['sinal', 'admin'],
					icon: Podcast,
				},
			],
		},
	]

	const handleItemClick = () => {
		setShowSidebar(false)
	}

	return (
		<body>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<NextTopLoader color="#af3c41" />
				<Header />
				<div className="md:block">
					<div className="border-t">
						<div className="bg-background">
							<div className="grid lg:grid-cols-5">
								{/* <Drawer direction="left">
									<DrawerTrigger className="lg:hidden" asChild>
										<HamburgerMenuIcon className="top-0 -mt-11 ml-6 h-6 w-6 text-gray-500" />
									</DrawerTrigger>
									<DrawerPortal>
										<DrawerOverlay className="fixed inset-0 bg-black/40" />
										<DrawerContent>
											<Sidebar
												items={sidebarNavItems}
												onItemClick={handleItemClick}
											/>
										</DrawerContent>
									</DrawerPortal>
								</Drawer> */}
								<Drawer direction="left">
									<DrawerTrigger asChild className="lg:hidden">
									<HamburgerMenuIcon className="top-0 -mt-11 ml-6 h-6 w-6 text-gray-500" />
									</DrawerTrigger>
									<DrawerPortal>
										<DrawerOverlay className="fixed inset-0 bg-black/40" />
										<DrawerContent className="flex flex-col rounded-t-[10px] h-full w-[350px] mt-24 fixed bottom-0 right-0">
											<Sidebar
												items={sidebarNavItems}
												onItemClick={handleItemClick}
											/>
										</DrawerContent>
									</DrawerPortal>
								</Drawer>
								<Sidebar
									className={`lg:block ${showSidebar ? 'block' : 'hidden'}`}
									items={sidebarNavItems}
									onItemClick={handleItemClick}
								/>
								<div
									className={`col-span-3 lg:col-span-4 lg:border-l ${
										showSidebar ? 'hidden' : 'block'
									}`}
								>
									<div className="h-full px-4 py-6 lg:px-8">{children}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Toaster richColors closeButton />
				<SpeedInsights />
				<Analytics />
				<GoogleAnalytics />
			</ThemeProvider>
		</body>
	)
}

import {
	Home,
	LayoutDashboard,
	LifeBuoy,
	List,
	Podcast,
	ScanLine,
	Speaker,
	Ticket,
	Wifi,
} from 'lucide-react'

import { BiSupport } from 'react-icons/bi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaRegAddressCard } from 'react-icons/fa6'
import { TbTimeDuration45 } from 'react-icons/tb'

type Submenu = {
	href: string
	label: string
	active: boolean
}

type Menu = {
	href: string
	label: string
	active: boolean
	icon: any
	submenus: Submenu[]
}

type Group = {
	groupLabel: string
	icon: any
	menus: Menu[]
}

export function getPages(pathname: string): Group[] {
	return [
		{
			groupLabel: 'Dashboard',
			icon: LayoutDashboard,
			menus: [
				{
					href: '/',
					label: 'Início',
					active: !!pathname.match('^/$'),
					icon: Home,
					submenus: [],
				},
			],
		},
		{
			groupLabel: 'Suporte',
			icon: LifeBuoy,
			menus: [
				{
					href: '/suporte',
					label: 'Chamados',
					active: pathname.includes('/suporte'),
					icon: BiSupport,
					submenus: [],
				},
			],
		},
		{
			groupLabel: 'Reservas',
			icon: FaRegCalendarAlt,
			menus: [
				{
					href: '/agendamentos',
					label: 'Agendamentos',
					active: pathname.includes('/agendamentos'),
					icon: TbTimeDuration45,
					submenus: [],
				},
			],
		},
		{
			groupLabel: 'Carteirinhas',
			icon: FaRegAddressCard,
			menus: [
				{
					href: '/carteirinhas/solicitacoes',
					label: 'Solicitações',
					active: pathname.includes('/carteirinhas/solicitacoes'),
					icon: List,
					submenus: [],
				},
				{
					href: '/carteirinhas/scanner/acoes',
					label: 'Scanner',
					active: pathname.includes('/carteirinhas/scanner/acoes'),
					icon: ScanLine,
					submenus: [],
				},
			],
		},
		{
			groupLabel: 'Wi-fi',
			icon: Wifi,
			menus: [
				{
					href: '/wifi',
					label: 'Vouchers',
					active: pathname.includes('/wifi'),
					icon: Ticket,
					submenus: [],
				},
			],
		},
		{
			groupLabel: 'Sinaleiro',
			icon: Speaker,
			menus: [
				{
					href: '/sinaleiro',
					label: 'Sinal',
					active: pathname.includes('/sinaleiro'),
					icon: Podcast,
					submenus: [],
				},
			],
		},
	]
}

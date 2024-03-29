import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { HeartFilledIcon } from '@radix-ui/react-icons'
import { Code2 } from 'lucide-react'

import { config } from '@/config'
import { cn } from '@/lib/utils'
import dados from '@/utils/dados.json'

import ChangelogComponent from './Changelog'
import { Button } from './ui/button'

interface SubitemType {
	href: string
	title: string
	role?: string[]
	icon?: React.ElementType
}

interface ItemType {
	title?: string
	icon?: React.ElementType
	subitems: SubitemType[]
}

type SidebarNavProps = React.HTMLAttributes<HTMLElement> & {
	items: ItemType[]
	onItemClick?: () => void
}

interface UserType {
	id: string
	name: string
	email: string
	roles: string[]
}

export function Sidebar({ className, items, onItemClick }: SidebarNavProps) {
	const pathname = usePathname()

	function checkPermission(user: UserType, item: SubitemType) {
		if (!item.role) {
			return true
		}

		return item.role.some((role: string) => {
			if (user.roles.includes(role)) {
				return true
			}

			if (user.roles.includes('*')) {
				return true
			}

			return false
		})
	}

	function filterMenuItems(user: UserType, menuItem: ItemType) {
		return menuItem.subitems.filter((subitem: SubitemType) =>
			checkPermission(user, subitem),
		)
	}

	return (
		<div className={cn('pb-12', className)}>
			<div className="space-y-4 py-4">
				{items.map((item: ItemType) => {
					const allowedSubitems = filterMenuItems(dados.user, item)

					if (allowedSubitems.length === 0) {
						return null
					}
					return (
						<div className="px-3 py-1" key={item.title}>
							<h2 className="mb-3 flex flex-row items-center rounded-lg px-4 text-[10px] font-black uppercase tracking-tight text-zinc-500">
								{item.icon && <item.icon className="mr-2 h-4 w-4" />}
								{item.title}
							</h2>

							<div className="space-y-1">
								{allowedSubitems.map((subitem: SubitemType) => {
									if (!checkPermission(dados.user, subitem)) {
										return null
									}
									return (
										<div
											key={subitem.href}
											className="space-y-1"
											onClick={onItemClick}
										>
											<Link href={subitem.href} key={subitem.href}>
												<Button
													variant={
														pathname === subitem.href ? 'secondary' : 'ghost'
													}
													// className="w-full justify-start text-left text-base font-bold tracking-tight"
													className={`w-full justify-start text-left text-base font-bold tracking-tight ${
														pathname === subitem.href
															? 'border-l-2 border-zinc-900'
															: 'border-none'
													}`}
												>
													{subitem.icon && (
														<subitem.icon className="mr-2 h-4 w-4" />
													)}
													{subitem.title}
												</Button>
											</Link>
										</div>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
			<div className="bottom-0 left-0 right-0 flex flex-col items-center justify-center">
				<Image
					alt="Logo"
					width={20}
					height={20}
					src={'/icons/icon-512x512.png'}
					className="mb-1"
				/>
				<ChangelogComponent />
				<span className="text-xs text-zinc-500">v{config.version}</span>
			</div>
			<div className="mt-4 flex flex-row items-center justify-center text-xs">
				<Code2 className="mr-1 h-4 w-4 text-zinc-500" />
				<span className="text-zinc-500">Developed with</span>
				<HeartFilledIcon className="mx-1 h-4 w-4 text-tertiary" />
				<span className="text-zinc-500">
					by{' '}
					<Link
						className="hover:text-tertiary"
						href="https://filipemoreno.com.br"
					>
						Filipe Moreno
					</Link>
				</span>
			</div>
		</div>
	)
}

import { MenuIcon, PanelsTopLeft } from 'lucide-react'
import Link from 'next/link'

import { Menu } from '@/components/admin-panel/menu'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'

export function SheetMenu() {
	return (
		<Sheet>
			<SheetTrigger className="lg:hidden" asChild>
				<Button className="h-8" variant="outline" size="icon">
					<MenuIcon size={20} />
				</Button>
			</SheetTrigger>
			<SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
				<SheetHeader>
					<Button
						className="flex justify-center items-center pb-2 pt-1"
						variant="link"
						asChild
					>
						<Link href="/dashboard" className="flex items-center gap-2">
							<Image
								src={'/logo.png'}
								width={200}
								height={100}
								alt="Logo do Colégio Santo Inácio"
							/>
						</Link>
					</Button>
				</SheetHeader>
				<Menu isOpen />
			</SheetContent>
		</Sheet>
	)
}

import { PageTitle } from '@/components/admin-panel/page-title'
import { SheetMenu } from '@/components/admin-panel/sheet-menu'
import { UserNav } from '@/components/admin-panel/user-nav'
import { ModeToggle } from '@/components/mode-toggle'
import { Notifications } from '../Notifications'

export function Navbar() {
	return (
		<header className="z-10 supports-backdrop-blur:bg-background/60 sticky top-0 w-full shadow dark:shadow-secondary bg-background/95 backdrop-blur">
			<div className="mx-4 sm:mx-8 flex h-14 items-center">
				<div className="flex items-center space-x-4 lg:space-x-0">
					<SheetMenu />
					<PageTitle />
				</div>
				<div className="flex flex-1 items-center space-x-2 justify-end">
					{/* <ModeToggle /> */}
					<Notifications />
					<UserNav />
				</div>
			</div>
		</header>
	)
}

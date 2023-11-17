import { ExitIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import dados from '@/utils/dados.json'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={dados.user.picture}
              alt={'@' + dados.user.username}
            />
            <AvatarFallback>CSI</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {dados.user.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {dados.user.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cursor-pointer hover:text-red-400">
          <ExitIcon className="mr-2 " /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

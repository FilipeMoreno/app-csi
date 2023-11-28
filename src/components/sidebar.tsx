import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import dados from '@/utils/dados.json'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { config } from '@/config'

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

    return item.role.some((role: any) => {
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
            <div className="px-3 py-2" key={item.title}>
              <h2 className="mb-4 flex flex-row items-center rounded-lg px-4 text-[10px] font-black uppercase tracking-tight text-zinc-500">
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
                          className="w-full justify-start text-left text-base font-bold tracking-tight"
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
      <div className="bottom-0 left-0 right-0 flex items-center justify-center">
        <span className="text-xs text-zinc-500">v{config.version}</span>
      </div>
    </div>
  )
}

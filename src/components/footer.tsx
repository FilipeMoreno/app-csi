import { config } from '@/config'

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 border-t p-4 text-center text-primary">
      <div className="flex flex-col text-xs">
        <p>Development by Filipe Moreno</p>
        <p>v{config.version} - Colégio Santo Inácio</p>
      </div>
    </footer>
  )
}

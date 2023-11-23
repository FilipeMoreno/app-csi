import { hasCookie, setCookie } from 'cookies-next'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'

export default function CookiesConsent() {
  const [showConsent, setShowConsent] = useState(true)

  useEffect(() => {
    setShowConsent(hasCookie('localConsent'))
  }, [])

  const acceptCookie = () => {
    setShowConsent(true)
    setCookie('localConsent', 'true', {})
  }

  if (showConsent) {
    return null
  }
  return (
    <div className="fixed inset-0 bg-zinc-950 bg-opacity-70">
      <div
        onClick={() => acceptCookie()}
        className="fixed bottom-0 left-0 right-0 flex items-center justify-between bg-zinc-900 px-4 py-8"
      >
        <span className="text-dark mx-4 mr-16 text-base">
          Este site utiliza cookies para melhorar a experiência do usuário. Ao
          utilizar o nosso site você concorda com todos os cookies de acordo com
          a nossa Política de Cookies.
        </span>

        <Button className="w-64" onClick={() => acceptCookie()}>
          Aceito
        </Button>
      </div>
    </div>
  )
}

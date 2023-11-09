'use client'

import { Loader } from '@/components/ui/loader'

const Loading = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Loader />

      <h1>Carregando</h1>
    </div>
  )
}

export default Loading

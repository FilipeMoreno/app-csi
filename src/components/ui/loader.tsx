'use client'

import { BounceLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <BounceLoader color="#FFF" size={50} />
    </div>
  )
}

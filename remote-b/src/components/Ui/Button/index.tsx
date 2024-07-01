import './main.css'

import { useState } from 'react'

interface Props {
  text?: string
}

export const Button = (props: Props) => {
  const [state, setState] = useState(0)
  return (
    <div>
      <button
        id='click-btn'
        className='shared-btn'
        onClick={() => setState((s) => s + 1)}
      >
        {`${props.text}: ${state}`}
      </button>
    </div>
  )
}

export default Button

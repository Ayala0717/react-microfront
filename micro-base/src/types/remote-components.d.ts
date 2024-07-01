// Types for components
declare module 'remoteComponents/Button' {
  import { FC } from 'react'

  interface ButtonProps {
    text?: string
  }

  const Button: FC<ButtonProps>

  export default Button
}

declare module 'remoteComponents/Card' {
  import { FC } from 'react'

  interface CardProps {
    title: string
    content: string
  }

  const Card: FC<CardProps>

  export default Card
}

declare module 'remoteComponents/Toggle'

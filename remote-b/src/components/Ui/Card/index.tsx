import React from 'react'

interface CardProps {
  title: string
  content: string
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div
      style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Card

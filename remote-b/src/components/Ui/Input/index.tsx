import React from 'react'

interface TextInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const Input: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input

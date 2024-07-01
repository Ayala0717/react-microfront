import React, { useState } from 'react'

const Toggle: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false)

  const toggle = () => {
    setIsOn(!isOn)
  }

  return (
    <div>
      <p>{isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>{isOn ? 'Turn Off' : 'Turn On'}</button>
    </div>
  )
}

export default Toggle

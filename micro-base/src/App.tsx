import { Suspense, lazy, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { toLocaleString, localeStringToNumber } from 'remoteUtils/utils'

const Button = lazy(() => import('remoteComponents/Button'))
const Card = lazy(() => import('remoteComponents/Card'))
const Toggle = lazy(() => import('remoteComponents/Toggle'))

function App() {
  const [count, setCount] = useState(0)
  const num = 4500
  const converted = toLocaleString(num)
  const formatted = localeStringToNumber(converted)

  useEffect(() => {
    const fetchPlaceholder = async () => {
      const res = await fetch('http://localhost:5000/fallback/todos/1')
      const data = await res.json()
      console.log(data)
    }

    fetchPlaceholder()
  }, [])

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>

      <Suspense fallback={<p>loading component</p>}>
        <Button text='Click me' />

        <Card content='hii' title='Card title' />
        <Toggle />
      </Suspense>
    </>
  )
}

export default App

import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center p-4">
    <h1 className="text-3xl font-bold underline text-blue-500">
      Hello, Tailwind with Vite!
    </h1>
  </div>
  )
}

export default App

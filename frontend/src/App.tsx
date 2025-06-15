import { useEffect, useState } from 'react'

function App() {
  const [coders, setCoders] = useState<{ id: number; name: string }[]>([])

  useEffect(() => {
    fetch('/api/coders') // proxy will forward this to Spring Boot
      .then((res) => res.json())
      .then(setCoders)
  }, [])

  return (
    <div className='coders'>
      <h1>Coders</h1>
      <ul>
        {coders.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

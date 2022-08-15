import { initializeDefaultData } from 'api/initialize'
import React from 'react'
import AppRoutes from 'routes/Routes'

function App () {
  React.useEffect(() => {
    initializeDefaultData()
  }, [])

  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App

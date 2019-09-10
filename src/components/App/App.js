import React from 'react'
const App = ({ children, ...props }) => {
  return (
    <main>
      <section>
        {children}
      </section>
    </main>
  )
}

export default App;
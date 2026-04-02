import React from 'react'
// Default imports are used to import the default export from a module, which can be a function, class, object, or any value that is exported without a name.
import Header from './component/headerComponent/Header'
import Footer from './component/footerComponent/Footer'

// Named imports are used to import specific functions, objects, or values that are exported with a name from a module.
import { Main } from './component/headerComponent/Header'
import { sum } from './component/headerComponent/Header'

// App is the parent component and Header, Footer, Main are the child components. We can use the child components inside the parent component to create a complete application.
const App = () => {
  let result = sum(10, 20)
  return (
    <div>
      <Header name="Meow" />
      <h1>Hello world!</h1>
      <Main name = "Avish" age="20" address="fazilka" />
      <h2>Sum of 10 and 20 is: {result}</h2>
      <Footer />
    </div>
  )
}

export default App

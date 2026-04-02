import React from 'react'

// NOT a functional component, just a regular JavaScript function that adds two numbers together.
function sum(a, b) { // This is a simple function that takes two numbers as arguments and returns their sum.
  return a + b
}


const App = () => { // This is a simple React Functional component that renders a "Hello World" message.
  let a = 5;
  let b = 10;
  let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
  }

  // {} is used to embed JavaScript expressions in JSX. Here, it will evaluate the expression a+b and display the result (15) in the h1 element.
  return (
    <div>
      <Header></Header>
      <h1>Hello World</h1>
      <h1>{a+b}</h1> 
      <div>
        <h2>User Information</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
      </div>
      <h2>Random: {Math.random()}</h2>
    </div>
  )
}

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li className='nav-items'>Home</li>
          <li className='nav-items'>About</li>
          <li className='nav-items'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default App
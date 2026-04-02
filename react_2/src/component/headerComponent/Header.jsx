import React from 'react'
import './Header.css'

// In this example, we are passing name as a property from App component to Header component and Main component. We can access it using props.name in both components.
const Header = (props) => {
    console.log(props)
  return (
    <div>
      <h2 className='title'>This is Header Component</h2>
        <h5>My name is {props.name}</h5>
        <h5>My age is {props.age}</h5>
        <h5>My address is {props.address}</h5>
    </div>
  )
}   

export function Main(props) {
    console.log(props)
  return (
    <div>   
        <h2>This is Main Component</h2>
        <h3>My name is {props.name}</h3>
    </div>
  )
}

// we can export multiple components or functions from a file but we can have only one default export in a file.
export function sum(a, b) {
  return a + b
}   


// export default Main
// export default sum
// export { Main, sum } //works but we have to import like this: import { Main, sum } from './component/headerComponent/Header'
export default Header

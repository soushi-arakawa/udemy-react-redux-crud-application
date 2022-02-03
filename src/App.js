import React from "react";
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 3},
  ]
  return (
    <div>
      {/* <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} /> */}

      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

// const App = () => {
//   // return <div>Hi!</div>
//   return (
//     <div>
//       <Cat />
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
//   )
// }

// const Cat = () => {
//   return <div>Meow!</div>
// }

export default App;

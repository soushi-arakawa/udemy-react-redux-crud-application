import React from "react";

function App() {
  // const greeting = "Hi, Tom!"
  // const dom = <h1 className="foo">{greeting}</h1>
  // return dom

  // return <input type="text" onClick={() => {console.log("I am clicked!")}} />

  return (
    // <div>
    //   <label htmlFor="bar">bar</label>
    //   <input type="text" onChange={() => {console.log("I am clicked!")}} />
    // </div>
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => { console.log("I am clicked!") }} />
    </React.Fragment>
  )
}

export default App;

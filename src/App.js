
import React from 'react'

function App() {
  const obj ={
    name : "Asghar",
    age : 25,
    avg : 16.5,
    Add : {
      postcode : 5555,
      address : "fkdfjdnf"
    },
    arr : [1,2,3,4,5]
  }

  const {name , age,Add} = obj
  console.log(name)
  console.log(age)
  console.log(obj.name)
  console.log(Add.address)

  const {postcode} = obj.Add

  const [a,_,b] = obj.arr
  console.log(b)
  return (
    <div >

    </div>
  );
}

export default App;

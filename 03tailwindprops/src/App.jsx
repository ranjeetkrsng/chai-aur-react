// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0);
  let newArray = [1, 2, 3, 4, 5];
  let newObj = { name: 'Ranjeet', age: 25, city: 'Bangalore' };

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">Tailwind test</h1>
      <Card userName="Ranjeet Singh" desc={newArray} btnText="View Profile" />
      <Card userName="Kavya Ginnarapu" desc={newObj} btnText="View Data" />

    </>
  )
}

export default App

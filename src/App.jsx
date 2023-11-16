import './App.css'
import axios from 'axios'

function App() {
  const clickMe = async () => {
    const data = await axios.post('/delete-account')
    console.log(data)
  }

  return (
    <>
      <button type="button" onClick={clickMe}>click</button>
    </>
  )
}

export default App

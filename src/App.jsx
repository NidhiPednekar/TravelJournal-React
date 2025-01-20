
import './App.css'
import Nav from './Nav'
import Container from './Container'
import data from './data'

function App() {


    const content = data.map(item =>{
      return(
        <Container
      key={item.id}
      {...item}
      
      />
      )
    })

    return (
    <div>
      <Nav/>
      <div className='main'>
      {content}
      </div>
    </div>
     
  )
}

export default App

import './App.css'

import Contacts from './components/Contacts/Contacts'
import Greeting from './components/Greeting/Greeting'
import Nodes from './components/Nodes/Nodes'
import Participations from './components/Participations/Participations'
import SelfDescription from './components/SelfDescription/SelfDescription'

function App() {
  return (
    <div className="App">
      <Greeting />
      <SelfDescription />
      <Nodes />
      <Participations />
      <Contacts />
    </div>
  )
}

export default App
import logo from './logo.svg';
import './App.css';
import ContactComponent from './components/pure/contactComponent';
import { Contact } from './models/contact.class';
//import TaskListComponent from './components/container/task_list';

function App() {

  const newContact = new Contact('Erick', 'Cortez', 'ecortez@test.com', false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Erick Cortez" /> */}
        {/* <TaskListComponent /> */}
        <ContactComponent contact={newContact} />
      </header>
    </div>
  );
}

export default App;

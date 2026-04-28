
import './App.css'
import ControlField from './Components/ControlledField/ControlField.jsx';
import FromAction from './Components/FromAction/FromAction.jsx';
import SimpleForm from "./Components/SimpleForm/SimpleForm.jsx";
import UncontrolledField from './Components/UncontrolledField/UncontrolledField.jsx';

function App() {
 

  return (
    <>
      <h1>Hey I am react form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FromAction></FromAction> */}
      {/* <ControlField></ControlField> */}
      <UncontrolledField></UncontrolledField>
    </>
  )
}

export default App

import "./App.css";
import MateriaUiForm from "./MateriaUiForm";
import SimpleForm from "./SimpleForm";
import ReactHookForm from "./ReactHookForm";

function App() {
  return (
    <div className="App">
      <h1>Materi Ui Form</h1>
      <MateriaUiForm />
      <h1>Simple Form</h1>
      <SimpleForm />
      <h1>React Hook Form</h1>
      <ReactHookForm />
    </div>
  );
}

export default App;

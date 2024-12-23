
import './App.css';
import Input01Con from './containers/form/input01Con';
import CheckBox02Con from './containers/form/CheckBox02Con';
// import Quiz01Con from './containers/form/Quiz01Con';
import UseRefIndex from './containers/use_ref/UseRefIndex';
import UseRefCon from './containers/use_ref/UseRefCon';

function App() {
  return (
    <div className="App">
      <UseRefCon />
      <hr></hr>
      <UseRefIndex />
      <hr></hr>
      {/* <Quiz01Con /> */}
      <hr></hr>
      <CheckBox02Con />
      <hr></hr>
      <Input01Con />
      
    </div>
  );
}

export default App;
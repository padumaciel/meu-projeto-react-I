import{Title, Cards} from './components';
import './App.css';

function App() {
  const message = "Meu primeiro projeto React do zero";
  return (
    <div className="App">
      <Title messageTitle={message} />
      <Cards />
    </div>
  );
}

export default App;

import{Title, Cards} from './components';
import './App.css';

function App() {
  const message = "Meu primeiro projeto react do zero";
  return (
    <div className="App">
      <p>
        Atividade 01
      </p>
      <Title messageTitle={message} />
      <Cards />
    </div>
  );
}

export default App;

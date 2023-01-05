import './App.css';
import TituloHola from './components/Hola';

function App() {

  const listas= ['Learn Rect','Climb Mt. Everest', 'Run a marathon', 'Feed the dogs']
  return (
    <div className="App">
    
    <TituloHola titulo1 = "Hola Dojo"/>
    <TituloHola titulo2 = "Things I need to do : "/>
      {
        listas.map(lista => {
          return (
            <div>
              <li>{lista}</li>
            </div>      
          )
        })
      }
     
    </div>
  );
}

export default App;

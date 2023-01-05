import './Hola.css'

const TituloHola = (props) => {
    const {titulo1,titulo2} = props;

    return (
    <div>
        <h1 className = "TituloHolaMundo" >{titulo1}</h1>
        <h2 className = "TituloHolaMundo2" >{titulo2}</h2>    
    </div>
    )
}

export default TituloHola;
import pic from './ice.jpg';
import './App.css';

function App() {
  const midsec=["Serives","Projects","About"];
  return (
    <div className="App">
        <div className='black'>
          <div id='image'><img  src='pic' alt='Bakery'></img></div>
           <div>
             <p id='mid'>
             {midsec.map(e=>{
               return <Mid midsec={e}></Mid>
             })}
             </p>
           </div>
        
          <div><button id='btn'>Contact</button></div>
        
        </div>
    </div>
  );
}

function Logo(Picture){
  return <div>{Picture.img}</div>
}

function Mid(props){
return <p>{props.midsec}</p>
}

export default App;

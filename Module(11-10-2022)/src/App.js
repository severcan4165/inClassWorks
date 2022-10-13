import Card from "./Components/Card/Card.jsx";
import data from "./data.js"


function App() {
  return (
    <>
    {data.map(item=>{
      const{img,id,language,btnName}=item;
      return(
        
        
        <Card img={img} language={language} key={id} btnName={btnName}/>
        
      )
    })}
    
    </>
  );
}

export default App;

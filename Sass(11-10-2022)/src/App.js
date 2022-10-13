
import data from "./data.js"

import Card from "./Components/Card/Card.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";


function App() {
  return (
    <>
    <Header/>
    { data.map(item =>{
      const {id, name, comment, img, job} = item;
      return(
        <Card key={id} name={name} comment = {comment} img={img} job={job}/>
      )
    })}
    <Footer/>
    
    </>
  );
}

export default App;

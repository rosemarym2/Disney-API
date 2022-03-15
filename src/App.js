import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';



const App = () => {
  const [disney, setDisney] = useState("")
  const [error, setError] = useState(
      { 
        error: false, 
        message: ""
      }
    )
  const handler = async () => {
    try{
      const response = await fetch("https://api.disneyapi.dev/characters")
      console.log(response)
      if(response.status !== 200){
        throw new Error("the error is...its messed up")
      }
      const data = await response.json()
      setDisney(data.data)
    }catch (error) {
      setError({ error: true, message: e.message})
    }
  }
  useEffect (()=>{
  handler()
  },[]);
  if (!disney){
    return <p>loading...</p>
  }
  if(error.error){
    return <h1>{error.message}</h1>
  }
  return (
    <div>
      <h1>Disney Characters</h1>
      {disney.map((item, index)=>{
        return ( 
        <div key={index}>
        <h2>Character: {item.name}</h2>
        <h3>Films: {item.films}</h3>
        <h4>TV Shows: {item.tvShows}</h4>
        <img src= {item.imageUrl} alt = {item.name}/>
        <BrowserRouter>
        <div>
        <p>Character Info:</p>
        <Link to ='/'>{item.sourceUrl}</Link>
        </div>
        </BrowserRouter>
        </div>
        ) 
      })}
      <button onClick={handler}>Pick a random Disney Character</button>
    </div>
  );
};


export default App;


















// const App = () => {
//   const [quotes, setQuotes] = useState("")

//   const handler = async () => {
//     try{
//       const response = await fetch("https://inspiration.goprogram.ai/")
//       const data = await response.json()
//       console.log(response)
//       setQuotes(data.data)
//     }catch(error){
//       console.log("oops")
//     }
//   }
//   return (
//     <div>
//       <h1>Famous Quotes</h1>
//       <p>Quote: {quotes.quote}</p>
//       <button onClick={handler}>get quote</button>
//     </div>
//   );
// };

// export default App;


// const App = () => {
//   const [adviceSlip, setAdviceSlip] = useState("")

//   const handler = async () => {
//     try{
//       const response = await fetch("https://api.adviceslip.com/advice")
//       const data = await response.json()
//       console.log(data)
//       setAdviceSlip(data.slip)
//     }catch(error){
//       console.log(error)
//     }
//   }
//   return (
//     <div>
//       <h1>advice</h1>
//       <p>advice: {adviceSlip.advice}</p>
//       <button onClick={handler}>get data</button>
//     </div>
//   );
// };

// export default App;
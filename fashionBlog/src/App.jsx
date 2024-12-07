import './App.css'
import { Story } from "./Story.jsx";

function App() {


  return (
    <>
      <div>
        <heade>
          <h1>Sartre's List</h1>
          <h2>Better-Dressed People</h2>
        </heade>

        <nav style={{ display: "flex", textDecoration: "none", color: "grey" }}>
          <a href="#">Women's</a>
          <a href="#">Men's</a> 
          <a href="#">On the Street</a> 
          <a href="#">The Catwalk</a> 
          <a href="#">AdWatch</a> 
          <a href="#">About</a> 
        </nav>

        <Story />
        <Story />
      </div>
    </>
  )
}

export default App

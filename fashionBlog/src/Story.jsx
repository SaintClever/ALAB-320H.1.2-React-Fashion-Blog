import { data } from "./Data.jsx";

let Story = () => {
  const story = data.map(article => 
    <div key={article.id}>
    <p>{article.date}</p>
    <h2>{article.title}</h2>
    <img src={article.image}/>
    <p>{article.summary}</p>
    <p style={{ textAlign: "right", color: "red"}}>continue...</p>
    </div>
  )
  return (story)
}

export { Story }
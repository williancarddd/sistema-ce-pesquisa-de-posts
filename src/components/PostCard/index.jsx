import React  from "react"
import './styles.css'
export function PostCard({title, cover, id, body}) {
  
  function handleChangeTitle(nameTitle){
    window.document.title = `React - ${nameTitle}`
  }
   return ( 
    <div className='post' onClick={()=> handleChangeTitle(title)} >
      <img src={cover} alt={title}></img>
      <div key={id} className='post-content'>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
    )
}
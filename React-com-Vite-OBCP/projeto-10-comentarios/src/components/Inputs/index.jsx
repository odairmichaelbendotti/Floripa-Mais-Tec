import { useState } from "react"

export const Inputs = ({email, setEmail, comment, setComment, handleComment, handleEmail}) => {

    return(
        <div className='content-header'>
        <h2>Seção de comentários</h2>
        <div className='quests'>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name='email' 
            id='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            onClick={() => {
                console.log(email)
              }}
          />
        </div>
        <div className='quests'>
          <label htmlFor="comment">Comentário</label>
          <textarea 
            name='comment' 
            id='comment' 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            onClick={() => {
              (console.log(comment))
   
            }}
          />
          <div className='btn-comment' 
          onClick={() => {
            handleEmail()
          }}>Comentar</div>
        <hr />
        </div>
      </div>
    )
}
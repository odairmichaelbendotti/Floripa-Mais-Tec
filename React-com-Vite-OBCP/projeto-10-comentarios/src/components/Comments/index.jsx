import { useState } from "react"

export const Comments = ({displayEmail, comment, setComment}) => {
   
    return(
        <div className='content-comments-area'>
          <div className='content-comments'>
            <h3>{displayEmail}</h3>
            <p>18/04/2024</p>
            </div>
            <div className='comments'></div>
          </div>
    )
}
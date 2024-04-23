import { useState } from 'react'
import { Layout } from './components/Layout'
import { Comments } from './components/Comments/'
import { Inputs } from './components/Inputs/index'
import './App.css'


function App() {
  const [email, setEmail] = useState('odair')
  const [comment, setComment] = useState('My name is Odair')
  const [displayEmail, setDisplayEmail] = useState('email@email.com')
  const [displayComment, setDisplayComment] = useState(comment)

  function handleEmail(){
    setDisplayEmail(email)
  }

  function handleComment(){
    setDisplayComment(comment)
  }
  
  return (
    <div className='container'>
      <Layout>
        <div className='content-area'>
          <Inputs email={email} setEmail={setEmail} comment={comment} setComment={setComment} displayEmail={displayEmail} setDisplayEmail={setDisplayEmail} handleEmail={handleEmail} handleComment={handleComment} setDisplayComment={setDisplayComment}/>
          <Comments displayEmail={displayEmail} handleEmail={handleEmail} handleComment={handleComment} comment={comment} setComment={setComment}/>
        </div>
      </Layout>
    </div>
  )
}

export default App

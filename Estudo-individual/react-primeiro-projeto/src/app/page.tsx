import {Timer} from '@/app/components/Timer'
import {EmojiRatingNew} from '@/app/components/RatingNew';
import { StudentTable } from './components/StudentTable';
import { student } from './data/students';


const Page = () => {

  return(

    <div className='container mx-auto'>
      <h1 className='text-5xl'>Lista de alunos</h1>
      <StudentTable students={student}/>
    </div>

  ) 
}

export default Page;
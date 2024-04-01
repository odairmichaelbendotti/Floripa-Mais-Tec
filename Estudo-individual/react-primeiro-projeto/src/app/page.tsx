import {Timer} from '@/app/components/Timer'
import {EmojiRatingNew} from '@/app/components/RatingNew';

const Page = () => {

  return(

    <div className="h-screen w-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">         
        <EmojiRatingNew rate={Math.floor(2)}/>
    </div>

  ) 
}

export default Page;
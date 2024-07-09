import "../buttons.css"
import { useNavigate } from "react-router-dom";

const NextChapter = ({courseName, chapterName, chapterNum, description}) => {
    const navigate = useNavigate();
    return (
      <div className="font-mono mt-10 rounded-lg max-w-3xl mx-auto p-6 bg-gray-900 rounded-lg shadow-md mt-10 text-center">
        <div className='text-lg text-gray-300'>
            Next Up
        </div>
        <div className='my-2 text-white text-2xl font-bold'>
            {chapterNum}: {chapterName}
        </div>
        <div className='my-5 text-white text-lg'>
            {description}
        </div>
        <div className='text-black'>
            <button style={ {"box-shadow": "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)" }}
  class="inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100" onClick={() => navigate(`/courses/online/${courseName}/${chapterNum}`)}>Next Chapter ➜</button>
        </div>
        
      </div>
    );
  };
  export default NextChapter;
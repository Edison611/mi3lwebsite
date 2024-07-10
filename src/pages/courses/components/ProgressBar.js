import "../../buttons.css"
import TableOfContents from "./TableOfContents";

const ProgressBar = ({courseName, chapterName, chapterNum, chapters, description}) => {
    
    return (
        <div className="z-50 font-mono mt-10 rounded-full max-w-5xl mx-auto p-6 bg-gray-900 rounded-lg shadow-md flex justify-between items-center">
            <div className="flex items-center">
                <TableOfContents courseName={courseName} chapters={chapters} />
                <div className="ml-5 flex flex-col">
                <div className="text-white text-lg">{chapterNum}: {chapterName}</div>
                <div className="max-w-xl text-gray-300 text-sm mt-1">{description}</div>
                </div>
            </div>
            <div className="text-white text-md text-lg ml-3 mr-5">
                {chapterNum} / {chapters.length}
            </div>
        </div>

    );
  };
  export default ProgressBar;
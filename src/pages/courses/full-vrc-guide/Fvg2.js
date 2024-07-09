import ProgressBar from "../ProgressBar";
import NextChapter from "../NextChapter";
import ch from './chapters.json'
import CodeBlock from "../CodeBlock";

const Fvg2 = () => {
    const chapters = ch.chapters
    const description = ch.descriptions
    const chapterNum = 2;
    // const chapterName = "Getting Started";
    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
          <div className="max-w-4xl mt-5 mx-auto p-6 font-mono">
            <h1 className="text-3xl mb-5 font-bold">PROS Documentation</h1>
            <p className="text-lg leading-relaxed mb-8">If you need to refer to any Documentation for PROS here is the link: <a className="text-blue-600" href="https://pros.cs.purdue.edu/v5/">PROS Documentation</a> </p>
            <CodeBlock/>
            {/* <h1 className="text-3xl mb-5 font-bold">Folder Structure</h1>
            <p className="text-lg leading-relaxed mb-8">Once you create your project and open the folder. You'll most likely see the following folder structure</p>
            <img src="https://cdn.discordapp.com/attachments/1115014592595230741/1260045406742646875/image.png?ex=668de43b&is=668c92bb&hm=3f187bb869d4c2290547979c0b62d569815cf813b0ed840dfaa4203c9fe5fd29&" alt=""></img>
            <p className="mt-8 text-lg leading-relaxed mb-8">We'll go over what each folder contains and the important files located within</p>
            <img className="mx-auto" src="https://cdn.discordapp.com/attachments/1115014592595230741/1260046099654250616/image.png?ex=668de4e0&is=668c9360&hm=b0e4a8c4b63a71bdc1732a03bf8f9f9beeb266fed8668489b009d2091b6363de&" alt=""></img>
            <p className="mt-8 text-lg leading-relaxed mb-3">Follow the instructions on VSCode and make sure you choose a file location where you will remember. </p> */}
        </div>
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto"></hr>


        <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/>
      </div>
    );
  };
  export default Fvg2;
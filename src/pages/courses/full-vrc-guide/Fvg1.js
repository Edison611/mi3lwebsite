import ProgressBar from "../ProgressBar";
import NextChapter from "../NextChapter";
import ch from './chapters.json'

const Fvg1 = () => {
    const chapters = ch.chapters
    const description = ch.descriptions
    const chapterNum = 1;
    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
          <div className="max-w-4xl mt-5 mx-auto p-6 font-mono">
          
            {/* <h1 className="text-4xl font-bold text-center">{chapter} </h1> */}
            {/* <p className="text-lg leading-relaxed mb-10"></p> */}
            <h1 className="text-3xl mb-5 font-bold">Libraries and Frameworks </h1>
            <p className="text-lg leading-relaxed mb-10">There are many platforms that can be used to code VRC Robots. The two main ones are VEXCode V5 and PROS by Purdue which will both use C++ as its main programming language. In this tutorial, we will be using PROS.</p>
            <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto"></hr>
            <h1 className="text-3xl mt-10 mb-5 font-bold">Creating a New Project </h1>
            <p className="text-lg leading-relaxed mb-8">To create a new project, you will first have to install Visual Studio Code (VSCode) on your device. Head to this <a className="text-blue-600" href="https://code.visualstudio.com/download">Download Link</a> to install (VSCode).</p>
            <p className="text-lg leading-relaxed mb-8">Once you have finished installing, you will need to install the PROS Extension on VSCode. Look for the extensions icon on the left side of your screen</p>
            <img src="https://cdn.discordapp.com/attachments/1115014592595230741/1260045406742646875/image.png?ex=668de43b&is=668c92bb&hm=3f187bb869d4c2290547979c0b62d569815cf813b0ed840dfaa4203c9fe5fd29&" alt=""></img>
            <p className="mt-8 text-lg leading-relaxed mb-8">After you have installed PROS and the the PROS CLI (Command-Line Interface), you will a PROS extension icon on the left. Click that extension and click "Create Project"</p>
            <img className="mx-auto" src="https://cdn.discordapp.com/attachments/1115014592595230741/1260046099654250616/image.png?ex=668de4e0&is=668c9360&hm=b0e4a8c4b63a71bdc1732a03bf8f9f9beeb266fed8668489b009d2091b6363de&" alt=""></img>
            <p className="mt-8 text-lg leading-relaxed mb-3">Follow the instructions on VSCode and make sure you choose a file location where you will remember. You should select v5 and the latest version if it prompts you to. </p>
        </div>
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto"></hr>


        <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/>
      </div>
    );
  };
  export default Fvg1;
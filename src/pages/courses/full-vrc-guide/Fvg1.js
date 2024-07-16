import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import ch from './chapters.json'
import CodeBlock from "../components/CodeBlock";
import im1 from './images/ch1-1.png'

const Fvg1 = () => {
    const chapters = ch.chapters
    const description = ch.descriptions
    const chapterNum = 1;
    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
          <div className="max-w-[80vw] mt-5 mx-auto p-6 font-mono">
          
            {/* <h1 className="text-4xl font-bold text-center">{chapter} </h1> */}
            {/* <p className="text-lg leading-relaxed mb-10"></p> */}
            <h1 className="text-3xl mb-5 font-bold">Libraries and Frameworks </h1>
            <p className="text-lg leading-relaxed mb-10">There are many platforms that can be used to code VRC Robots. The two main ones are VEXCode V5 and PROS by Purdue which will both use C++ as its main programming language. In this tutorial, we will be using PROS.</p>
            <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto"></hr>
            <h1 className="text-3xl mt-10 mb-5 font-bold">Creating a New Project </h1>
            <p className="text-lg leading-relaxed mb-8">To create a new project, you will first have to install Visual Studio Code (VSCode) on your device. Head to this <a className="text-blue-600" href="https://code.visualstudio.com/download">Download Link</a> to install (VSCode).</p>
            <p className="text-lg leading-relaxed mb-8">Once you have finished installing, you will need to install the PROS Extension on VSCode. Look for the extensions icon on the left side of your screen</p>
            <img src="https://media.discordapp.net/attachments/1115014592595230741/1260045406742646875/image.png?ex=66971ebb&is=6695cd3b&hm=79defafb0dc7c10aabb5ad0a00135bc29cf76fea87834870f83c42b5d2d573fb&=&format=webp&quality=lossless&width=1920&height=616" alt=""></img>
            <p className="mt-8 text-lg leading-relaxed mb-8">After you have installed PROS and the PROS CLI (Command-Line Interface), you will a PROS extension icon on the left. Click that extension and click "Create Project"</p>
            <img className="mx-auto" src="https://media.discordapp.net/attachments/1115014592595230741/1260046099654250616/image.png?ex=66971f60&is=6695cde0&hm=5f915bbd2f8d1375c4be43bab7ad73e086a7f3bf598a232c96769c40c696bd30&=&format=webp&quality=lossless&width=382&height=894" alt=""></img>
            <p className="mt-8 text-lg leading-relaxed mb-3">Follow the instructions on VSCode and make sure you choose a file location where you will remember. You should select v5 and the latest version if it prompts you to. </p>
            <h1 className="text-3xl mt-10 mb-5 font-bold">Alternative Way </h1>
            <p className="mt-8 text-lg leading-relaxed mb-3">Alternatively, if that method does not work for whatever reason, you can use the terminal to create a new project. Only use this method if you are more advanced or the method above does not work. Start by making an empty folder, then open a new PROS Terminal under that folder and run the following command: </p>
            <CodeBlock language="powershell" codeString={"pros c new-project ./ v5 3.8"} showLineNumbers={false}></CodeBlock>
            <p className="mt-8 text-lg leading-relaxed mb-3">You should get the same result from either method. Your folder structure should look something like this: </p>
            <img className="mx-auto" src={im1} alt=""></img>
            <p className="mt-8 text-lg leading-relaxed mb-3">We'll go over what's in each of these folders in the next lesson so don't let all these files overwhelm you.</p>
            <h1 className="text-3xl mt-10 mb-5 font-bold">Building & Uploading Code</h1>
            <p className="mt-8 text-lg leading-relaxed mb-3">The first time you upload new code to a Brain, we recommend that you plug it directly into the Brain, any other time, plug it into the controller.</p>
            <p className="mt-8 text-lg leading-relaxed mt-3">To build a project, run the following command:</p>
            <CodeBlock language="powershell" codeString={"pros build"}></CodeBlock>
            <p className="mt-8 text-lg leading-relaxed mt-3">To upload a project, run the following command:</p>
            <CodeBlock language="powershell" codeString={"pros upload"}></CodeBlock>
            <p className="mt-8 text-lg leading-relaxed mt-3">To build and upload a project, run the following command:</p>
            <CodeBlock language="powershell" codeString={"pros mu"}></CodeBlock>
            <p className="mt-8 text-lg leading-relaxed mt-3">Remember that everytime you make a change to your code, you are going to have to build and upload it for your changes to be there.</p>
        </div>
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto"></hr>


        <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/>
      </div>
    );
  };
  export default Fvg1;
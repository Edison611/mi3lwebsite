import { useNavigate } from "react-router-dom";
const Ch1 = () => {
    const navigate = useNavigate();
    const chapter = 1;
    return (
        <div className="max-w-4xl mt-10 mx-auto p-6 font-mono">
        <h1 className="text-4xl font-bold mb-8 text-center">Getting Started </h1>
        <p className="text-lg leading-relaxed mb-10"></p>
        <h1 className="text-3xl mt-20 mb-5 font-bold">Libraries and Frameworks </h1>
        <p className="text-lg leading-relaxed mb-10">There are many platforms that can be used to code VRC Robots. The two main ones are VEXCode V5 and PROS by Purdue which will both use C++ as its main programming language. In this tutorial, we will be using PROS.</p>
        <hr className=""></hr>
        <h1 className="text-3xl mt-10 mb-5 font-bold">Creating a New Project </h1>
        <p className="text-lg leading-relaxed mb-8">To create a new project, you will first have to install Visual Studio Code (VSCode) on your device. Head to this <a className="text-blue-600" href="https://code.visualstudio.com/download">Download Link</a> to install (VSCode).</p>
        <p className="text-lg leading-relaxed mb-8">Once you have finished installing, you will need to install the PROS Extension on VSCode. Look for the extensions icon on the left side of your screen</p>
      </div>
    );
  };
  export default Ch1;
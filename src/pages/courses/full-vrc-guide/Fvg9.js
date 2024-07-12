import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import ch from './chapters.json';
import Activity from "../components/Activity";
// import im1 from './images/ch8-1.png'; 

const Fvg9 = () => {
    const chapters = ch.chapters;
    const description = ch.descriptions;
    const chapterNum = 9;

    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
        <div className="max-w-[80vw] mt-5 mx-auto p-6 font-mono">
            <h1 className="text-3xl mb-5 font-bold">What are Libraries</h1>
            <p className="text-lg leading-relaxed mb-8">In the real-world a library is a place where you can find a variety of books. In programming, a library is a tool that has prebuilt functions that you can use which can save you a lot of time. PROS is one of those libraries that you have used to define and move your motors without writing a bunch of code to activate the motors yourself.</p>
            <p className="text-lg leading-relaxed mb-5">Below are some libraries that our team has used or heard of</p>
            <ul className="text-lg leading-relaxed ml-10 list-disc">
                <li className="text-lg leading-relaxed"><a className="text-blue-500" href="https://lemlib.readthedocs.io/en/stable/index.html">Lemlib</a>: A library used for Odometry, PID, and other movements on PROS</li>
                <li className="text-lg leading-relaxed"><a className="text-blue-500" href="https://ez-robotics.github.io/EZ-Template/">EZ-Template</a>: A library used for PID movements on VexCode V5</li>
                <li className="text-lg leading-relaxed"><a className="text-blue-500" href="https://github.com/kunwarsahni01/Vex-Autonomous-Selector">Auton-Selector</a>: A library used for Autonomous Selectors</li>
            </ul>

            <p className="text-lg leading-relaxed mt-8 mb-5">Each of these websites has their own instructions on how to use them and how you can install them to add to your project. We used Lemlib as we found it had many features that were useful in making autonomous routes.</p>
            <Activity question="Start by following the tutorials on Lemlib and test out the Odometry system on there. Once that system works, begin by making autonomous routes for your competitions."/>
        </div>
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
        <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/>
      </div>
    );
};

export default Fvg9;

import NextChapter from "../NextChapter";
import ProgressBar from "../ProgressBar";
import ch from './chapters.json'

const Intro = () => {
  const chapterNum = 0
  const chapters = ch.chapters
  const description = ch.descriptions
    return (
    <div>
      <ProgressBar courseName="full-vrc-guide" chapterName="Introduction" chapterNum={chapterNum} chapters={chapters} />
      <div className="max-w-4xl mt-10 mx-auto p-6 font-mono">
        <h1 className="text-4xl font-bold mb-8">The Full VRC Programming Guide </h1>
        <p className="text-lg leading-relaxed mb-10">Welcome to the Full VRC Programming Guide. In this course, you will learn the very basics of programming a VEX Robot all the way to some more advanced algorithms to help increase your accuracy.</p>
        <h1 className="text-3xl mt-20 mb-5">What You'll Be Learning </h1>
        <ul className="text-lg leading-relaxed ml-10 list-disc">
            <li className="text-lg leading-relaxed">Programming Fundamentals (Variables, Data Structures, Functions, Algorithms, etc) </li>
            <li className="text-lg leading-relaxed">Motor Control & Autonomous Navigation </li>
            <li className="text-lg leading-relaxed">Reading Sensor Data for Decision Making (Inertial, Rotational, Distance, etc) </li>
            <li className="text-lg leading-relaxed">PID Control and Tuning </li>
            <li className="text-lg leading-relaxed">Debugging / Troubleshooting </li>
        </ul>
      </div>
      <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto"></hr>

      <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]} />
    </div>
    );
  };
  export default Intro;
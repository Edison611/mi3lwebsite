import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import ch from './chapters.json'
import CodeBlock from "../components/CodeBlock";
import FillBlank from "../components/FillBlank";
import Activity from "../components/Activity";
import im1 from './images/ch3-1.png'; 

const Fvg3 = () => {
    const chapters = ch.chapters
    const description = ch.descriptions
    const chapterNum = 3

    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
        <div className="max-w-[80vw] mt-5 mx-auto p-6 font-mono">
            <h1 className="text-3xl mb-5 font-bold">Arcade Drive</h1>
            <p className="text-lg leading-relaxed mb-8">Arcade drive is a method of controlling a robot using the vertical axis of the joystick to control the forward and backward motion, while using the horizontal axis to control the turning motion. Below is a flowchart of how you can implement code for arcade drive: </p>
            <img src={im1} alt="Arcade Drive Flowchart" className="rounded-full mx-auto mb-8"/>
            <ul className="text-lg leading-relaxed ml-10 list-disc">
                <li className="text-lg leading-relaxed">Perform Any Tuning refers to adjusting your controller's sensitivity or adding a deadband (more on this later)</li>
                <li className="text-lg leading-relaxed">Power refers to the joystick movement in the y-direction</li>
                <li className="text-lg leading-relaxed">Turn refers to the joystick movement in the x-direction </li>
            </ul>
            <p className="text-lg leading-relaxed mt-8">To give full power to a motor, you can do the following: </p>
            <CodeBlock codeString={`motor.move(127);`} language="cpp"/>
        
            <Activity 
              question="Create a new file called drive.cpp. Inside, create an arcade drive function using your already defined motors and controller. BONUS: Add a deadband to the joystick movement to prevent the robot from moving when the joystick value is below 5 in any direction."
              answer={
`void arcade_drive() {
    int power = master.get_analog(ANALOG_LEFT_Y); // Get the vertical axis value
    int turn = master.get_analog(ANALOG_RIGHT_X);   // Get the horizontal axis value

    // Deadband
    if (abs(power) < 5) {
        power = 0;
    }
    if (abs(turn) < 5) {
        turn = 0;
    }
    
    int leftPower = forward + turn;
    int rightPower = forward - turn; 
    
    driveL.move(leftPower);
    driveR.move(rightPower);
}`
              }
            />
        </div>
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
        <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/>
      </div>
    );
};

export default Fvg3;

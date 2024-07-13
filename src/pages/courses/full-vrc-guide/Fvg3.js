import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import ch from './chapters.json'
import CodeBlock from "../components/CodeBlock";
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
                <li className="text-lg leading-relaxed">Note that the power + turn and power - turn can be swapped sometimes.</li>
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
    
    int leftPower = power + turn;
    int rightPower = power - turn; 
    
    driveL.move(leftPower);
    driveR.move(rightPower);
}`
              }
            />
            <h1 className="text-3xl mt-10 mb-5 font-bold">Adding Other Subsystems</h1>
            <p className="text-lg leading-relaxed mb-8">It is very common for you to not have all 8 motors used for driving. All of your other subsystems will be defined very similarily to your drive code.</p>
            <p className="text-lg leading-relaxed ">Let's say you want to code an intake. When the driver holds the R1 button: it intakes. When they hold the R2 button: it outtakes. Here is some sample code for that.</p>
            <CodeBlock codeString={
`pros::Motor intake(1);

void intakeControl() {
    if (master.get_digital(DIGITAL_R1)) {
        intake.move(127);
    } else if (master.get_digital(DIGITAL_R2)) {
        intake.move(-127);
    } else {
        intake.move(0);
    }
}
// OR 

void intakeControl() {
    int intake_power = 127 * (master.get_digital(pros::E_CONTROLLER_DIGITAL_R1) - master.get_digital(pros::E_CONTROLLER_DIGITAL_R2));
    intake.move(intake_power);
}` } language="cpp"/>
        <p className="text-lg leading-relaxed mb-8">Note that the .get_digital is used when you hold down a button</p>
        <p className="text-lg leading-relaxed ">There is another case where you may need to press the button multiple times. Let's say you wanted to activate your catapult when you press 'B' and let it continue to shoot until you press 'B' again. Here is some sample code for that: </p>
        <CodeBlock codeString={
`pros::Motor catapult(10);
bool current_state = false;

void catapultControl() {
    if (master.get_digital_new_press(pros::E_CONTROLLER_DIGITAL_B)) {
        current_state = !current_state;
    }
    if (current_state) {
        catapult.move(127);
    } else {
        catapult.move(0);
    }

}` } language="cpp"/>
        </div>
        
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
        <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/>
      </div>
    );
};

export default Fvg3;

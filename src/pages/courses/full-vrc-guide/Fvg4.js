import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import ch from './chapters.json';
import CodeBlock from "../components/CodeBlock";
import FillBlank from "../components/FillBlank";
import Mcq from "../components/Mcq";
// import im1 from './images/ch4-1.png'; 
import Activity from "../components/Activity";

const Fvg4 = () => {
    const chapters = ch.chapters;
    const description = ch.descriptions;
    const chapterNum = 4;

    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
        <div className="max-w-[80vw] mt-5 mx-auto p-6 font-mono">
            <h1 className="text-3xl mb-5 font-bold">Autonomous Routes</h1>
            <p className="text-lg leading-relaxed mb-8">An autonomous route is a pre-programmed set of instructions that your robot will follow without human intervention. This is always used during the autonomous period of a VEX competition. You can earn extra points for winning autonomouses, Autonomous Points which are useful for tiebreaks, but most importantly AWPs (Autonomous Win Points) which counts as half a win.</p>
            
            <h2 className="text-3xl mb-5 font-bold">Adding a setDrive Function</h2>
            <p className="text-lg leading-relaxed mb-8">Creating your own function to control the motors of the robot to move forward, backward, and turn will save a lot of repetitive coding. Here is an example of how to create a setDrive function:</p>
            <CodeBlock codeString={
    `void setDrive(int leftPower, int rightPower) {
    driveLB.move(leftPower);
    driveLF.move(leftPower);
    driveRB.move(rightPower);
    driveRF.move(rightPower);
}`
            } language="cpp"/>
            <p className="text-lg leading-relaxed mt-4 mb-8">This function takes two arguments: leftPower and rightPower, which control the power sent to all of the left and right motors respectively.</p>
            <Mcq 
              question="Which way should the robot move if setDrive(127, -127) is called?"
              options={[
                "Move forwards straight",
                "Move backwards straight",
                "Turn clockwise",
                "Turn counterclockwise"
              ]}
              correctAnswer="Turn clockwise"
              
            />
            <p className="text-lg leading-relaxed mt-4 mb-8">You'll notice that if you send one side with power and the other side with the opposite power, your robot will turn on the spot.</p>
            
            <h2 className="text-3xl mb-5 font-bold mt-10">Adding Delays</h2>
            <p className="text-lg leading-relaxed mb-8">To create a sequence of movements, you can use delays between each setDrive command. The pros::delay function allows you to pause the program for a specified number of milliseconds. Here's an example of a simple autonomous route:</p>
            <CodeBlock codeString={
    `void autonomous() {
    setDrive(127, 127); // Move forward at full power
    pros::delay(2000); // Wait for 2 seconds

    setDrive(0, 0); // Stop
    pros::delay(500); // Wait for 0.5 seconds

    setDrive(-127, -127); // Move backward at full power
    pros::delay(2000); // Wait for 2 seconds

    setDrive(0, 0); // Stop
}`
            } language="cpp"/>
            <p className="text-lg leading-relaxed mt-4 mb-8">In this example, the robot moves forward for 2 seconds, stops for 0.5 seconds, then moves backward for 2 seconds, and finally stops. The setDrive(0,0) to stop the robot is VERY important or else your motors will continue with the previous input and go at full power forever.</p>
            
            <FillBlank 
              question="Write code for a 0.75 second delay"
              answer="pros::delay(750);"
            />

            
            
            <Activity 
              question="Create a new file called autonomous.cpp. Inside, create a function called redRight that moves the robot forward for 0.5 seconds, turns left at around 50% power for 1.5 seconds, moves forward at 70% power for 1.5 seconds, then stops."
              answer={
    `void redRight() {
    setDrive(127, 127); // Move forward at full power
    pros::delay(500); // Wait for 0.5 seconds

    setDrive(60, -60); // Turn left at ~half power
    pros::delay(1500); // Wait for 1.5 seconds

    setDrive(90, 90); // Move forward at 70% power
    pros::delay(1500); // Wait for 1.5 second

    setDrive(0, 0); // Stop
}`
              }
            />
            <p className="text-lg leading-relaxed mt-4 mb-8">Run the code with your robot to see what it does. Make sure you place your robot in the exact same spot everytime because that's what you will be doing at competitions. If you run the same code multiple times, what do you notice? </p>
            <p className="text-lg leading-relaxed mt-4 mb-8">You will likely see that the robot doesn't go to the same place every single time. As a programmer, that can be strange since you are running the exact same code, but getting different results. That is because there are external factors such as friction that may vary from trial to trial and it can be very frustrating as coders to deal with that.</p>
            <p className="text-lg leading-relaxed mt-4 mb-8">It is also very difficult to know what distance your robot is travelling if you give it full power for 1 second which makes it slow and tedious to program. </p>
            <p className="text-lg leading-relaxed mt-4 mb-8">For these reasons, our robots use sensors and other algorithms to help correct for the differences which will be the next 2 chapters. </p>
        </div>
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
        <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/>
      </div>
    );
};

export default Fvg4;

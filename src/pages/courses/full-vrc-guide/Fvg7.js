import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import ch from './chapters.json';
import CodeBlock from "../components/CodeBlock";
import Activity from "../components/Activity";
// import im1 from './images/ch7-1.png'; 

const Fvg7 = () => {
    const chapters = ch.chapters;
    const description = ch.descriptions;
    const chapterNum = 7;

    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
        <div className="max-w-[80vw] mt-5 mx-auto p-6 font-mono">
            <h1 className="text-3xl mb-5 font-bold">Debugging Your Code</h1>
            <p className="text-lg leading-relaxed mb-8">Debugging is an essential skill for programmers. It involves finding and fixing errors or bugs in your code to ensure it runs correctly. You may have noticed that the code we've previously written might not work for certain scenarios. This chapter will introduce you to various debugging techniques and tools that can help you troubleshoot and resolve issues in your code.</p>
            
            <h2 className="text-3xl mb-5 font-bold">Understanding Common Error Types</h2>
            <p className="text-lg leading-relaxed mb-5">Errors in your code can be categorized into several types:</p>
            <ul className="text-lg leading-relaxed ml-10 list-disc">
                <li className="text-lg leading-relaxed">Syntax Errors: Mistakes in the code that prevent it from compiling, such as missing semicolons or incorrect syntax.</li>
                <li className="text-lg leading-relaxed">Runtime Errors: Errors that occur while the program is running, such as division by zero or accessing null pointers.</li>
                <li className="text-lg leading-relaxed">Logic Errors: Errors where the code runs without crashing but does not produce the expected results.</li>
            </ul>
            <p className="text-lg leading-relaxed mt-5">Understanding these types of errors will help you identify what went wrong and where to start debugging.</p>
            
            <h2 className="text-3xl mt-10 mb-5 font-bold">Strategies to Debug</h2>
            <ul className="text-lg leading-relaxed ml-10 list-disc">
                <li className="text-lg leading-relaxed">Breakpoints: Pause the execution of your program at a specific line of code by commenting out the rest of your code</li>
                <li className="text-lg leading-relaxed">Tracing Back: Return to the last time your code worked, then add your new changes line by line to see which line is causing the issue.</li>
                <li className="text-lg leading-relaxed">Watch Variables: Monitor the values of variables as the program executes to see if anything unusual is going on.</li>
                <li className="text-lg leading-relaxed">Reproduce the Problem: Try to consistently reproduce the issue to understand when it occurs.</li>
                <li className="text-lg leading-relaxed">Simplify the Code: Reduce the complexity of the code to isolate the issue.</li>
                <li className="text-lg leading-relaxed">MAKE SURE IT IS A SOFTWARE ERROR: Sometimes your code might not work because there is hardware that is faulty.</li>
            </ul>
            {/* <img src={im1} alt="Debugging Tools" className="rounded-full mx-auto mb-8"/> */}

            <h2 className="text-2xl mt-8 mb-5 font-bold">Example: Syntax Error</h2>
            <p className="text-lg leading-relaxed">Here is an example of a syntax error:</p>
            <CodeBlock codeString={`int main() {
    int a = 5
    return 0;
}`} language="cpp"/>
            <p className="text-lg leading-relaxed mb-8">The error is missing a semicolon after `int a = 5`. Fixing this syntax error will allow the code to compile.</p>

            <h2 className="text-2xl mb-5 font-bold">Example: Runtime Error</h2>
            <p className="text-lg leading-relaxed">Here is an example of a runtime error:</p>
            <CodeBlock codeString={`int divide(int a, int b) {
    return a / b;
}

int main() {
    int result = divide(10, 0);
    return 0;
}`} language="cpp"/>
            <p className="text-lg leading-relaxed mb-8">The error is dividing by zero. To fix this, you should check if `b` is zero before performing the division.</p>

            <h2 className="text-2xl mb-5 font-bold">Example: Logic Error</h2>
            <p className="text-lg leading-relaxed">Here is an example of a logic error:</p>
            <CodeBlock codeString={`int add(int a, int b) {
    return a - b;  // Logic error: should be a + b
}

int main() {
    int result = add(3, 4);
    return 0;
}`} language="cpp"/>
            <p className="text-lg leading-relaxed mb-8">The code should add two numbers, but it subtracts them instead. You need to fix the logic in the `add` function.</p>
            <h2 className="text-3xl mb-5 font-bold">Debugging Written Code</h2>
            <p className="text-lg leading-relaxed mb-8">Below is some code from last season, but it deliberately contains many errors in it. Do the activity below.</p>
            <CodeBlock codeString={
`#include main.h
pros::Motor catapult(1);
pros::Rotation kicker_rot(13, false);
bool cata_shoot = false;

int kickerTask() {
    stop = true;

    while (True) {
         while (kicker_rot.get_angle() < 30000) { 
            pros::lcd::set_text("REACHED");
            if (stop == true) {
                Catapult.move_velocity(0);
                stop = false;
            }

            if (cata_shoot == true) {
                cata_shoot = true; 
                break
            }
        }

        if (cata_shoot == true) {
            pros::lcd::set_text(2, "Shoot');
            cata_shoot = false;
            Catapult.move_velocity(200);
            stop = true;
            pros:delay(260);
        }
        pros::delay(20);
    }
}`} language="cpp"/>
            <Activity 
              question="Take a look at the code above, fix any errors in the code so that the function works as intended. You should run the program locally to get familiar with the debugging process."
              answer={
`#include "main.h" // added quotations
pros::Motor catapult(1);
pros::Rotation kicker_rot(13, false);
bool cata_shoot = false;

void kickerTask() { // int -> void
    bool stop = true; // Added bool in front of stop

    while (true) { // Changed True -> true
         while (kicker_rot.get_angle() < 30000) { 
            pros::lcd::set_text(1, "REACHED"); // Added first parameter (any line number is ok)
            if (stop == true) {
                catapult.move_velocity(0); // Catapult -> catapult
                stop = false;
            }

            if (cata_shoot == true) {
                cata_shoot = true; 
                break; // Added ;
            }
        }

        if (cata_shoot == true) {
            pros::lcd::set_text(2, "Shoot"); // ' -> "
            cata_shoot = false;
            catapult.move_velocity(200); // Catapult -> catapult
            stop = true;
            pros::delay(260); // Added a missing :
        }
        pros::delay(20);
    }
}`
              }
            />
            
            <h2 className="text-3xl mt-10 mb-5 font-bold">Tasks</h2>
            <p className="text-lg leading-relaxed mb-8">Tasks are used when you want multiple pieces of code to run at the same time. In the activity above, that was a task to hold down our kicker last season. Be careful when using too many tasks as it can exhaust your CPU since it is processing many functions at the same time.</p>
            <p className="text-lg leading-relaxed">Below is an example of how you would create a task function and execute it:</p>
            <CodeBlock codeString={
`void task_function() {
    while (true) {
        // Code to run
        pros::delay(20);
    }
}`} language="cpp"/>
            <CodeBlock codeString={
`void initialize() {
    pros::Task task_name(task_function);
}`} language="cpp"/>
            <Activity 
              question="Write a task to print the units on each of your drive motor encoders and the angle of your inertial sensor on the V5 Brain every 80ms."
              answer={
`void printEncoders() {
    while (true) {
        pros::lcd::set_text(1, "Left Encoder: " + left_encoder.get_position());
        pros::lcd::set_text(2, "Right Encoder: " + right_encoder.get_position());
        pros::lcd::set_text(3, "Inertial Angle: " + inertial_sensor.get_heading());
        pros::delay(80);
    }
}
    
void initialize() {
    pros::Task printEncodersTask(printEncoders);
}`
              }
            />
            
        </div>
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
        <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/>
      </div>
    );
};

export default Fvg7;

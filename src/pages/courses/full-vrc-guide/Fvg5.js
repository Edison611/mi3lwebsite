import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import ch from './chapters.json';
import CodeBlock from "../components/CodeBlock";
// import FillBlank from "../components/FillBlank";
import Mcq from "../components/Mcq";
import im1 from './images/ch5-1.png'; 
import im2 from './images/ch5-2.webp'; 
import im3 from './images/ch5-3.png';
import Activity from "../components/Activity";

const Fvg5 = () => {
    const chapters = ch.chapters;
    const description = ch.descriptions;
    const chapterNum = 5;

    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
        <div className="max-w-[80vw] mt-5 mx-auto p-6 font-mono">
            <h1 className="text-3xl mb-5 font-bold">Introduction to Sensors</h1>
            <p className="text-lg leading-relaxed mb-8">In this lesson, we will introduce sensors, focusing on the inertial sensor and the distance sensor. Sensors play a crucial role in providing feedback to your robot, allowing it to make more intelligent decisions and perform more precise movements.</p>
            
            <h2 className="text-3xl mb-5 font-bold">Inertial Sensor</h2>
            <p className="text-lg leading-relaxed mb-8">The inertial sensor measures the robot's rotation around its axes, allowing you to track its orientation in space. This is particularly useful for tasks that require precise turning or maintaining a specific heading. For example, getting your robot to turn 45 degrees clockwise. IMPORTANT: You should place your inertial sensors on a flat surface.</p>
            <img src={im1} alt="Inertial Sensor" className="rounded-full mx-auto mb-8 size-64"/>
            <p className="text-lg leading-relaxed">To define and use the inertial sensor, follow these steps:</p>
            <CodeBlock codeString={`pros::Imu inertial_sensor(1); // Initialize the inertial sensor on port 1`} language="cpp"/>
            <p className="text-lg leading-relaxed mt-5">You should always reset your inertial sensor when you initialize your code, and it generally will take a few seconds:</p>
            <CodeBlock codeString={
    `// In main.cpp
void initialize() {
    inertial_sensor.reset(); // Reset the sensor to zero
    pros::delay(2000); // Wait for 2 seconds to allow the sensor to calibrate
}`
            } language="cpp"/>
            <p className="text-lg leading-relaxed mt-4">You can get the current inertial sensor values in degrees with the following commands.</p>
            <CodeBlock codeString={`double heading = inertial_sensor.get_heading();`} language="cpp"/>
            <ul className="text-lg leading-relaxed ml-10 list-disc">
                {/* <li className="text-lg leading-relaxed">get_rotation(): Get the total number of degrees the Inertial Sensor has spun about the z-axis.</li> */}
                <li className="text-lg leading-relaxed">get_heading(): Get the Inertial Sensor’s heading relative to the initial direction of its x-axis. This value is bounded by [0,360).</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">There are other methods that you can use with the inertial sensor which can be found on the PROS Documentation. </p>
            <img src={im2} alt="" className="rounded-lg mx-auto mt-8 mb-8"/>
            <p className="text-lg leading-relaxed mt-4">To set the position of an inertial sensor, you can use the following code as an example:</p>
            <CodeBlock codeString={`inertial_sensor.set_heading(90); // Sets the heading to 90 degrees`} language="cpp"/>
            <Activity 
              question="Create a new function: void turn(int degrees), make your robot to turn to this specific amount of degrees using the inertial sensor and then make it stop moving once it is there. Assume your robot starts facing 0 degrees."
              answer={
    `void turn(int degrees) {
    while (inertial_sensor.get_heading() < degrees) {
        setDrive(70, -70); // Turn right at a speed of 70
        pros::delay(20);
    }
    setDrive(0, 0); // Stop
}`
              }
            />
            <p className="text-lg leading-relaxed mt-4">You might either notice that your robot turns very slow or it will overshoot the desired angle. In the next chapter, we will fix this issue using PID.</p>


            <h2 className="text-3xl mb-5 font-bold mt-10">Distance Sensor</h2>
            <p className="text-lg leading-relaxed mb-8">The distance sensor measures the distance between the sensor and an object. This can be useful for tasks such as detecting obstacles or measuring distances accurately.</p>
            <img src={im3} alt="Distance Sensor" className="rounded-full mx-auto mb-8 size-64"/>
            <p className="text-lg leading-relaxed">To initialize and use the distance sensor, follow this step:</p>
            <CodeBlock codeString={
    `pros::Distance distance_sensor(2); // Initialize the distance sensor on port 2`
            } language="cpp"/>
            <p className="text-lg leading-relaxed mt-8">You can get the current distance in millimeters with the following command:</p>
            <CodeBlock codeString={`int distance = distance_sensor.get();`} language="cpp"/>
            <Mcq 
              question="Given that 1 cm = 0.3937 inches. What is the formula to convert from the distance sensor value (distance) from the example above to inches?"
              options={[
                "double inches = distance * 0.3937",
                "double inches = distance / 0.3937",
                "double inches = distance * 0.03937",
                "double inches = distance / 0.03937",
              ]}
              correctAnswer="double inches = distance * 0.03937"
            />
            <Activity 
                question={"Create a new function called turnUntilObstacle. This function should make the robot turn right until an obstacle is detected within 4 inches using the distance sensor. Once an obstacle is detected, the robot should stop moving."}
                answer={
`void turnUntilObstacle() {
    while (distance_sensor.get() * 0.03937 > 4) {
        setDrive(70, -70); // Turn right at a speed of 70
        pros::delay(20);
    }
    setDrive(0, 0); // Stop
}`
                }
            />
            <h2 className="text-2xl mb-5 font-bold mt-10">Motor Encoders</h2>
            <p className="text-lg leading-relaxed mb-8">By default, your motors have sensors built-in that can detect the number of rotations they have made. These units are usually in degrees, but you can change them when you define your motors. To get or reset the values of these encoders, you can use the following code:</p>
            <CodeBlock codeString={
    `motor.get_position(); // Get the current encoder value
motor.tare_position(); // Reset the encoder value to zero`
            } language="cpp"/>
            
            <Activity 
              question="Create a function that makes the robot move forward for 24 inches (1 tile) and then stop using the average of your motor encoders. Assume that your robot has a wheel diameter of 3 inches. BONUS: Make it so that the code can work for any wheel diameter and travel any distance by making them parameters or variables that you can change."
              answer={
    `// Pseudo-Code
double wheelDiameter = 3.0; // Diameter of the wheel in inches that you can modify

void driveFwd(int distance) {
    motors.tare_position(); // Reset all the encoder values to zero

    double target = distance * 360 / (wheelDiameter * 3.14159); // Convert the distance to encoder units

    while (motors.get_position() < target) {
        setDrive(100, 100); // Move forward at 100 power
        pros::delay(20);
    }
    setDrive(0, 0);
}`
              }
            />
        </div>
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
        <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/>
      </div>
    );
};

export default Fvg5;

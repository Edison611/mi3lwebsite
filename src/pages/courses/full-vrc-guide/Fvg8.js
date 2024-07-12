import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import ch from './chapters.json';
import CodeBlock from "../components/CodeBlock";
import Mcq from "../components/Mcq";
// import im1 from './images/ch8-1.png'; 

const Fvg8 = () => {
    const chapters = ch.chapters;
    const description = ch.descriptions;
    const chapterNum = 8;

    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
        <div className="max-w-[80vw] mt-5 mx-auto p-6 font-mono">
            <h1 className="text-3xl mb-5 font-bold">What is Odometry?</h1>
            <p className="text-lg leading-relaxed mb-8">Odometry is a method used in robotics to estimate the position and orientation of a robot over time using data from motion sensors.</p>
            <p className="text-lg leading-relaxed mb-5">Odometry works by integrating the robot's velocity over time to estimate its change in position. This is typically done using encoders attached to the robot's wheels. The main components of odometry are:</p>
            <ul className="text-lg leading-relaxed ml-10 list-disc">
                <li className="text-lg leading-relaxed">Motor Encoders / Tracking Wheel: Measure the rotation of the wheels to calculate distance traveled.</li>
                <li className="text-lg leading-relaxed">Inertial Sensor: Measures the robot's orientation or angle.</li>
            </ul>

            <p className="text-lg leading-relaxed mt-8 mb-5">To implement odometry, you can follow these general steps:</p>
            <ol className="text-lg leading-relaxed ml-10 list-decimal">
                <li className="text-lg leading-relaxed">Initialize All Sensors: Set up the sensors and initialize their values.</li>
                <li className="text-lg leading-relaxed">Calculate Distance and Angle: Use the sensor data to calculate the distance traveled and change in orientation.</li>
                <li className="text-lg leading-relaxed">Update Position: Use the distance and angle to update the robot's position on the field.</li>
            </ol>
            <CodeBlock language="cpp" codeString={
`void update_odometry() {
    double x = 0.0;
    double y = 0.0;
    double theta = inertial_sensor.get_heading();

    double distance = (left_distance + right_distance) / 2.0; // You will need to convert encoder values to distance

    x += distance * cos(theta);
    y += distance * sin(theta);

    // Print position for verification
    std::cout << "X: " << x << " Y: " << y << " Theta: " << theta << std::endl; // To print to the brain you will need to use pros::lcd
}`
              }
            />
            <p className="text-lg leading-relaxed mt-5 mb-8">We won't be implementing our own complete odometry system ourselves in this tutorial because it is quite difficult, but you can find many resources online to help with that. We will show you libraries that with Odometry that you can install in the next chapter.</p>
            

            <h2 className="text-3xl mb-5 font-bold">Common Challenges with Odometry</h2>
            <p className="text-lg leading-relaxed mb-5">Odometry can be affected by various factors, leading to inaccuracies. Common challenges include:</p>
            <ul className="text-lg leading-relaxed ml-10 list-disc">
                <li className="text-lg leading-relaxed">Wheel Slippage: Causes incorrect distance measurements.</li>
                <li className="text-lg leading-relaxed">Sensor Drift: Inertial sensor values can drift over time, affecting orientation accuracy.</li>
                <li className="text-lg leading-relaxed">Uneven Terrain: Changes in surface can affect wheel encoders.</li>
            </ul>

            

            <Mcq 
              question="Why is it important to reset the encoders and inertial sensors before starting odometry calculations?"
              options={[
                "To ensure the robot starts from a known position",
                "To calibrate the sensors to the current environment",
                "To avoid sensor drift over time",
                "To synchronize the sensors with the control system"
              ]}
              correctAnswer="To ensure the robot starts from a known position"
            />
        </div>
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
        <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/>
      </div>
    );
};

export default Fvg8;

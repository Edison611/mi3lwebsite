import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import ch from './chapters.json';
import CodeBlock from "../components/CodeBlock";
import Mcq from "../components/Mcq";
// import im1 from './images/ch6-1.png'; 
import Activity from "../components/Activity";

const Fvg6 = () => {
    const chapters = ch.chapters;
    const description = ch.descriptions;
    const chapterNum = 6;

    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
        <div className="max-w-[80vw] mt-5 mx-auto p-6 font-mono">
            
            <h2 className="text-3xl mb-5 font-bold">What is PID Control?</h2>
            <p className="text-lg leading-relaxed mb-8">PID stands for Proportional, Integral, and Derivative, each of which is a component of the control algorithm part of the method used in robotics for precise control of motor output. PID control is a control loop feedback mechanism commonly used in industrial control systems. A PID controller continuously calculates an error value as the difference between a desired setpoint and a measured process variable and applies a correction based on proportional, integral, and derivative terms.</p>
            {/* <img src={im1} alt="PID Control" className="rounded-full mx-auto mb-8"/> */}
            
            <h2 className="text-2xl mt-5 mb-5 font-bold">Proportional Term (P)</h2>
            <p className="text-lg leading-relaxed">The proportional term produces an output value that is proportional to the current error value. The proportional response can be adjusted by multiplying the error by a constant K<sub>P</sub>, called the proportional gain.</p>
            <CodeBlock codeString={`output = kP * error;`} language="cpp"/>

            <h2 className="text-2xl mt-8 mb-5 font-bold">Integral Term (I)</h2>
            <p className="text-lg leading-relaxed">The integral term is concerned with the accumulation of past errors. If the error has been present for a long time, the integral term will increase the output to eliminate the error. This can help to reduce steady-state error.</p>
            <CodeBlock codeString={`integral += error; \noutput += kI * integral;`} language="cpp"/>

            <h2 className="text-2xl mt-8 mb-5 font-bold">Derivative Term (D)</h2>
            <p className="text-lg leading-relaxed">The derivative term is a prediction of future error, based on its rate of change. It provides a dampening effect, reducing the likelihood of overshoot and oscillations.</p>
            <CodeBlock codeString={`derivative = error - previousError; \noutput += kD * derivative;`} language="cpp"/>

            <h2 className="text-2xl mt-8 mb-5 font-bold">Combining P, I, and D</h2>
            <p className="text-lg leading-relaxed">The final PID control output is the sum of the proportional, integral, and derivative terms:</p>
            <CodeBlock codeString={
`double PID(double target, double measured_value, double& integral, double previous_error, double kP, double kI, double kD) {
    double error = target - measured_value;
    integral += error * deltaTime; // integral will be a global variable
    double derivative = error - previous_error;
    double output = kP * error + kI * integral + kD * derivative; 
    previous_error = error;
    return output;
}`
            } language="cpp"/>
            
            <h2 className="text-3xl mt-8 mb-5 font-bold">Implementing PID in Robotics</h2>
            <p className="text-lg leading-relaxed mb-8">To implement PID control in a robot, you need to continuously calculate the control output and adjust the motor speeds accordingly. In VEX Robotics, we've found that the integral term doesn't provide much value to the overall system. The P and D terms are almost always enough to make your robots movements very accurate.</p>
            <Mcq 
              question="Which term of the PID controller is responsible for predicting future error based on its rate of change?"
              options={[
                "Proportional",
                "Integral",
                "Derivative",
                "Integral and Derivative"
              ]}
              correctAnswer="Derivative"
            />
            <h2 className="text-3xl mt-8 mb-5 font-bold">Tuning PID</h2>
            <p className="text-lg leading-relaxed mb-8">To tune your kP and kD values, the following website has a very good flowchart on it: <a className="text-blue-600" href="https://lemlib.readthedocs.io/en/stable/tutorials/4_pid_tuning.html">PID Tuning (Lemlib)</a></p>
            <Activity 
              question="Implement a PD (no integral) loop for the robot to drive straight x amount of inches, if the error is smaller than 1 inch, your robot can stop. Tune the kP and kD values for your robot."
              answer={
`// Pseudo Code
double kP = 0.1; // Tune this value
double kD = 0.1; // Tune this value

void drive_straight(double distance) {
    double error = distance - motors.get_position();
    double previous_error = error; // We define this here so we don't get an error the first time we loop

    double tolerance = 1; // This is the # of inches of acceptable error

    motors.tare_position(); // Don't do this with odometry

    while (abs(error) > tolerance) {
        double current_position = motors.get_position();

        error = distance - current_position;
        double derivative = error - previous_error;

        double output = (kP * error) + (kD * derivative);

        setDrive(output, output);
        previous_error = error;
        pros::delay(20);
    }
    setDrive(0, 0);
}`
              }
            />
            <Activity 
              question="Implement a PD (no integral) loop for the robot to turn and FACE x degrees, if the error is smaller than 3 degrees, your robot can stop. Tune the kP and kD values for your robot. BONUS: Make your robot travel the shortest distance to the desired angle."
              answer={
`// Pseudo Code
double kP = 0.1; // Tune this value
double kD = 0.1; // Tune this value

void turn(double degrees) {
    double dir = 1;
    double error = degrees - inertial_sensor.get_heading();
    double previous_error = error; // We define this here so we don't get an error the first time we loop
    
    // If we need to turn more than 180 degrees, it's faster to turn the other way
    if error > 180 { 
        dir = -1 
    }

    double tolerance = 2; // This is the # of degrees of acceptable error

    while (abs(error) > tolerance) {
        double current_degrees = inertial_sensor.get_heading();

        error = degrees - current_degrees;
        double derivative = error - previous_error;
        
        double output = (kP * error) + (kD * derivative);

        setDrive(output * dir, -output * dir);
        previous_error = error;
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

export default Fvg6;

import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import ch from './chapters.json';
import CodeBlock from "../components/CodeBlock";
import FillBlank from "../components/FillBlank";
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
            <h1 className="text-3xl mb-5 font-bold">PID Control</h1>
            <p className="text-lg leading-relaxed mb-8">In this lesson, we will introduce PID control, a method used in robotics for precise control of motor output. PID stands for Proportional, Integral, and Derivative, each of which is a component of the control algorithm.</p>
            
            <h2 className="text-2xl mb-5 font-bold">What is PID Control?</h2>
            <p className="text-lg leading-relaxed mb-8">PID control is a control loop feedback mechanism commonly used in industrial control systems. A PID controller continuously calculates an error value as the difference between a desired setpoint and a measured process variable and applies a correction based on proportional, integral, and derivative terms.</p>
            {/* <img src={im1} alt="PID Control" className="rounded-full mx-auto mb-8"/> */}
            
            <h2 className="text-2xl mb-5 font-bold">Proportional Term (P)</h2>
            <p className="text-lg leading-relaxed mb-8">The proportional term produces an output value that is proportional to the current error value. The proportional response can be adjusted by multiplying the error by a constant K<sub>P</sub>, called the proportional gain.</p>
            <CodeBlock codeString={`output = Kp * error;`} language="cpp"/>

            <h2 className="text-2xl mb-5 font-bold">Integral Term (I)</h2>
            <p className="text-lg leading-relaxed mb-8">The integral term is concerned with the accumulation of past errors. If the error has been present for a long time, the integral term will increase the output to eliminate the error. This can help to reduce steady-state error.</p>
            <CodeBlock codeString={`integral += error * deltaTime; \noutput += Ki * integral;`} language="cpp"/>

            <h2 className="text-2xl mb-5 font-bold">Derivative Term (D)</h2>
            <p className="text-lg leading-relaxed mb-8">The derivative term is a prediction of future error, based on its rate of change. It provides a dampening effect, reducing the likelihood of overshoot and oscillations.</p>
            <CodeBlock codeString={`derivative = (error - previousError) / deltaTime; \noutput += Kd * derivative;`} language="cpp"/>

            <h2 className="text-2xl mb-5 font-bold">Combining P, I, and D</h2>
            <p className="text-lg leading-relaxed mb-8">The final PID control output is the sum of the proportional, integral, and derivative terms:</p>
            <CodeBlock codeString={
`double PID(double setpoint, double measured_value, double& integral, double previous_error, double Kp, double Ki, double Kd, double deltaTime) {
    double error = setpoint - measured_value;
    integral += error * deltaTime;
    double derivative = (error - previous_error) / deltaTime;
    double output = Kp * error + Ki * integral + Kd * derivative;
    previous_error = error;
    return output;
}`
            } language="cpp"/>
            <FillBlank 
              question="Fill in the blank: The proportional term can be adjusted by multiplying the error by a constant K__."
              answer="p"
            />

            <h2 className="text-2xl mb-5 font-bold">Implementing PID in Robotics</h2>
            <p className="text-lg leading-relaxed mb-8">To implement PID control in a robot, you need to continuously calculate the control output and adjust the motor speeds accordingly. Below is an example of how to use PID control to maintain a specific speed for a motor:</p>
            <CodeBlock codeString={
`pros::Motor motor(1);
double integral = 0;
double previous_error = 0;
double Kp = 0.1;
double Ki = 0.01;
double Kd = 0.1;

void maintain_speed(double target_speed) {
    double measured_speed = motor.get_actual_velocity();
    double output = PID(target_speed, measured_speed, integral, previous_error, Kp, Ki, Kd, 0.02);
    motor.move(output);
}`
            } language="cpp"/>
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

            <h2 className="text-2xl mb-5 font-bold">Practical Activity</h2>
            <Activity 
              question="Create a new file called pid_drive.cpp. Inside, implement a PID controller that maintains the robot's speed at a target value using the motor velocity as feedback. Tune the Kp, Ki, and Kd values to minimize error."
              answer={
`#include "main.h"

pros::Motor motor(1);
double integral = 0;
double previous_error = 0;
double Kp = 0.1;
double Ki = 0.01;
double Kd = 0.1;

double PID(double setpoint, double measured_value, double& integral, double& previous_error, double Kp, double Ki, double Kd, double deltaTime) {
    double error = setpoint - measured_value;
    integral += error * deltaTime;
    double derivative = (error - previous_error) / deltaTime;
    double output = Kp * error + Ki * integral + Kd * derivative;
    previous_error = error;
    return output;
}

void maintain_speed(double target_speed) {
    while (true) {
        double measured_speed = motor.get_actual_velocity();
        double output = PID(target_speed, measured_speed, integral, previous_error, Kp, Ki, Kd, 0.02);
        motor.move(output);
        pros::delay(20); // Short delay to prevent overwhelming the CPU
    }
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

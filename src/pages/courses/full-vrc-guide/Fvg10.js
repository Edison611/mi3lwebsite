import ProgressBar from "../components/ProgressBar";
import NextChapter from "../components/NextChapter";
import ch from './chapters.json';
import CodeBlock from "../components/CodeBlock";
import FillBlank from "../components/FillBlank";
import Mcq from "../components/Mcq";
import Activity from "../components/Activity";
// import im1 from './images/ch9-1.png'; 

const Fvg10 = () => {
    const chapters = ch.chapters;
    const description = ch.descriptions;
    const chapterNum = 10;

    return (
      <div>
        <ProgressBar courseName="full-vrc-guide" chapterName={chapters[chapterNum-1]} chapterNum={chapterNum} chapters={chapters} description={description[chapterNum-1]}/>
        <div className="max-w-[80vw] mt-5 mx-auto p-6 font-mono">
            <h1 className="text-3xl mb-5 font-bold">Understanding Pneumatics</h1>
            <p className="text-lg leading-relaxed mb-8">Pneumatics is the use of pressurized air to create mechanical motion. In robotics, pneumatics can be used for various applications such as actuating mechanisms or providing additional force. The main components of a pneumatic system include:</p>
            <ul className="text-lg leading-relaxed ml-10 list-disc">
                <li className="text-lg leading-relaxed">Tank: Stores the compressed air.</li>
                <li className="text-lg leading-relaxed">Solenoid Valve: Controls the flow of air to the actuators.</li>
                <li className="text-lg leading-relaxed">Cylinder (Piston): Convert compressed air into mechanical motion.</li>
                <li className="text-lg leading-relaxed">Air Tubing: Transports compressed air between components.</li>
            </ul>
            <img src="https://kb.vex.com/hc/article_attachments/17271878462868" alt="Pneumatic System Diagram" className="rounded-lg mx-auto mt-10 mb-8"/>
            <FillBlank question="Define a pneumatic called 'climb' on port A (use single quotes). The answer will be shown below, but try to now use the documentation to figure it out yourself." answer="pros::ADIDigitalOut climb('A');"/>
            <hr className="mt-10 text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
            <p className="text-lg leading-relaxed mt-10">If you didn't figure that out, here is how you define a pneumatic cylinder</p>
            <CodeBlock language="cpp" codeString={`pros::ADIDigitalOut climb('A'); // On port A`} />

            <Activity 
              question="Implement a function to actuate a pneumatic lift mechanism. Whenever your driver press 'A' on the controller, the cylinder should extend. When they press 'A' again, the cylinder should retract." 
              answer={
`pros::ADIDigitalOut lift('A');
bool current_state = false;

void lift() {
    if (controller.get_digital_new_press(pros::E_CONTROLLER_DIGITAL_A)) {
        current_state = !current_state;
        lift.set_value(currentClimb);
    }
}`
              }
            />

            <Mcq 
              question="Which component in a pneumatic system converts compressed air into mechanical motion?"
              options={[
                "Tank",
                "Solenoid Valve",
                "Cylinder (Piston)",
                "Air Tubing"
              ]}
              correctAnswer="Cylinder (Piston)"
            />
        </div>
        <hr className="text-center max-w-4xl border-t-4 border-gray-900 mx-auto mb-5"></hr>
        <NextChapter courseName="full-vrc-guide" chapterName={chapters[chapterNum]} chapterNum={chapterNum+1} description={description[chapterNum]}/>
      </div>
    );
};

export default Fvg10;

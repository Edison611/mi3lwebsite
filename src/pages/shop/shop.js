import DonationForm from "./DonationForm";

const OnlineCourses = () => {
    return (
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-6xl font-bold text-center mb-5">Online Shop (PAYMENTS DO NOT WORK YET)</h1>
        <p className="text-lg leading-relaxed">We offer many Pet Products as well as VEX Drone parts found below: (Please give it a few seconds to load)</p>
        <DonationForm />
      </div>
    );
  };
  export default OnlineCourses;
import DonationForm from "./DonationForm";

const Donation = () => {
    return (
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-6xl font-bold text-center mb-5">Donate Now! </h1>
        <p className="text-lg leading-relaxed">(Please give it a few seconds to load), Any Issues: Please email mi3lschool@gmail.com</p>
        <DonationForm />
      </div>
    );
  };
  export default Donation;
import volunteerImg from '../images/volunteer.jpg';

const Volunteer = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-6xl font-bold text-center mb-8">Volunteer with Us</h1>
      <img
        src={volunteerImg}
        alt="Volunteer"
        className="w-full max-w-xl mx-auto rounded-lg mb-8"
      />
      <p className="text-lg leading-relaxed">
        We welcome volunteers to join our mission! If you are interested in helping out, please contact us at:
      </p>
      <ul className="mt-5">
        <li className="text-lg leading-relaxed">Email: mi3lschool@gmail.com</li>
        <li className="text-lg leading-relaxed">Phone: 416-523-5965</li>
      </ul>
    </div>
  );
};
export default Volunteer;
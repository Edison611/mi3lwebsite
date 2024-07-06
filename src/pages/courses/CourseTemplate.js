import React from 'react';
const CourseTemplate = ({ title, description, content, price }) => {
  return (
    <div className="mt-5">
      <div className="text-3xl text-center font-bold mb-5">{title} Course Schedule</div>
      <div className='text-lg mx-10 mb-5'>{description}<a href="https://docs.google.com/forms/d/e/1FAIpQLScmH8xrI2KK1v63tkxyUTEIAAo_vJDiE67sYw_ijRq2J8WLew/viewform">form</a></div>
      <table className="table-auto mx-auto mt-5 bg-gray-100 border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 p-3">Date</th>
            <th className="border border-gray-300 p-3">Content Covered</th>
            <th className="border border-gray-300 p-3">Teacher(s)</th>
          </tr>
        </thead>
        <tbody>
          {content &&
            content.map((item, index) => (
              <tr key={index} className="bg-white">
                <td className="border border-gray-300 p-3">{item.date}</td>
                <td className="border border-gray-300 p-3">{item.desc}</td>
                <td className="border border-gray-300 p-3">{item.teacher}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="text-3xl text-center font-bold mt-10"> Pricing </div>
      <table></table>
    </div>
  );
};

export default CourseTemplate;

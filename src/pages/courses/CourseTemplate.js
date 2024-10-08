import React from 'react';
const CourseTemplate = ({ title, description, content, link }) => {
  return (
    <div className="mt-5">
      <div className="text-3xl text-center font-bold mb-5">{title}</div>
      <div className='text-lg mx-10 mb-5'>{description}</div>
      <div className='text-center'>
      <button className='button-2' onClick={() => window.location.href = link} >Sign Up</button>
      </div>
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
                <td className="border border-gray-300 p-3">{item.date.slice(0,10)}</td>
                <td className="border border-gray-300 p-3">{item.description}</td>
                <td className="border border-gray-300 p-3">{item.teachers}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="text-3xl text-center font-bold mt-10"> Pricing </div>
      <table className="table-auto mx-auto mt-5 bg-gray-100 border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 p-3">Total Price</th>
            <th className="border border-gray-300 p-3">Price for One Class</th>
            <th className="border border-gray-300 p-3">Total Number of Classes</th>
          </tr>
        </thead>
        <tbody>
          {content &&
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 text-center">${content[0].price}</td>
                <td className="border border-gray-300 p-3 text-center">${content[0].price_for_lesson}</td>
                <td className="border border-gray-300 p-3 text-center">{content.length}</td>
              </tr>
            }
        </tbody>
      </table>
    </div>
  );
};

export default CourseTemplate;

import React from 'react';
const AdminCourseTemplate = ({ title, description, content, link }) => {
    function deleteLessonConfirm(id) {
        if (window.confirm("Are you sure you want to delete this lesson?")) {
            deleteLesson(id);
        }
    }
    function deleteLesson(id) {
        fetch("https://mi3lwebsite-api.vercel.app/delete-lesson", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({lesson_id: id}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);

            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }
    console.log("content", content)
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
            <th className="border border-gray-300 p-3">Lesson Id</th>
            <th className="border border-gray-300 p-3">Date</th>
            <th className="border border-gray-300 p-3">Content Covered</th>
            <th className="border border-gray-300 p-3">Teacher(s)</th>
            <th className="border border-gray-300 p-3">Delete Lesson?</th>
          </tr>
        </thead>
        <tbody>
          {content &&
            content.map((item, index) => (
              <tr key={index} className="bg-white">
                <td className="border border-gray-300 p-3">{item.id}</td>
                <td className="border border-gray-300 p-3">{item.date.slice(0,10)}</td>
                <td className="border border-gray-300 p-3">{item.description}</td>
                <td className="border border-gray-300 p-3">{item.teachers}</td>
                <td onClick={() => deleteLessonConfirm(item.id)} className="hover:text-red-700 border border-gray-300 p-3">🗑️</td>
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

export default AdminCourseTemplate;

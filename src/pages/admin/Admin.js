import { useNavigate } from "react-router-dom";
const Admin = () => {
    const navigate = useNavigate();
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-6xl font-bold text-center mb-8">Admin  </h1>
        <button onClick={() => navigate('/admin/newblog')}>New Blog Post</button>
        <button onClick={() => navigate('/admin/createcourse')}>Add Summer 2024 Courses</button>
        <p className="text-lg leading-relaxed"></p>

      </div>
    );
  };
  export default Admin;
import { useNavigate } from "react-router-dom";

const Admin = () => {

    const navigate = useNavigate();
    return (
      <div>
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-6xl font-bold text-center mb-8">Admin</h1>
            <button className="button-2" onClick={() => navigate('/admin/user-roles')}>Edit User Roles</button>
            <button className="button-2" onClick={() => navigate('/admin/createcourse')}>Add Courses/Lessons</button>
            <p className="text-lg leading-relaxed"></p>
          </div>
      </div>
    );
  };
  export default Admin;
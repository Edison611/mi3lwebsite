
import { useState, useEffect } from "react";

const UserItem = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(user.admin);
    const [isMember, setIsMember] = useState(user.member);

    const updateTable = (m, a) => {
        fetch("https://mi3lwebsite-api.vercel.app/set-user-role", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.REACT_APP_MI3L_API_KEY}`,
            },
            body: JSON.stringify({ member: m, admin: a, id: user.id })
        })
        }

    const onMemberToggle = () => {
        setIsMember(prev => !prev);
        updateTable(!isMember, isAdmin);
    };

    const onAdminToggle = () => {
        if (isAdmin === true) {
            alert("You cannot remove admin privileges from other admins");
        }
        else {
            const isConfirmed = window.confirm("Are you sure you want to proceed? You cannot undo this action.");
            if (isConfirmed) {
                setIsAdmin(true);
                updateTable(isMember, true);
            } else {
                console.log("Cancelled!");
            }
        }
    };

    return (
        <div className="border border-gray-300 p-3 my-2 text-center">
           <div 
                onClick={() => setIsOpen(!isOpen)} 
                className="cursor-pointer grid"
                style={{ gridTemplateColumns: '80px 150px 500px 100px 100px 50px' }} // Custom widths for columns
            >
                <span className="border-r border-gray-300 p-3">{user.id}</span>
                <span className="border-r border-gray-300 p-3">{user.name}</span>
                <span className="border-r border-gray-300 p-3">{user.email}</span>
                <div className="flex items-center justify-center border-r border-gray-300 p-3">
                    <label 
                        className="relative inline-flex items-center cursor-pointer"
                        onClick={e => e.stopPropagation()}
                    >
                        <input 
                            type="checkbox" 
                            checked={isMember} 
                            onChange={onMemberToggle}
                            className="sr-only peer"
                        />
                        <div 
                            className={`group border border-gray-600 shadow-inner shadow-gray-900 peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500 rounded-full outline-none duration-300 after:duration-300 w-16 h-8 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:bg-gray-50 after:border after:border-gray-600 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0 peer-checked:bg-gradient-to-tr peer-checked:from-green-100 peer-checked:via-lime-400 peer-checked:to-lime-500`}
                        >
                        </div>
                    </label>
                </div>
                <div className="flex items-center justify-center border-r border-gray-300 p-3">
                    <label 
                        className="relative inline-flex items-center cursor-pointer"
                        onClick={e => e.stopPropagation()}
                    >
                        <input 
                            type="checkbox" 
                            checked={isAdmin} 
                            onChange={onAdminToggle}
                            className="sr-only peer"
                        />
                        <div 
                            className={`group border border-gray-600 shadow-inner shadow-gray-900 peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500 rounded-full outline-none duration-300 after:duration-300 w-16 h-8 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:bg-gray-50 after:border after:border-gray-600 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0 peer-checked:bg-gradient-to-tr peer-checked:from-green-100 peer-checked:via-lime-400 peer-checked:to-lime-500`}
                        >
                        </div>
                    </label>
                </div>
                <span className="p-3">-</span>
            </div>
        </div>
    );
};



const Userroles = () => {

    const [users, setUsers] = useState([]);

    useEffect (() => {
        fetch("https://mi3lwebsite-api.vercel.app/get-users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.REACT_APP_MI3L_API_KEY}`,

            }
        })
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }, [])
    
    return (
      <div className=" mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Modify User Roles </h1>
        <div className="border border-gray-300 p-3 my-2 font-bold text-xl text-center">
            <div 
                className="cursor-pointer grid"
                style={{ gridTemplateColumns: '80px 150px 500px 100px 100px 200px' }} // Custom widths for columns
            >
                <span className="border-r border-gray-300 p-3">id</span>
                <span className="border-r border-gray-300 p-3">Name</span>
                <span className="border-r border-gray-300 p-3">Email</span>
                <span className="border-r border-gray-300 p-3">Member</span>
                <span className="border-r border-gray-300 p-3">Admin</span>
                <span className="p-3 text-md"></span>
            </div>
        </div>
    <hr></hr>
    {users &&
        users.map((user, index) => (
        <UserItem user={user}/>
    ))}
    </div>
  );
}

export default Userroles;
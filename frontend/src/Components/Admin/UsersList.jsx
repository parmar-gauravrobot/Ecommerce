import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const UsersList = () => {
  const [users, setUsers] = useState([]);  // Store users data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState("");  // Error state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage

        if (!token) {
          setError("You must be logged in to view users.");
          setLoading(false);
          return;
        }

        // Send the token in the Authorization header
        const response = await axios.get("http://localhost:3000/getAllUsers", {
          headers: {
            Authorization: `Bearer ${token}`  // Pass the token here
          },
        });

        setUsers(response.data.users);  // Set users to state
        setLoading(false);  // Turn off loading state
      } catch (err) {
        console.error(err);
        if (err.response && err.response.status === 401) {
          setError("Unauthorized - Token might be expired or invalid.");
        } else {
          setError("Error fetching users.");
        }
        setLoading(false);  // Turn off loading state
      }
    };

    fetchUsers();
  }, []);  // Only run on component mount

  if (loading) {
    return <div className="container my-5 text-center">Loading users...</div>;
  }

  if (error) {
    return <div className="container my-5 text-center text-danger">{error}</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">User List</h2>
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">Image</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user._id}>
              <td>{index+1}</td>
              <td>
                <img
                  src={user.image}
                  style={{ height: "40px", width: "40px", borderRadius: "100%" }}
                  alt=""
                />
              </td>
              
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;

// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// const UsersList = ({ setTotalUsers }) => {
//   const [users, setUsers] = useState([]);  // Store users data
//   const [loading, setLoading] = useState(true);  // Loading state
//   const [error, setError] = useState("");  // Error state

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Get token from localStorage

//         if (!token) {
//           setError("You must be logged in to view users.");
//           setLoading(false);
//           return;
//         }

//         // Send the token in the Authorization header
//         const response = await axios.get("http://localhost:3000/getAllUsers", {
//           headers: {
//             Authorization: `Bearer ${token}`  // Pass the token here
//           },
//         });

//         setUsers(response.data.users);  // Set users to state
//         setTotalUsers(response.data.users.length); // Pass the total users count to parent
//         setLoading(false);  // Turn off loading state
//       } catch (err) {
//         console.error(err);
//         if (err.response && err.response.status === 401) {
//           setError("Unauthorized - Token might be expired or invalid.");
//         } else {
//           setError("Error fetching users.");
//         }
//         setLoading(false);  // Turn off loading state
//       }
//     };

//     fetchUsers();
//   }, [setTotalUsers]);  // Only run on component mount

//   if (loading) {
//     return <div className="container my-5 text-center">Loading users...</div>;
//   }

//   if (error) {
//     return <div className="container my-5 text-center text-danger">{error}</div>;
//   }

//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-4">User List</h2>
//       <table className="table table-bordered table-striped table-hover">
//         <thead className="table-dark">
//           <tr>
//             <th scope="col">Sr. No.</th>
//             <th scope="col">Image</th>
//             <th scope="col">ID</th>
//             <th scope="col">Name</th>
//             <th scope="col">User Name</th>
//             <th scope="col">Email</th>
//             <th scope="col">Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={user._id}>
//               <td>{index + 1}</td>
//               <td>
//                 <img
//                   src={user.image}
//                   style={{ height: "40px", width: "40px", borderRadius: "100%" }}
//                   alt=""
//                 />
//               </td>
//               <td>{user._id}</td>
//               <td>{user.name}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.mobile}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UsersList;


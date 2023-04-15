import React,{useState} from 'react'
// import {Link, useNavigate } from 'react-router-dom';
import ColorPicker from '../components/ColorPicker';



 
const Home=()=>{
  // navigate=useNavigate()
  const [tableData, setTableData] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmit = (event) => {
     event.preventDefault(); 
    const formData = new FormData(event.target);
     const newRow = { name: formData.get("name"), 
     date: formData.get("date"),
      srNo: formData.get("srNo"),
      email: formData.get("email"),
       gender: formData.get("gender"),
       };
        setTableData([...tableData, newRow]); event.target.reset(); 
      };
      const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete this row?")) {
         setTableData(tableData.filter((_, i) => i !== index));
         };
        }
      //   const handleLogout = () => {
      //     setIsLoggedIn(true);
      // navigate("login");
          
      //     };
         

         return (
          <div> 
<ColorPicker/>

          <div>
          <form onSubmit={handleSubmit}>
          <label>
         Name:
          <input type="text" name="name" />
          </label>
          <label>
           Date:
          <input type="date" name="date" />
          </label>
          <label>
           Sr No:
          <input type="text" name="srNo" />
          </label>
          <label>
        Email:
          <input type="email" name="email" />
          </label>
          <label>
         Gender:
          <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          </select>
          </label>
          <button type="submit">Add Row</button>
          </form>
          <table>
          <thead>
          <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Sr No</th>
          <th>Email</th>
          <th>Gender</th>
          <th></th>
          </tr>
          </thead>
          <tbody>
          {tableData.map((row, index) => (
          <tr key={index}>
          <td>{row.name}</td>
          <td>{row.date}</td>
          <td>{row.srNo}</td>
          <td>{row.email}</td>
          <td>{row.gender}</td>
          <td>
          <button onClick={() => handleDelete(index)}>Delete</button>
         
          </td>
          </tr>
           ))}
          </tbody>
          </table>
          </div>
          {/* {isLoggedIn && ( <button onClick={handleLogout}>Logout</button> )}
          <Link to={"/login"} style={{ textDecoration: "none" }}>

            Login
          </Link> */}
    
          </div>
          );
}

export default Home

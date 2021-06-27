import React,{useState,useEffect}from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

const Home = () => {

    const[users,setUser]=useState([]);

    const loadUsers = async() =>{
        const response = await axios.get("http://localhost:3003/users");
        setUser(response.data);
        console.log(response);
    }

    useEffect(()=>{
        loadUsers();
    },[]);

    
    
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };

    return (
        <>
            
           <div className = "container mt-5">
            <table className = "table border shadow">
                <thead className = "thead-dark">
                    <tr>
                        <th scope = "col">S.No</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((currEle,index)=>{
                            return(
                                    <tr>
                                        <th scope = "row">{index+1}</th>
                                        <td>{currEle.name}</td>
                                        <td>{currEle.username}</td>
                                        <td>{currEle.email}</td>
                                        <td>
                                            <Link className="btn btn-primary mr-2" to={`/users/${currEle.id}`}>
                                                View
                                            </Link>
                                            <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${currEle.id}`}>
                                                Edit
                                            </Link>
                                            <Link className="btn btn-danger" onClick={() => deleteUser(currEle.id)}>
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Home

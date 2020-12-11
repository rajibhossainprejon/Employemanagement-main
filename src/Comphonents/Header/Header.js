import React, { useEffect , useState} from 'react';
import './Header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Header = () => {
    const [users, setUsers]=useState([]);

    useEffect(()=> {
    setUsers([

        {text: "Rajib", id: 526},
        {text: "Shanto", id: 544},
        {text: "Mahbub", id: 517},
        {text: "Siam", id: 552},
    ])
} , [])

    
    return (
        <div className="container">
          
        
          <h1 className="btn btn-primary btn-lg btn-block" id="employeelist">Employees List</h1>
            
         <nav>
             <a  className=" btn btn-warning " href="/AddEmployee">AddEmployee</a>
         </nav>
         <div className="mt-3">
             
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                            { 
                                  users.map(user => (
                                      <tr key={user.id}>
<td>
    {user.text}
</td>
<td>
    <Link>Update</Link>
</td>


                                      </tr>
                                  )
                                    )
                                    
                                }
                        </tbody>
                </table>
            </div>
            </div>
        
    );
};

export default Header;
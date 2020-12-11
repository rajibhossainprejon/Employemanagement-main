import React from 'react';
import "./mainheader.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Mainheader = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="/Home">Home</a>
                <a href="/AddEmployee">Add Employee</a>
            </nav>
        </div>
    );
};

export default Mainheader;
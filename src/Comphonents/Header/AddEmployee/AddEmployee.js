import React from 'react';
import './addemployee.css';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AddEmployee = () => {

    const {register, handleSubmit}=useForm();
    const history=useHistory();
    
    const onSubmit=handleSubmit((data)=>{
        alert(JSON.stringify(data));
        history.push("/");

    })
    
    return (
        <div  className="container">
        <div className="mt-3">
            <h3>Add Information</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Name</label>
                    <input ref={register} className="form-control"  type="text" name="text" id="text"/>
                </div>
            
        <div className="form-group">
            
          <button className="btn btn-success">Save</button>
          <button className="btn btn-danger">Cancel</button>
        </div>
        
          </form>
    </div>
    </div>
    
    );
};

export default AddEmployee;
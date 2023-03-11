import React, {useState} from "react";
import "./LogIN.css"
import {Link} from "react-router-dom";

const LogIN = () => {
    const [username, setUsername] = useState("");
    const [user, setuser] = useState({
        password:'',
        username:''
    });
    const [errors, seterrors] = useState({
        errorpassword:'',
        errorusername:''
    })
    function handelInput(e) {
        setuser({ ...user, [e.target.name]: e.target.value })
        if (e.target.name == 'userName') {
            seterrors({ ...errors, errorusername: (e.target.value.length == 0) ? 'username is required' : (e.target.value.includes(' ') ? 'username isnot contain any spaces' : '') })
        } else if (e.target.name == 'password') {
            seterrors({ ...errors, errorpassword: (e.target.value.length == 0) ? 'password is required' : (e.target.value.length < 8) ? 'password must > 8 charctars' : ((/[A-Z]/.test(e.target.value) ?
                    (/[a-z]/.test(e.target.value) ?
                        (/[@#$%?*&]/.test(e.target.value) ? "" : "password AAAggj@") : "password AAAggj@") : "password AAAggj@"))
            })
        }
    }
    return (
        <>
            <div className="wrapper">
                <div className="logo">
                    <img
                        src="data:image/jpeg;base64,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"
                        alt=""/>
                </div>
                <div className="text-center mt-4 name">
                    Log In

                    <p className="mt-3">{username}</p>
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input onChange={(e) => handelInput(e)} type="text" name="userName" id="userName" placeholder="Username"/>
                    </div>
                    <p className='text-danger'>
                        {errors.errorusername}
                        </p> 
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" onChange={(e) => handelInput(e)} name="password" id="pwd" placeholder="Password"/>
                    </div>
                    <p className='text-danger'>
                        {errors.errorpassword}
                        </p> 
                    <button className="btn mt-3">Login</button>
                </form>
                <div className="text-center fs-6">
                    <Link to="#">Forget password?</Link> or <Link href="#">Sign up</Link>
                </div>
            </div>
        </>
    );
}

export default LogIN;
 
    
      
    
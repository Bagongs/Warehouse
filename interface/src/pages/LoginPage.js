import React, {useState} from "react";
import {loginUser} from '../axios/userAxios'
import { Link } from "react-router-dom";

const LoginPage = (props) => {
    const {loginHandlerCb} = props
    const [formLogin, setFormLogin] = useState({
        email:'',
        password:''
    })

    // const navigate = useNavigate() //agar tidak perlu refresh untuk ke home

    // const loginUser = async (formLogin, loginHandlerCb) => {
    //     try{
    //         console.log('up')
    //         let result = await axios({
    //             method:'POST',
    //             url:'http://localhost:3000/api/users/login',
    //             data:formLogin
    //         })
    //         // console.log(result.data)
    //         const access_token = result.data.access_token
    //         localStorage.setItem('access_token', access_token)
    //         // navigate('/')
    //         loginHandlerCb(true)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }

    const submitLoginHandler = () => {
        loginUser(formLogin, loginHandlerCb)
        // console.log(formLogin)

    }

    return(
        <>
            <div className="login-page">
                <div className="login-component">
                    {/* <h1>Login Page</h1> */}
                    <div className="my-3 w-100 text-center">
                        <h3>Login</h3>
                    </div>
                    <div className="w-100">
                    
                        <div className="mb-3">
                            <label /*for="exampleInputEmail1" penyebab refresh otomatis*/ className="form-label">Email address</label>
                            <input 
                            onChange={(e) => setFormLogin({...formLogin, email: e.target.value})}
                            type="email" className="form-control" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label /*for="exampleInputPassword1"*/ className="form-label">Password</label>
                            <input 
                            onChange={(e) => setFormLogin({...formLogin, password: e.target.value})}
                            type="password" className="form-control" />
                        </div>
                        {/* <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> */}
                        <button onClick={() => submitLoginHandler()} className="btn btn-primary">Login</button>
                        
                        <p className="text-center">
                            Don't have Account?
                            <Link
                                className="link-primary text-decoration-none ms-2"
                                to="/register"
                            >Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
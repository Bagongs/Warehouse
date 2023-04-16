import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/users"

const loginUser = async (user, loginHandlerCb) => {
    if (user.email === "") {
        Swal.fire("Login", "Email can not be empty.", "error");
    } else if (user.password === "") {
        Swal.fire("Login", "Password can not be empty.", "error");
    } else {
        try{
            console.log('up')
            let result = await axios({
                method:'POST',
                url:`${URL}/login`,
                data:user
            })

            Swal.fire("Login", result.data.message, "success");
            const access_token = result.data.access_token
            localStorage.setItem('access_token', access_token)
            console.log(result.data)
            loginHandlerCb(true)
            
            
        }
        catch(err){
            Swal.fire("Login", "Password or Email is incorrect!", "error")
            console.log(err)
        }
    }
    
}

const getAllUser = async (cb) => {
    try{
        let result = await axios({
            method:'GET',
            url: URL
        })
        cb(result.data)
    }
    catch(err){
        console.log(err)
    }
}

export {
    loginUser, getAllUser
}
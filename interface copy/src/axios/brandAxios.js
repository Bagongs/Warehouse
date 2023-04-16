import axios from "axios";

const URL = "http://localhost:3000/api/brands"

const getAllBrand = async (cb) => {
    try{
        let result = await axios({
            method:'GET',
            url: URL
        })
        cb(result.data)
        console.log("masuk brand")
        console.log(result.data)
    }
    catch(err){
        console.log(err)
    }
}

export {
    getAllBrand
}
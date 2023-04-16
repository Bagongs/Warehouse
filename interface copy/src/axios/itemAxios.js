import axios from "axios";

const URL = "http://localhost:3000/api/items"

const getAllItem = async (cb) => {
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
    getAllItem
}
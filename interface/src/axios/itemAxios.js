import axios from "axios";
import Swal from "sweetalert2";

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

const addItem = async (response) => {
    try {
      // let result = await axios({
      //   method: "POST",
      //   url: URL,
      //   data: response,
      // });
      const access_token = localStorage.getItem('access_token')
      let result = await axios.post(URL, response, {
        headers:{
          "Content-Type" : "multipart/form-data",
          access_token
        }
      })
      Swal.fire("Add Item", "Item Has Been Adeed", "success");
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

const updateItem = async (id, response) => {
    try {
      // let result = await axios({
      //   method: "PUT",
      //   url: URL + "/" + id,
      //   data: response,
      // });
      let result = await axios.put(URL+"/"+id, response,{
        headers:{
          "Content-Type":"multipart/form-data",
        }
      })
      Swal.fire("Edit Item" + id, "Item Has Been Edited", "success");
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

const deleteItem = async (id) => {
    try {
      let result = await axios({
        method: "DELETE",
        url: URL + "/" + id,
      });
  
      Swal.fire("Delete Item" + id, "Item Has Been Deleted", "success");
  
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

const getDetail = async (id, response) => {
    try {
      let result = await axios({
        method: "GET",
        url: URL + "/detail/" + id,
      });
      response(result.data);
    } catch (err) {
      console.log(err);
    }
  };

export {
    getAllItem, addItem, updateItem, deleteItem, getDetail
}
import React, { useState, useEffect } from 'react'
import { addItem } from "../axios/itemAxios";
import { useNavigate } from "react-router-dom";

const AddItemPage = () => {
    const [form, setForm] = useState({
        name: "",
        receiving: "",
        category: "",
        userId: 0,
        brandId: 0,
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [file, setFile] =useState(null)

    const navigation = useNavigate()

    const submitHandler = (event) => {
        event.preventDefault()
        const data = new FormData()
        data.append("name", form.name)
        data.append("image", file)
        data.append("receiving", form.receiving)
        data.append("category", form.category)
        data.append("userId", form.userId)
        data.append("brandId", form.brandId)

        try{
            console.log(data)
            addItem(data)
            setIsFormSubmitted(true)
        }
        catch(err){
            console.log(err)
        }
        // addItem(form)
        // navigation('/')
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    return (
        <>
            {isFormSubmitted? (
                navigation('/')
            ):(
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        className="form-control"
                        name='name'
                        value={form.name} 
                        onChange={handleInputChange}            
                    ></input>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Image:</label>
                        <input 
                            onChange={handleFileChange}
                            type="file"
                            className="form-control"                 
                        ></input>
                </div>
                <div class="mb-3">
                    <label class="form-label" htmlFor="price">Receiving:</label>
                    <input 
                        type="date"
                        className="form-control"
                        value={form.receiving}
                        name='receiving'
                        // onChange={(e) => setForm({...form, price: e.target.value})}
                        onChange={handleInputChange}                  
                    ></input>
                </div>
                <div class="mb-3">
                    <label class="form-label" htmlFor="category">Category:</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={form.category}
                        name='category'
                        // onChange={(e) => setForm({...form, category: e.target.value})}
                        onChange={handleInputChange}               
                    ></input>
                </div>
                <div class="mb-3">
                    <label class="form-label" htmlFor="userId">userId:</label>
                    <input 
                        type="number"
                        className="form-control"
                        value={form.userId}
                        name='userId'
                        // onChange={(e) => setForm({...form, userId: e.target.value})}
                        onChange={handleInputChange}            
                    ></input>
                </div>
                <div class="mb-3">
                    <label class="form-label" htmlFor="brandId">brandId:</label>
                    <input 
                        type="number"
                        className="form-control"
                        value={form.brandId}
                        name='brandId'
                        // onChange={(e) => setForm({...form, brandId: e.target.value})}
                        onChange={handleInputChange}            
                    ></input>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-block btn-primary">Submit</button>
                </div>                          
                </form>

            )
            }
        </>
    );
};

export default AddItemPage;


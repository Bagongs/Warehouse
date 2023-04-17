import React, {useState,useEffect} from 'react'
import { updateBrand, getDetail } from "../axios/brandAxios";
import { useNavigate, useParams } from "react-router-dom";

const EditBrandPage = () => {
    const [form, setform] = useState({
        name: "",
    });

    const navigation = useNavigate();
    const params = useParams();
    const { id } = params;

    const detail = () => {
        getDetail(+id, (response) => {
            setform({
                name: response.name,
            });
            console.log(response.name);
        });

    };

    useEffect(() => {
        detail();
    }, []);

    const submitHandler = () => {
        console.log(form);
        updateBrand(+id, form);
        navigation("/");
    };

    return (
        <>
            <div className='bg-dark bg-opacity-10'>
                <h4 className=' bg-dark text-white text-center'>Edit Brand</h4>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <div className="bg-light p-3 rounded">
                                <form>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Name</label>
                                        <input
                                            value={form.name}
                                            onChange={(e) => setform({ ...form, name: e.target.value })}
                                            type="text" className="form-control" id="name" />
                                    </div>
                                    <button
                                        onClick={() => submitHandler()}
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Edit Brand
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditBrandPage
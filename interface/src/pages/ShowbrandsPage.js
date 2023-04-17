import React from "react";
import { Link } from "react-router-dom";
import { deleteBrand } from "../axios/brandAxios";

const ProfileBrand = (props) => {
    const { brands } = props
    const deleteHandler = (id) => {
        deleteBrand(id);
    };
    return (
        <><div>
            <table className='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map((brand) => {
                        const { id, name } = brand;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>
                                    <div className="btn">
                                        <Link
                                            to={`/brands/edit/${id}`}
                                            className="btn btn-sm btn-warning mt-2 mx-2"
                                        >
                                            Edit
                                        </Link>
                                        <br></br>
                                        <button
                                            type="button"
                                            id="delete"
                                            name="delete"
                                            className="btn btm-sm btn-danger mt-2 mx-2"
                                            onClick={() => deleteHandler(id)}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        );
                    })}
                </tbody>

            </table>
        </div>
            {/* <div>
            <button
                onClick={() => getUserHandler()}></button>
        </div> */}
        </>
    )
}

export default ProfileBrand
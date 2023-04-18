import React from "react";
import { deleteUser } from "../axios/userAxios";
import { Link } from "react-router-dom";

const ProfileUser = (props) => {
    const { users } = props
    const deleteHandler = (id) => {
        deleteUser(id);
    };
    return (
        <><div>
            <table className='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Photo</th>
                        <th>Status</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        const { id, username, email, photo, status } = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>
                                    <img src={photo} width={"20%"}></img>
                                </td>
                                <td>{status}</td>
                                <td>
                                    {/* <button className="btn">
                                        <Link
                                        to={`/user/edit/${id}`}
                                        className="btn btn-sm btn-warning mt-2 mx-2">
                                            Edit
                                        </Link>
                                    </button>    */}
                                    <button
                                    type="button"
                                    id="delete"
                                    name="delete"
                                    className="btn btn-danger mt-3 mx-3"
                                    onClick={() => deleteHandler(id)}
                                >
                                    Delete
                                </button></td>
                            </tr>

                        );
                    })}
                </tbody>
                <br></br>
            </table>
        </div>
            {/* <div>
            <button
                onClick={() => getUserHandler()}></button>
        </div> */}
        </>
    )
}

export default ProfileUser
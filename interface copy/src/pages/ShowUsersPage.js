import React from "react";

const ProfileUser = (props) => {
    const {users} = props
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
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        const { id, username, email, password, photo, status } = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>
                                    <img src={photo} width={"20%"}></img>
                                </td>
                                <td>{status}</td>
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

export default ProfileUser
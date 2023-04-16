import React from "react";

const ProfileItem = (props) => {
    const {items} = props
    return (
            <><div>
            <table className='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Receiving</th>
                        <th>Category</th>
                        <th>UserId</th>
                        <th>BrandId</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        const { id, name, image, receiving, category, userId, brandId} = item;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>
                                    <img src={image} width={"20%"}></img>
                                </td>
                                <td>{receiving}</td>
                                <td>{category}</td>
                                <td>{userId}</td>
                                <td>{brandId}</td>
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

export default ProfileItem
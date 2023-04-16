import React from "react";

const ProfileBrand = (props) => {
    const {brands} = props
    return (
            <><div>
            <table className='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map((brand) => {
                        const {id, name} = brand;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
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
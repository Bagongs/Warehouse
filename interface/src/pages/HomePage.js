import React, { useState, useEffect } from "react";
import { NavBarMenu } from '../components'
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllItem,getDetail } from "../axios/itemAxios";

const HomePage = (props) => {
    const [activePage, setActivePage] = useState(1);
    const [item, setItem] = useState([]);
    const {
        loginStatus,
        loginHandlerCb,
        getUserHandler,
        getItemHandler,
        getBrandHandler } = props;
    const itemsPerPage = 3;

    useEffect(() => {
        getDetail(
          (result) =>
            setItem({
              id: result.id,
              name: result.name,
            }),
        );})

    // Calculate total number of pages based on number of items per page
    const totalPages = Math.ceil(item.length / itemsPerPage);
    // Filter albums to display based on current active page
    const filteredDatas = item.slice(
        (activePage - 1) * itemsPerPage,
        activePage * itemsPerPage
    );
    return (
        <>
            <div className="home-page">
                <NavBarMenu
                    loginStatus={loginStatus}
                    loginHandlerCb={loginHandlerCb}
                    getUserHandler={getUserHandler}
                    getItemHandler={getItemHandler}
                    getBrandHandler={getBrandHandler}></NavBarMenu>
                <h1 className="text-center text-success">Dashboard Warehouse</h1>
                <hr /> 
                <div className="album py-5">
                    <div className="container ">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {filteredDatas.map((umkm, i) => {
                            <div className="col" key={item.id}>
                                <div className="card shadow-sm rounded">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{ width: "100%", height: 225 }}
                                    />

                                    <div className="card-body">
                                        <h3 className="card-name"> {item.name}</h3>
                                        <p className="card-text overflow-hidden">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        })},
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <Link
                        to={`/${item.id}`}
                        className="btn btn-sm btn-outline-secondary"
                    >


                        <div className="card-body">
                            <h3 className="card-name"> {item.name}</h3>
                            <p className="card-text overflow-hidden">
                                {item.description}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <Link
                                        to={`/item/show`}
                                        className="btn btn-sm btn-outline-secondary"
                                    >
                                        View
                                    </Link>
                                </div>
                                <div className="mt-3 container d-flex justify-content-center">
                                    <Pagination>
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <Pagination.Item
                                                key={page}
                                                active={page === activePage}
                                                onClick={() => setActivePage(page)}
                                            >
                                                {page}
                                            </Pagination.Item>
                                        ))}
                                    </Pagination>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            </>
            );
};

export default HomePage

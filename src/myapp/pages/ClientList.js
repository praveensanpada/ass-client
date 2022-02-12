import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import "./Style.css"

const ClientList = () => {


    const [clientData, setClientData] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8089/api/v1/get-client").then((response) => {
            console.log(response.data.data);
            setClientData(response.data.data)
        })
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">

                    {clientData.map((client) => {
                        return <>
                            <div className="col-sm-4 text-center pad-list">
                                <div className="border-list">
                                    <br/>
                                    <p>Name:- {client.name}</p>
                                    <p>Email:-  {client.email}</p>
                                    <a className="nav-link  products-style" href={"/profile?id=" + client.id}>
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </>
                    })}

                </div>


            </div>
        </>
    );
}

export default ClientList;
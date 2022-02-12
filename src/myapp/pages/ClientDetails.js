import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import "./Style.css"

const ClientDetails = () => {

    function $_GET(q, s) {
        s = (s) ? s : window.location.search;
        var re = new RegExp('&amp;' + q + '=([^&amp;]*)', 'i');
        return (s = s.replace(/^\?/, '&amp;').match(re)) ? s = s[1] : s = '';
    }

    var id = $_GET("id");


    const [clientData, setClientData] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:8089/api/v1/get-client/' + id).then((response) => {
            console.log(response.data.data[0]);
            setClientData(response.data.data[0])
        })
    }, []);


    return (
        <>
            <div className="container text-center">
                <h1>Profile Page</h1>
                <br/><br/>
                <div className='row'>
                    <div className='col-sm-6'>
                        <strong>Name:- </strong> {clientData.name}
                    </div>
                    <div className='col-sm-6'>
                        <strong>Email:- </strong>  {clientData.email}
                    </div>
                </div><br />
                <div className='row'>
                    <div className='col-sm-6'>
                        <strong>Api Key:- </strong> {clientData.api_key}
                    </div>
                    <div className='col-sm-6'>
                        <strong>UUID:- </strong> {clientData.uuid}
                    </div>
                </div>
                <br /><br />
                <div className='row'>
                    <div className='col-sm-4'>
                        <a href={"setting?id=" + clientData.id}>Client Setting</a>
                    </div>
                    <div className='col-sm-4'>
                        <a href={"app-setting?id=" + clientData.id}>App Setting</a>
                    </div>
                    <div className='col-sm-4'>
                        <a href={"web-setting?id=" + clientData.id}>Web Setting</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientDetails;
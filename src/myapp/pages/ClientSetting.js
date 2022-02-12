import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import "./Style.css"

const ClientSetting = () => {

    function $_GET(q, s) {
        s = (s) ? s : window.location.search;
        var re = new RegExp('&amp;' + q + '=([^&amp;]*)', 'i');
        return (s = s.replace(/^\?/, '&amp;').match(re)) ? s = s[1] : s = '';
    }

    var id = $_GET("id");

    const [clientData, setClientData] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:8089/api/v1/get-client-setting/' + id).then((response) => {
            console.log(response.data.data[0]);
            setClientData(response.data.data[0])
        })
    }, []);

    return (
        <>
            <div className="container">
                <h5 className='text-center'>Client Setting</h5>
                <br />
                <form action='#'>
                    <div class="form-group">
                        <label for="product_module">Product Module:</label>
                        <select class="form-control" id="product_module" name="product_module">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br />
                        <label for="order_module">Order Module:</label>
                        <select class="form-control" id="order_module" name="order_module">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br/>
                        <label for="billing_module">Billing Module:</label>
                        <select class="form-control" id="billing_module" name="billing_module">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br />
                        <label for="transport_module">Transport Module:</label>
                        <select class="form-control" id="transport_module" name="transport_module">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br/>
                        <label for="payment_module">Payment Module:</label>
                        <select class="form-control" id="payment_module" name="payment_module">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br />
                    </div>
                    <button type="submit" class="btn btn-primary">Change Client Setting</button>
                </form>
            </div>
        </>
    );
}

export default ClientSetting;
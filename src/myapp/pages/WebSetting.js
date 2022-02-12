import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import "./Style.css"

const WebSetting = () => {

    function $_GET(q, s) {
        s = (s) ? s : window.location.search;
        var re = new RegExp('&amp;' + q + '=([^&amp;]*)', 'i');
        return (s = s.replace(/^\?/, '&amp;').match(re)) ? s = s[1] : s = '';
    }

    var id = $_GET("id");


    const [clientData, setClientData] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:8089/api/v1/get-client-web-setting/' + id).then((response) => {
            console.log(response.data.data[0]);
            setClientData(response.data.data[0])
        })
    }, []);

    return (
        <>
            <div className="container">
                <h5 className='text-center'>Web Setting</h5>
                <br />
                <form action='#'>
                    <div class="form-group">
                        <label for="enable_order_place_sms_notification">Enable Order Place Sms Notification:</label>
                        <select class="form-control" id="enable_order_place_sms_notification" name="enable_order_place_sms_notification">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br />
                        <label for="enable_order_place_email_notification">Enable Order Place Email Notification:</label>
                        <select class="form-control" id="enable_order_place_email_notification" name="enable_order_place_email_notification">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br />
                    </div>
                    <button type="submit" class="btn btn-primary">Change Web Setting</button>
                </form>
            </div>
        </>
    );
}

export default WebSetting;
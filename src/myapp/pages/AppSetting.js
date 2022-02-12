import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import "./Style.css"

const AppSetting = () => {

    function $_GET(q, s) {
        s = (s) ? s : window.location.search;
        var re = new RegExp('&amp;' + q + '=([^&amp;]*)', 'i');
        return (s = s.replace(/^\?/, '&amp;').match(re)) ? s = s[1] : s = '';
    }

    var id = $_GET("id");

    const [clientData, setClientData] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:8089/api/v1/get-client-app-setting/' + id).then((response) => {
            console.log(response.data.data[0]);
            setClientData(response.data.data[0])
        })
    }, []);

    return (
        <>
            <div className="container">
                <h5 className='text-center'>App Setting</h5>
                <br />
                <form action='#'>
                    <div class="form-group">
                        <label for="catalogue_images">Catalogue Images:</label>
                        <select class="form-control" id="catalogue_images" name="catalogue_images">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br />
                        <label for="search_images">Search Images:</label>
                        <select class="form-control" id="search_images" name="search_images">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br/>
                        <label for="category_images">Category Images:</label>
                        <select class="form-control" id="category_images" name="category_images">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br />
                        <label for="prod_desc_image">Prod Desc Image:</label>
                        <select class="form-control" id="prod_desc_image" name="prod_desc_image">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br/>
                        <label for="disable_ordering">Disable Ordering:</label>
                        <select class="form-control" id="disable_ordering" name="disable_ordering">
                            <option value="1">Enable</option>
                            <option value="0">Disable</option>
                        </select>
                        <br />
                    </div>
                    <button type="submit" class="btn btn-primary">Change App Setting</button>
                </form>
            </div>
        </>
    );
}

export default AppSetting;
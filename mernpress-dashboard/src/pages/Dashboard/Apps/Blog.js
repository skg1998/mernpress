import React, { useState, useEffect } from "react";
import axios from 'axios';
import Blog from '../../../containers/Blog/Blog'
import globalStyles from "../../../styles/styles";
import data from '../../../data';

// const BASE_URL = 'https://dummyapi.io/data/api';
// const APP_ID = '60e93f89b39cbf500f16c3a8';

const BlogPage = () => {
    // const [loading, setLoading] = useState(false);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     setLoading(true);
    //     axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
    //         .then(({ data }) => setData(data))
    //         .catch(console.error)
    //         .finally(() => setLoading(false));
    // }, []);

    return (
        <>
            <div>
                <h3 style={globalStyles.navigation}>Application / Blog</h3>
            </div>
            <div>
                {/* {loading && "Loading..."} */}
                <Blog posts={data.blogs} />
            </div>
        </>
    );
};

export default BlogPage;
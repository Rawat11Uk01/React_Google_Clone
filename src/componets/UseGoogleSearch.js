import React from 'react';
import { useState, useEffect } from 'react';
import API_KEY from './Keys';

const CONTEXT_KEY = '877c468654b4e6533';
const UseGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then(res => res.json()).then(result => setData(result))
        }

        fetchData();

    }, [term])

    return { data }

}

export default UseGoogleSearch

// https://www.googleapis.com/customsearch/v1?key=AIzaSyBgwVDiafoUX5w4c1fzx3Xw7ShH5XFy5OI&cx=877c468654b4e6533&q=tesla




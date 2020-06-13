import yelp from '../api/yelp';
import { useState, useEffect } from 'react';

export default () => {
    const [result, setResult] = useState([])

    const handleSearch = async (searchTerm) => {
        try {
            let response = await yelp.get('/search', {
                params: {
                    limit: 30,
                    term: searchTerm,
                    location: 'san jose'
                }
            })

        setResult(response.data.businesses)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        handleSearch('pasta')
    },[]);

    return [handleSearch, result]
}
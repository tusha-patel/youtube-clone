import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/rapidApi';
import Loading from '../loader/Loading';
import { useAuth } from '../context/AuthProvider';
import SearchCard from './SearchCard';
import Sidebar from './Sidebar';

const Search = () => {

    const [results, setResults] = useState();
    const { searchQuery } = useParams();
    const { loading } = useAuth();

    useEffect(() => {
        fetchSearchResults();
    }, [searchQuery]);


    // find searched data
    const fetchSearchResults = () => {
        fetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
            console.log(contents);
            setResults(contents);
        })
    }

    if (loading) return <Loading />
    return (
        <div className="mt-18  ">
            <div className="flex flex-row h-[100%-70px] gap-3">
                <Sidebar />
                <div className=' mx-auto m-w-[80%] ' >
                    {results?.map((result, index) => {
                        if (result.type !== "video") return false
                        return <SearchCard key={index} video={result?.video} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Search
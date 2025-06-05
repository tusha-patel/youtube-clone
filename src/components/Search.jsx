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
                <div className="grow h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
                    <div className=" grid grid-cols-1 gap-2 p-2">
                        {results?.map((item, index) => {
                            if (item?.type !== "video") return false;
                            return <SearchCard key={index} video={item?.video} />;
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Search
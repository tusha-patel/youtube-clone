import { AiOutlineMenu } from "react-icons/ai";
import logo from "/logo.png"
import { HiOutlineBell } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import profile from "/profile.jpg"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseUtils } from "../utils/UtilsContext";
import { IoIosSearch } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = UseUtils();
    const [searchbar, setSearchbar] = useState(false);

    // for search
    const searchQueryHandler = (event) => {
        if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
            navigate(`/search/${searchQuery}`);
            setSearchQuery("");
        }
    }

    // Toggles the sidebar visibility
    const handleSidebar = () => {
        if (window.innerWidth <= 1200) {
            setIsSidebar(!isSidebar);
            setMobileShow(!mobileShow);
        }
        setIsSidebar(!isSidebar)
    }

    // search navbars 
    if (searchbar) {
        return (
            <div className="flex justify-between px-3 sm:px-6 py-3 fixed top-0 left-0 bg-white z-10 w-full  items-center "  >
                <FaArrowLeft onClick={() => setSearchbar(!searchbar)} size={20} />
                <div className="flex grow mx-4 items-center ">
                    <div className=" px-4 sm:px-5 py-2 border shadow rounded-s-full w-[100%] border-gray-100 ">
                        <input type="text" className="outline-none  " placeholder="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} />
                    </div>
                    <button className="px-2  sm:px-3 py-2 rounded-e-full shadow border-gray-100 bg-gray-100 hover:bg-gray-200 cursor-pointer border" onClick={() => searchQueryHandler("searchButton")} ><CiSearch size={24} /></button>
                </div>
                <IoMdMic size={"42px"} className=" hidden sm:block sm:ml-3 border rounded-full border-gray-100 p-2 bg-gray-100 cursor-pointer hover:bg-gray-200 duration-200 " />
            </div>
        )
    }

    return (
        <div className="flex justify-between px-2 sm:px-6 py-3 fixed top-0 left-0 bg-white z-10 w-full  items-center "  >
            <div className="flex items-center space-x-3 sm:space-x-4   ">
                <AiOutlineMenu className="text-xl cursor-pointer" onClick={handleSidebar} />
                <Link to={"/"}>
                    <img src={logo} alt="logo img" className="cursor-pointer w-24 sm:w-28 " />
                </Link>
            </div>
            <div className=" hidden  md:flex items-center w-[35%]  ">
                <div className="px-5 py-2 border shadow rounded-s-full w-full border-gray-100 ">
                    <input type="text" className="outline-none w-full " placeholder="search"
                        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler} />
                </div>
                <button className="px-5 py-2 rounded-e-full shadow border-gray-100 bg-gray-100 hover:bg-gray-200 cursor-pointer border" onClick={() => searchQueryHandler("searchButton")} ><CiSearch size={24} /></button>
                <IoMdMic size={"42px"} className="ml-3 border rounded-full border-gray-100 p-2 bg-gray-100 cursor-pointer hover:bg-gray-200 duration-200 " />
            </div>
            <div className="flex items-center gap-3 sm:gap-5 ">
                <IoIosSearch className="text-2xl md:hidden " onClick={() => setSearchbar(!searchbar)} />
                <RiVideoAddLine className="text-2xl cursor-pointer " />
                <HiOutlineBell className="text-2xl cursor-pointer " />
                <img src={profile} alt="profile img" className="w-7 sm:w-8 rounded-full cursor-pointer " />
            </div>
        </div>
    )
}

export default Navbar
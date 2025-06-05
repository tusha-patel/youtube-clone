import { useState } from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike, AiOutlineMenu } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiRepost, BiSolidFlag, BiVideo } from "react-icons/bi";
import { CiSettings } from 'react-icons/ci';
import { BsQuestionCircle } from 'react-icons/bs';
import { UseUtils } from '../utils/UtilsContext';
import { Link } from 'react-router-dom';
import logo from "/logo.png"

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState("Home");
    const { mobileShow, setMobileShow } = UseUtils();

    // all sidebar items
    const sidebarItems = [
        {
            groupName: null,
            groupItems: [
                { id: 1, name: "Home", icon: <GoHome /> },
                { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
                { id: 3, name: "Subscription", icon: <MdOutlineSubscriptions /> }
            ]
        },
        {
            groupName: "You",
            groupItems: [
                { id: 1, name: "Your Channel", icon: <PiUserSquareThin /> },
                { id: 2, name: "History", icon: <MdHistory /> },
                { id: 3, name: "Playlists", icon: <MdOutlineSubscriptions /> },
                { id: 4, name: "Your Videos", icon: <BiVideo /> },
                { id: 5, name: "Watch later", icon: <MdOutlineWatchLater /> },
                { id: 6, name: "Liked videos", icon: <AiOutlineLike /> },
            ]
        },
        {
            groupName: "Explore",
            groupItems: [
                { id: 1, name: "Trending", icon: <SiTrendmicro /> },
                { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
                { id: 3, name: "Music", icon: <SiYoutubemusic /> },
                { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
                { id: 5, name: "Live", icon: <CgMediaLive /> },
                { id: 6, name: "Gaming", icon: <IoGameControllerOutline /> },
                { id: 7, name: "News", icon: <FaRegNewspaper /> },
                { id: 8, name: "Sport", icon: <TfiCup /> },
                { id: 9, name: "Courses", icon: <SiStylelint /> },
                { id: 10, name: "Fashion & beauty", icon: <PiLightbulbLight /> },
                { id: 11, name: "Padcasts", icon: <MdPodcasts /> },
            ]
        },
        {
            groupName: "More from Youtube",
            groupItems: [
                { id: 1, name: "Youtube Premium", icon: <FaYoutube /> },
                { id: 2, name: "Youtube Studio", icon: <SiYoutubestudio /> },
                { id: 3, name: "Youtube Music", icon: <SiYoutubemusic /> },
                { id: 4, name: "Youtube Kids", icon: <SiYoutubekids /> },
            ]
        },
        {
            groupName: null,
            groupItems: [
                { id: 1, name: "Settings", icon: <CiSettings /> },
                { id: 2, name: "Report history", icon: <BiSolidFlag /> },
                { id: 3, name: "Help", icon: <BsQuestionCircle /> },
                { id: 4, name: "Send feedback", icon: <BiRepost /> },
            ]
        }
    ]

    // // Full-screen dark overlay for mobile sidebar/modal.
    const ModelOverlay = () => {
        return (
            <div className='flex fixed top-0 right-0 bottom-0 left-0 bg-black/40 z-30' onClick={() => setMobileShow(!mobileShow)} ></div>
        )
    }
    return (
        <>
            <div className={` ${mobileShow ? "fixed top-0 bottom-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]  "
                : "hidden h-[calc(100vh-75px)] w-[35%]  xl:w-[15%] "}
                px-3 lg:px-1 xl:px-5  lg:block overflow-y-auto overflow-x-hidden  lg:border-r lg:border-gray-100  `}>
                {/* fot static sidebar logo setup */}
                <div className="flex lg:hidden items-center space-x-3 sm:space-x-4 py-3 px-3 sm:px-5 bg-white fixed top-0 left-0 right-[30%]  sm:right-[70%]   z-10  ">
                    <AiOutlineMenu className="text-xl cursor-pointer" onClick={() => setMobileShow(!mobileShow)} />
                    <img src={logo} alt="logo img" className="cursor-pointer w-24 sm:w-28 bg-white" />
                </div>
                <div className='space-y-1 mt-14 sm:mt-17 lg:mt-0'>
                    {
                        sidebarItems.map((group, index) => (
                            <div key={index} className='space-y-1 mb-4'>
                                {/* Optional Group Title */}
                                {
                                    group.groupName && (
                                        <div className='flex items-center space-x-1'>
                                            <h2 className='font-medium'>{group.groupName}</h2>
                                            {group.groupName === "You" && <FaChevronRight size={12} />}
                                        </div>
                                    )
                                }
                                {/* Menu Items */}
                                {
                                    group.groupItems.map((item, ind) => (
                                        <Link to={"/"}
                                            key={ind}
                                            className={`flex items-center whitespace-nowrap  overflow-ellipsis space-x-5 lg:space-x-2 xl:space-x-6 w-full hover:bg-gray-200 duration-300 group py-2 rounded-xl cursor-pointer px-2 ${activeMenu === item.name ? "bg-gray-200" : ""}`}
                                            onClick={() => setActiveMenu(item.name)}
                                        >
                                            <span className={`text-xl ${group.groupName === "More from Youtube" ? "text-red-600" : ""}`}>{item.icon}</span>
                                            <span className={`${activeMenu === item.name ? "font-medium" : "font-normal"} group-hover:font-medium`}>
                                                {item.name}
                                            </span>
                                        </Link>
                                    ))
                                }
                                <br />
                                <hr className='text-gray-200' />
                            </div>
                        ))
                    }
                </div>
                {/* footer */}
                <div className='text-sm space-y-4 text-gray-600 mt-3 '>
                    <p className='font-medium capitalize cursor-pointer'>About Press Copyright <br /> Contact us Creators Advertise Developers</p>
                    <p className='font-medium capitalize cursor-pointer'>Terms Privacy Policy & Safety How YouTube worksTest new features</p>
                    <a href="#">© 2025 Google LLC</a>
                </div>
                <br />
            </div>
            {/* background backdrop */}
            {mobileShow ? <ModelOverlay /> : null}
        </>
    )
}

export default Sidebar
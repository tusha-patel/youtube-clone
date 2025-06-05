import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import Loading from '../loader/Loading';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/rapidApi';
import ReactPlayer from 'react-player';
import profile from "/profile.jpg"
import { abbreviateNumber } from 'js-abbreviation-number';
import { HiOutlineHandThumbDown, HiOutlineHandThumbUp } from 'react-icons/hi2';
import { PiShareFat } from 'react-icons/pi';
import Button from './Button';
import { TfiDownload } from 'react-icons/tfi';
import { LuBadgeDollarSign } from 'react-icons/lu';
import { IoCutOutline } from 'react-icons/io5';
import moment from 'moment';
import { BiMenuAltLeft } from 'react-icons/bi';
import SuggestedVideo from './SuggestedVideo';

const PlayingVideo = () => {
    const [video, setVideo] = useState();
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const { loading } = useAuth();
    const { id } = useParams();

    // Toogles video details show more description
    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    }

    // fetch video details
    const fetchVideoDetails = () => {
        fetchData(`video/details/?id=${id}`).then((res) => {
            setVideo(res)
        });
    }

    //fetch all related Video
    const fetchRelatedVideo = () => {
        fetchData(`video/related-contents/?id=${id}`).then((res) => {
            setRelatedVideos(res.contents)
        });
    }

    useEffect(() => {
        fetchVideoDetails();
        fetchRelatedVideo();
    }, [id])

    if (loading) return <Loading />
    return (
        <div className='mt-18 flex justify-center flex-row h-[calc(100%-56px)] '>
            <div className=" w-full max-w-[1580px] flex flex-col lg:flex-row py-3 lg:py-6 ">
                <div className="flex flex-col  lg:w-[calc(100%-100px)] xl:w-[100%-400px] lg:h-full mb-10 lg:mb-1 px-4 ">
                    <div className="h-[200px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0  ">
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls height={"100%"} width={"100%"} playing={true} style={{ backgroundColor: "#000000" }} />
                    </div>
                    {/* video details */}
                    <div className="mt-2">
                        <h2 className='font-bold mb-3 text-lg sm:text-xl ' >{video?.title}</h2>
                        <div className="flex justify-between flex-wrap gap-5 sm:gap-3 ">
                            <div className="flex items-center gap-3 justify-between w-full md:w-auto ">
                                <div className="flex items-center gap-3">
                                    <img src={profile} alt="channel profile" className='h-10 w-10 rounded-full' />
                                    <div>
                                        <h3 className='font-medium text-lg leading-5'>{video?.author?.title}</h3>
                                        {`${abbreviateNumber(video?.author?.stats?.subscribers, 2)} subscribes`}
                                    </div>
                                </div>
                                <button className='px-3 py-2 bg-black text-white rounded-2xl'>Subscribe</button>
                            </div>
                            <div className="flex gap-2 sm:gap-4 items-center w-full overflow-x-auto hide-scroll-bar md:w-auto ">
                                <button className='flex items-center px-3 py-2 gap-3 rounded-2xl bg-gray-100 cursor-pointer hover:bg-gray-200 duration-300   '>
                                    <HiOutlineHandThumbUp />
                                    <span className='border-r border-black pe-2' > {`${abbreviateNumber(2)}`}</span>
                                    <HiOutlineHandThumbDown />
                                </button>
                                <Button text={"Share"} icon={<PiShareFat />} />
                                <Button text={"Download"} icon={<TfiDownload />} />
                                <Button text={"Thanks"} icon={<LuBadgeDollarSign />} />
                                <Button text={"Clip"} icon={<IoCutOutline />} />
                            </div>
                        </div>
                    </div>
                    {/* description */}
                    <div className="p-5 rounded-xl bg-gray-200/60 mt-4 lg:mt-10  ">
                        <span className='text-md font-medium pr-3  ' >{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                        <span className='text-md font-medium'>
                            {
                                moment().diff(moment(video?.publishedDateTime), 'months') < 12
                                    ? `${moment().diff(moment(video?.publishedDateTime), 'months')} months ago`
                                    : `${moment().diff(moment(video?.publishedDateTime), 'years')} years ago`
                            }
                        </span>
                        {video?.description && (
                            <div className=''>
                                <p className={`${isExpanded ? "" : "line-clamp-3"} mt-2 transition-all duration-200 `} >
                                    {video?.description}
                                </p>
                                <button className='text-black font-medium cursor-pointer ' onClick={toggleDescription} >
                                    {isExpanded ? "Less" : "More"}
                                </button>
                            </div>
                        )}
                    </div>
                    {/* comment */}
                    <div className="mt-5 flex items-center gap-4 sm:gap-10 ">
                        <h4 className='font-bold text-2xl '>{`${abbreviateNumber(video?.stats?.comments, 2)} Comments`}</h4>
                        <span className='flex gap-2 items-center '>
                            <BiMenuAltLeft size={30} />
                            Sort by
                        </span>
                    </div>
                </div>
                <div className="flex flex-col px-4 py-2 h-[calc(100vh-100px)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px] ">
                    {
                        relatedVideos?.map((item, index) => {
                            if (item.type !== "video") return false;
                            return (
                                <SuggestedVideo key={index} video={item?.video} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PlayingVideo
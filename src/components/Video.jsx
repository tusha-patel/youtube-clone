import { Link } from 'react-router-dom';
import Time from './Time';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';

const Video = ({ video }) => {
    return (
        <>
            <Link to={`/video/${video?.videoId}`}>
                <div className="space-y-3">
                    <div className="h-48 md:h-56 rounded-xl hover:rounded-none duration-200 overflow-hidden relative  ">
                        <img src={video?.thumbnails[0]?.url} className='h-full w-full object-cover ' alt={"video img"} />
                        {video?.lengthSeconds && <Time time={video.lengthSeconds} />}
                    </div>
                    <div className='flex gap-2 items-start '>
                        <div className='flex h-9 w-9 rounded-full overflow-hidden border '>
                            <img src={video?.author?.avatar[0].url} className='w-full h-full rounded-full overflow-hidden ' alt="channel img" />
                        </div>
                        <div className="">
                            <span className='text-sm font-bold line-clamp-2 overflow-ellipsis max-w-80 '>{video?.title}</span>
                            <span className='flex items-center gap-2 '>
                                {video?.author?.title}
                                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px] ' />)}
                            </span>
                            <div className="flex text-gray-500 text-[12px] ">
                                <span>
                                    {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                                </span>
                                <span className='flex text-[20px] leading-none font-bold relative top-[-2px] mx-1 '> • </span>
                                <span>{video?.publishedTimeText}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Video
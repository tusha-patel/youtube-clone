import { Link } from 'react-router-dom'
import Time from './Time'
import { abbreviateNumber } from 'js-abbreviation-number'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const SuggestedVideo = ({ video }) => {
    return (
        <Link to={`/video/${video?.videoId}`}>
            <div className=" flex gap-3 mb-3 ">
                <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200  ">
                    <img src={video?.thumbnails[0]?.url} className='h-full w-full' alt={"video img"} />
                    {video?.lengthSeconds && <Time time={video.lengthSeconds} />}
                </div>

                <div className='flex gap-2 items-start '>
                    <div className="">
                        <span className='text-sm font-bold line-clamp-2 overflow-ellipsis max-w-80 '>{video?.title}</span>
                        <span className='flex items-center gap-2 '>
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px] ' />)}
                        </span>
                        <div className="flex text-gray-500 text-[12px] ">
                            {video?.stats?.viewers && (
                                <span>
                                    {`${abbreviateNumber(video?.stats?.viewers, 2)} views`}
                                </span>
                            )}
                            <span>{video?.publishedTimeText}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default SuggestedVideo
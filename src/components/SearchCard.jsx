import { abbreviateNumber } from 'js-abbreviation-number';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Time from './Time';
import { Link } from 'react-router-dom';

const SearchCard = ({ video }) => {
    return (
        <Link to={`/video/${video?.videoId}`}>
            <div className=" flex flex-col md:flex-row mb-8 md:mb-3 gap-4 p-3">
                <div className="relative flex h-60  w-full md:w-100    ">
                    <img src={video?.thumbnails[0]?.url} className='h-full w-full rounded-lg ' alt={"video img"} />
                    {video?.lengthSeconds && <Time time={video.lengthSeconds} />}
                </div>
                <div className="space-y-2">
                    <span className=' font-bold line-clamp-2 overflow-ellipsis text-2xl '>{video?.title}</span>
                    <span className=' font-bold line-clamp-1 overflow-ellipsis text-sm '>{video?.descriptionSnippet}</span>
                    <span className='flex items-center gap-2 '>
                        {video?.author?.title}
                        {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px] ' />)}
                    </span>
                    <div className="flex text-black font-medium text-[14px] items-center  ">
                        <div className='flex h-9 w-9 rounded-full overflow-hidden border  mr-4 '>
                            <img src={video?.author.avatar[0].url} className='w-full h-full rounded-full overflow-hidden ' alt="channel img" />
                        </div>
                        <div className="relative">
                            {video?.stats?.views && (
                                <span>
                                    {`${abbreviateNumber(video.stats?.views, 2)} views`}
                                    {" • "}
                                </span>
                            )}
                            <span>{video.publishedTimeText}</span>
                            <p>{video?.author?.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SearchCard
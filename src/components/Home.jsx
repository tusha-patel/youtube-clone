import Sidebar from './Sidebar'
import Video from './Video'
import { useAuth } from '../context/AuthProvider'
import VideoSkeleton from './VideoSkeleton'
import ListItems from './ListItems'

const Home = () => {
    const { loading, data } = useAuth();
    if (loading) {
        return <VideoSkeleton />
    }

    return (
        <div className=' mt-15 sm:mt-20 flex '>
            <Sidebar />
            {/* videos lists */}
            <div className="h-[calc(100vh-65px)] overflow-y-auto overflow-x-hidden">
                <ListItems />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 py-2 sm:px-4 ">
                    {data?.map((item) => {
                        if (item.type !== "video") return false;
                        return (
                            <Video key={item?.video.videoId} video={item?.video} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
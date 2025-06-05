import SkeletonCard from "./SkeletonCard"

const VideoSkeleton = () => {
    return (
        <div className="h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden mt-17 gap-2 ">
            <div className="flex gap-2 ">
                <div className="xl:w-[14%]"></div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 flex-1 grid-rows-2 space-y-5 '>
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
            </div>
        </div>
    )
}

export default VideoSkeleton
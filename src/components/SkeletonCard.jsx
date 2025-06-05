
const SkeletonCard = () => {
    return (
        <div className=" ">
            <div className="animate-pulse space-x-4 ">
                <div className=" space-y-2 py-1 px-3">
                    <div className="h-48 md:h-56 rounded-lg bg-gray-200"></div>
                    <div className="flex gap-2 items-start">
                        <div className="h-15 w-15 rounded-full bg-gray-200  "></div>
                        <div className=" space-y-2 flex-1">
                            <div className="max-w-80 h-4 rounded bg-gray-200"></div>
                            <div className="h-2 rounded bg-gray-200"></div>
                            <div className="h-2 w-[80%] rounded bg-gray-200"></div>
                            <div className="flex gap-3 ">
                                <div className="w-20 h-3 rounded bg-gray-200"></div>
                                <div className="w-20 h-3 rounded bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonCard
import moment from 'moment';
import React from 'react'

const Time = ({ time }) => {
    const formattedTime = moment.utc(time * 1000).format('H:mm:ss');
    // const videoTime = moment()?.startOf("day")?.second(time).format("H:mm:ss")
    return (
        <div>
            <span className='absolute right-2 bottom-2 text-white px-2 py-1 text-xs rounded-md bg-black/40 backdrop-blur-sm '>
                {formattedTime}
            </span>
        </div>
    )
}

export default Time
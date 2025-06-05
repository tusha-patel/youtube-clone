import React, { useState } from 'react';

const ListItems = () => {
    const categories = [
        "All", "Music", "React routers", "Computer programming", "Reverberation",
        "Movie musicals", "India national cricket team", "News", "Mixes", "1990s",
        "Telugu cinema", "Live", "Dramedy", "Dubbing", "Indian soap opera",
        "Cricket", "Football", "Learn Coding"
    ];

    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className="w-full overflow-x-auto whitespace-nowrap px-2 sm:px-4  pb-2 hide-scroll-bar ">
            {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`inline-block m-1 px-4 py-2 rounded-lg text-sm cursor-pointer
            ${activeCategory === category
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black hover:bg-gray-300"}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default ListItems;

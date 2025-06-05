const Button = ({ text, icon }) => {
    return (
        <button className='flex items-center text-sm sm:text-md px-3 py-2 gap-2 rounded-2xl bg-gray-100  cursor-pointer  hover:bg-gray-200 duration-300 '>
            {icon}
            {text}
        </button>
    )
}

export default Button
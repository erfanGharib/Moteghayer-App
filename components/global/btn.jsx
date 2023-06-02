const Btn = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            type='button'
            className={`${className} flex justify-center items-center min-w-[100px] py-1.5 px-3 outline-none transition-all hover:shadow-hov hover:bg-green-600 bg-green-700 text-lenearWhite-600`}
        >
            {children}
        </button>
    )
}

export default Btn;
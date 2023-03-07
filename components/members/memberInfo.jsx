import Image from "next/image";

const MemeberInfo = ({ img = { src: '', alt: '' }, name, children }) => {
    return (
        <div className='f-col-center w-full sm:w-2/5 bg-black-790 relative p-6'>
            <span
                className='overflow-hidden min-h-[16.5rem] max-h-[16.5rem] f-center border-8 border-black-780'
            >
                <Image
                    src={img.src}
                    alt={img.alt}
                    className='filter grayscale'
                />
            </span>
            <div className='leading-6 mt-5'>
                <h3>{name}</h3>
                {children}
            </div>
        </div>
    )
}

export default MemeberInfo;
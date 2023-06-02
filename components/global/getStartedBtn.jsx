import Link from 'next/link'

const GetStartedBtn = ({ invert = false, className = '' }) => {
  return (
    <Link 
      href='/app'
      className={`
        ${className} 
        ${invert ? 'bg-black-800 !text-orange-900' : '!text-black-900 bg-orange-900'} 
        min-w-[150px] py-1.5 z-10 px-3 opacity-100 hover:shadow-hov hover:-translate-y-1 hover:transform transition-all
      `}
    >
      همین حالا شروع کنید
    </Link>
  )
}

export default GetStartedBtn;
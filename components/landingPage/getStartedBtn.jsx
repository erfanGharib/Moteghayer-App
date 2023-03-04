import Link from 'next/link'

const GetStartedBtn = ({ invert = false }) => {
  return (
    <Link 
      href='/app' 
      className={`${invert ? 'bg-black-800 text-orange-900' : 'text-black-900 bg-orange-900'} py-1.5 px-3 opacity-100 hover:shadow-cs hover:-translate-y-1 hover:transform transition-all`}
    >
      همین حالا شروع کنید
    </Link>
  )
}

export default GetStartedBtn;
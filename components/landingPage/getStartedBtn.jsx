import Link from 'next/link'

const GetStartedBtn = () => {
  return (
    <Link 
      href='/app' 
      className='py-1.5 px-3 opacity-100 text-black-900 bg-orange-900 hover:shadow-cs hover:-translate-y-1 hover:transform transition-all'
    >
      همین حالا شروع کنید
    </Link>
  )
}

export default GetStartedBtn;
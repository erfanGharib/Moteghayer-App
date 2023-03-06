const Loading = () => {
    return (
        <div id='loading' className='h-full f-center w-full'>
            <div className='f-col-center justify-center p-10 back bg-black-800'>
                <div className='custom-loader'></div>
                <p className='text-center leading-6 mt-4 opacity-30 !mb-0'>
                    درحال بارگذاری<br/>
                    برای بارگذاری اولیه زمان بیشتری صرف خواهد شد<br/>
                    لطفا صبور باشید...
                </p>
            </div>
        </div>
    )
}

export default Loading;
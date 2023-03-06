const FSection = ({ title, children }) => {
    return (
        <section className='f-col'>
            <h4 className='font-bold picoopicFont text-xl opacity-80'>{title}</h4>
            <div className='w-full f-col-start mt-3 text-opacity-60'>
                {children}
            </div>
        </section>
    );
}
export default FSection;
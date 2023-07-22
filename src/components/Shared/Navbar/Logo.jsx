import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to='/'>
            <p className='hidden md:block text-xl lg:text-3xl  font-bold'>
                Edu <span className='text-[#F43F5E]'>Booking</span>
            </p>
        </Link>
    )
}

export default Logo

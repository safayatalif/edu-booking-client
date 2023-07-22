import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Search = () => {
    return (
        <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
            <div className='flex flex-row items-center justify-between'>
                <div className='text-sm font-semibold px-6'>Home</div>
                <Link to="collages" className='hidden md:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                    Colleges
                </Link>
                <Link to="admission" className='hidden md:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                    Admission
                </Link>
                <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                    <input className='rounded-xl p-2 w-full' type="text" placeholder='Search Collage' />
                    <div className='p-2 bg-rose-500 rounded-full text-white'>
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search

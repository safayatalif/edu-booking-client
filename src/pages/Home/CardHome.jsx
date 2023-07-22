import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai"
import { GiArchiveResearch } from "react-icons/gi"
import { Link } from 'react-router-dom';
import HeartButton from "../../components/Button/HeartButton";

const CardHome = ({ collage }) => {
    const { collegeImage, collegeName, collegeRating, admissionDate, researchCount, _id , researchHistory} = collage
    return (
        <div className='col-span-1  group'>
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
                >
                    <img
                        className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
                        src={collegeImage}
                        alt='Room'
                    />
                    <div
                        className='
            absolute
            top-3
            right-3
          '
                    >
                        <HeartButton />
                    </div>
                </div>
                <div className='font-semibold text-lg'>{collegeName}</div>
                <div className='font-light text-neutral-500'>
                    <span className="font-bold text-gray-600">Admission Date: </span><span className="text-sm">{admissionDate}</span>
                </div>
                <div className='font-light text-neutral-500'>
                    <span className="font-bold text-gray-600">Research History: </span><span className="text-sm">{researchHistory}</span>
                </div>
                <div className='flex flex-row justify-between items-center text-neutral-500'>
                    <div className='font-semibold'><AiFillStar className="inline-block " size={18}></AiFillStar> {collegeRating}</div>
                    <div className='font-semibold'><GiArchiveResearch size={18} className="inline-block "></GiArchiveResearch> {researchCount}</div>
                    <Link to={`collages/${_id}`} className='font-semibold cursor-pointer'><AiOutlineArrowRight className="text-rose-500 mr-2" size={20}></AiOutlineArrowRight></Link>
                </div>
            </div>
        </div>
    )
}

export default CardHome
import ReactStarsRating from 'react-awesome-stars-rating';
import cardIcon from "../assets/best 1.png"

const CoursesCard = ({ course }) => {
    console.log(course)
    const { name, image, price, rating } = course;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <h2 className="card-title text-[#161E49]">{name}</h2>
                        <ReactStarsRating className="flex" value={rating} />
                    </div>
                    <div className='flex items-center justify-center mt-3'>
                        <p className='text-blue-500 font-semibold test-lg'>${price}</p>
                        <button className='bg-blue-500 text-white px-5 py-1 rounded-2xl font-semibold'>Book Now</button>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='bg-slate-100 rounded-full w-12 flex items-center p-2'>
                            <img src={cardIcon} alt="" />
                        </div>
                        <h1 className='text-lg font-semibold text-blue-500'>Best Seller</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;
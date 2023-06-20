import { BsArrowRightShort } from 'react-icons/bs';
import image from "../assets/Rectangle 28.png"
import ContainerBox from '../Pages/Shared/Container/ContainerBox';
import ReactStarsRating from 'react-awesome-stars-rating';

const Review = () => {
    return (
        <ContainerBox>
            <div className='lg:flex items-center justify-between gap-20 mt-20 mb-20'>
                <div className='lg:w-1/3'>
                    <p className="font-semibold text-blue-500">Testimonial</p>
                    <h1 className="text-4xl font-bold text-[#161E49] mb-3">What They Say?</h1>
                    <p className="font-serif mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam assumenda pariatur voluptatem placeat consequuntur. Vel pariatur quis corporis animi! Suscipit sed repudiandae eligendi vel amet in ea iste laboriosam?</p>
                    <div className='flex items-center justify-center relative group lg:mt-0 mt-4 mb-4 lg:mb-4'>
                        <p className="border-t-2 border-l-2 border-b-2 border-blue-500 px-5 rounded-l-3xl py-1 lg:w-full font-semibold text-blue-500 group-hover:bg-blue-500 group-hover:text-white cursor-pointer">Write you assessment</p>
                        <button className='border-2 border-blue-500 lg:px-2 px-1 py-1 rounded-3xl absolute group-hover:bg-blue-500 lg:-right-5 right-10 '><BsArrowRightShort className='text-blue-500 text-2xl group-hover:text-white'/></button>
                    </div>
                </div>
                <div className='lg:w-2/3 relative'>
                    <img src={image} alt="" />
                    <button className='bg-slate-100 rounded-full p-2 absolute lg:right-[281px] right-0 top-1/3 lg:top-[153px] bg-opacity-80'><BsArrowRightShort className='text-blue-500 text-3xl' /></button>
                    <div className='lg:w-96 absolute right-0 -bottom-24 rounded-lg bg-slate-100 p-2 border-l-8 border-blue-500'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi magnam sapiente porro ex nihil itaque quo fugit vero velit voluptatibus eaque doloremque temporibus, ea aut laudantium vel molestiae, modi fuga?</p>
                        <div className='flex justify-between items-center mt-2'>
                            <h1 className='text-[#161E49] font-bold'>Rukshana Akter</h1>
                            <ReactStarsRating className="flex" value={5} />
                        </div>
                    </div>
                </div>
            </div>
        </ContainerBox>
    );
};

export default Review;
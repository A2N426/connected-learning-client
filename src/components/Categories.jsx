import { FaConnectdevelop, FaRegHandshake } from 'react-icons/fa';
import { FiCodesandbox } from 'react-icons/fi';
import { BsCodeSquare } from 'react-icons/bs';
import { SiCoinmarketcap, SiCairographics, SiBmcsoftware } from 'react-icons/si';
import { MdOutlineNoPhotography } from 'react-icons/md';
import ContainerBox from '../Pages/Shared/Container/ContainerBox';
import circle1 from "../assets/Ellipse 102.png"
import circle2 from "../assets/Ellipse 103.png"
import circle3 from "../assets/Vector 5.png"

const Categories = () => {
    return (
        <div className='mt-10'>
            <ContainerBox>
                <p className='text-blue-500 font-semibold'>Service</p>
                <h1 className='text-4xl font-bold text-[#161E49]'>Top <br /> Categories</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 bg-white gap-5 mt-10'>
                    <div className='group'>
                        <div className='bg-slate-100 rounded-lg p-10 text-center relative hover:bg-blue-500 '>
                            <FaConnectdevelop className='text-5xl text-blue-500 mx-auto group-hover:text-white' />
                            <h1 className='font-bold text-lg text-[#161E49]  mt-4 group-hover:text-white'>Development</h1>
                            <img className='absolute top-5 right-14 invisible group-hover:visible' src={circle1} alt="" />
                            <img className='absolute top-14 right-16 invisible group-hover:visible' src={circle2} alt="" />
                            <img className='absolute bottom-0 right-0 invisible group-hover:visible' src={circle3} alt="" />
                        </div>
                    </div>
                    <div className='group'>
                        <div className='bg-slate-100 rounded-lg p-10 text-center relative hover:bg-blue-500 '>
                            <FaRegHandshake className='text-5xl text-blue-500 mx-auto group-hover:text-white' />
                            <h1 className='font-bold text-lg text-[#161E49]  mt-4 group-hover:text-white'>Business</h1>
                            <img className='absolute top-5 right-14 invisible group-hover:visible' src={circle1} alt="" />
                            <img className='absolute top-14 right-16 invisible group-hover:visible' src={circle2} alt="" />
                            <img className='absolute bottom-0 right-0 invisible group-hover:visible' src={circle3} alt="" />
                        </div>
                    </div>
                    <div className='group'>
                        <div className='bg-slate-100 rounded-lg p-10 text-center relative hover:bg-blue-500 '>
                            <SiBmcsoftware className='text-5xl text-blue-500 mx-auto group-hover:text-white' />
                            <h1 className='font-bold text-lg text-[#161E49]  mt-4 group-hover:text-white'>IT and Software</h1>
                            <img className='absolute top-5 right-14 invisible group-hover:visible' src={circle1} alt="" />
                            <img className='absolute top-14 right-16 invisible group-hover:visible' src={circle2} alt="" />
                            <img className='absolute bottom-0 right-0 invisible group-hover:visible' src={circle3} alt="" />
                        </div>
                    </div>
                    <div className='group'>
                        <div className='bg-slate-100 rounded-lg p-10 text-center relative hover:bg-blue-500 '>
                            <FiCodesandbox className='text-5xl text-blue-500 mx-auto group-hover:text-white' />
                            <h1 className='font-bold text-lg text-[#161E49]  mt-4 group-hover:text-white'>UI Design</h1>
                            <img className='absolute top-5 right-14 invisible group-hover:visible' src={circle1} alt="" />
                            <img className='absolute top-14 right-16 invisible group-hover:visible' src={circle2} alt="" />
                            <img className='absolute bottom-0 right-0 invisible group-hover:visible' src={circle3} alt="" />
                        </div>
                    </div>
                    <div className='group'>
                        <div className='bg-slate-100 rounded-lg p-10 text-center relative hover:bg-blue-500 '>
                            <SiCoinmarketcap className='text-5xl text-blue-500 mx-auto group-hover:text-white' />
                            <h1 className='font-bold text-lg text-[#161E49]  mt-4 group-hover:text-white'>UX Design</h1>
                            <img className='absolute top-5 right-14 invisible group-hover:visible' src={circle1} alt="" />
                            <img className='absolute top-14 right-16 invisible group-hover:visible' src={circle2} alt="" />
                            <img className='absolute bottom-0 right-0 invisible group-hover:visible' src={circle3} alt="" />
                        </div>
                    </div>
                    <div className='group'>
                        <div className='bg-slate-100 rounded-lg p-10 text-center relative hover:bg-blue-500 '>
                            <BsCodeSquare className='text-5xl text-blue-500 mx-auto group-hover:text-white' />
                            <h1 className='font-bold text-lg text-[#161E49]  mt-4 group-hover:text-white'>Marketing</h1>
                            <img className='absolute top-5 right-14 invisible group-hover:visible' src={circle1} alt="" />
                            <img className='absolute top-14 right-16 invisible group-hover:visible' src={circle2} alt="" />
                            <img className='absolute bottom-0 right-0 invisible group-hover:visible' src={circle3} alt="" />
                        </div>
                    </div>
                    <div className='group'>
                        <div className='bg-slate-100 rounded-lg p-10 text-center relative hover:bg-blue-500 '>
                            <MdOutlineNoPhotography className='text-5xl text-blue-500 mx-auto group-hover:text-white' />
                            <h1 className='font-bold text-lg text-[#161E49]  mt-4 group-hover:text-white'>Photography</h1>
                            <img className='absolute top-5 right-14 invisible group-hover:visible' src={circle1} alt="" />
                            <img className='absolute top-14 right-16 invisible group-hover:visible' src={circle2} alt="" />
                            <img className='absolute bottom-0 right-0 invisible group-hover:visible' src={circle3} alt="" />
                        </div>
                    </div>
                    <div className='group'>
                        <div className='bg-slate-100 rounded-lg p-10 text-center relative hover:bg-blue-500 '>
                            <SiCairographics className='text-5xl text-blue-500 mx-auto group-hover:text-white' />
                            <h1 className='font-bold text-lg text-[#161E49]  mt-4 group-hover:text-white'>Graphics Design</h1>
                            <img className='absolute top-5 right-14 invisible group-hover:visible' src={circle1} alt="" />
                            <img className='absolute top-14 right-16 invisible group-hover:visible' src={circle2} alt="" />
                            <img className='absolute bottom-0 right-0 invisible group-hover:visible' src={circle3} alt="" />
                        </div>
                    </div>
                </div>
            </ContainerBox>
        </div>
    );
};

export default Categories;
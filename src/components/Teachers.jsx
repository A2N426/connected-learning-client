import ContainerBox from "../Pages/Shared/Container/ContainerBox";
import image1 from "../assets/Rectangle 21 (1).png"
import image2 from "../assets/Rectangle 22.png"
import image3 from "../assets/Rectangle 24.png"
import image4 from "../assets/Rectangle 23.png"

const Teachers = () => {
    return (
        <div className="mt-10 py-10 bg-slate-100">
            <ContainerBox>
                <div>
                    <h1 className="text-blue-500 font-semibold text-center ">Team Member</h1>
                    <h1 className="text-5xl font-semibold mt-3 text-center text-[#161E49]">Popular Professional</h1>
                    <h1 className="text-5xl font-semibold mt-3 text-center text-[#161E49]">Teachers</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        <div className="relative">
                            <img src={image1} alt="" />
                            <div className="bg-blue-500 text-white text-center font-semibold absolute rounded-b-3xl lg:bottom-8 bottom-10 lg:py-5 py-6 lg:left-[42px] left-[49px] lg:w-[204px] w-[230px]">
                                <h1 className="text-xl">Puspa Kanon</h1>
                                <p>CEO, derhab</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={image2} alt="" />
                            <div className="bg-blue-500 text-white text-center font-semibold absolute rounded-b-3xl lg:bottom-8 bottom-10 lg:py-5 py-6 lg:left-[42px] left-[47px] lg:w-[206px] w-[233px]">
                                <h1 className="text-xl">Puspa Kanon</h1>
                                <p>CEO, derhab</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={image3} alt="" />
                            <div className="bg-blue-500 text-white text-center font-semibold absolute rounded-b-3xl lg:bottom-8 bottom-10 lg:py-5 py-6 lg:left-[42px] left-[49px] lg:w-[204px] w-[230px]">
                                <h1 className="text-xl">Puspa Kanon</h1>
                                <p>CEO, derhab</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={image4} alt="" />
                            <div className="bg-blue-500 text-white text-center font-semibold absolute rounded-b-3xl lg:bottom-8 bottom-10 lg:py-5 py-6 lg:left-[42px] left-[47px] lg:w-[205px] w-[233px]">
                                <h1 className="text-xl">Puspa Kanon</h1>
                                <p>CEO, derhab</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerBox>
        </div>
    );
};

export default Teachers;
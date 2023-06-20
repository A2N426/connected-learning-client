import ContainerBox from "../Pages/Shared/Container/ContainerBox";
import image from "../assets/Rectangle 6.png"

const Explore = () => {
    
    return (
        <ContainerBox>
            <div className="lg:flex items-center justify-center gap-10 mt-10">
                <div>
                    <img className="lg:w-full rounded-lg" src={image} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <p className="font-semibold text-blue-500 lg:mt-0 mt-5">About Us</p>
                    <h2 className="text-4xl font-bold text-[#161E49] mt-3">We are providing the best </h2>
                    <h1 className="text-4xl font-bold text-[#161E49] mt-2">online digital courses.</h1>
                    <p className="mt-6 font-serif">Contrary to popular belief, sit amet consectetur adipisicing elit. Officiis ipsam consectetur velit minus cupiditate voluptate nesciunt adipisci beatae in aperiam exercitationem est itaque hic nulla tempora eligendi tempore, animi nihil consequatur error, rerum laboriosam. Consequatur, itaque id ab repudiandae neque reiciendis rerum eveniet, minima quae doloremque consectetur nihil facere enim.</p>
                    <p className="mt-6 font-serif">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus possimus neque tempora nemo nam, alias rerum ipsa aperiam velit reiciendis.     </p>
                    <button className="bg-blue-500 px-6 py-1 text-white rounded-3xl mt-3 font-semibold">Learn More</button>
                </div>
            </div>
        </ContainerBox>
    );
};

export default Explore;
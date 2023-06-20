import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Banner from "../../components/Banner";

const Home = () => {
    return (
        <div>
            <div className="bg-slate-100">
                <Navbar />
                <Banner />
            </div>
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
import logo from "../../../assets/image 32.png"
import app from "../../../assets/image 30.png"
import play from "../../../assets/image 31.png"
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="mt-40">
            <footer className="footer p-10 bg-[#132742] text-white">
                <div>
                    <img className="w-32" src={logo} alt="" />
                    <a className="link link-hover mt-2">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Error, fugit!</a>
                    <img className="w-32 mt-3" src={app} alt="" />
                    <img className="w-32" src={play} alt="" />
                    <span className="footer-title">Company</span>
                    <div className="flex gap-2 items-center text-2xl">
                        <RiLinkedinBoxFill />
                        <AiFillTwitterSquare />
                        <FaFacebookSquare/>
                    </div>
                </div>
                <div>
                    <span className="footer-title">About US</span>
                    <a className="link link-hover mt-3">Ou Company</a>
                    <a className="link link-hover">Career</a>
                    <a className="link link-hover">Investor Relations</a>
                    <a className="link link-hover">Social Impact</a>
                </div>
                <div>
                    <span className="footer-title">Resource</span>
                    <a className="link link-hover mt-2">Contact</a>
                    <a className="link link-hover">Give Feedback</a>
                    <a className="link link-hover">hello@example.com</a>
                </div>
                <div>
                    <div className="form-control w-80">
                        <div className="relative">
                            <input type="text" placeholder="Email Adress" className="input input-bordered text-[#132742] w-full  rounded-3xl" />
                            <button className="bg-blue-500 py-[14px] px-8 absolute top-0 right-0 rounded-3xl">Subscribe</button>
                        </div>
                    </div>
                    <span className="link link-hover mt-3">Email US</span>
                    <span className="link link-hover">RK@gmail</span>
                    <span className="link link-hover">Bolomu A Rights Reserved, 2024</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
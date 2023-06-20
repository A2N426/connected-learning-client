import logo from '../../../assets/image 32.png'

const Navbar = () => {

    const navLink = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Course</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className="navbar bg-base-100 lg:px-24 px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52">

                        {navLink}

                    </ul>
                </div>
                <img className='lg:w-24 w-20' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navLink}

                </ul>
            </div>
            <div className="navbar-end flex items-center lg:gap-3 gap-2">
                <button className='border border-blue-600 rounded-2xl px-4 py-1 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white '>Login</button>
                <button className='border border-blue-600 rounded-2xl px-4 py-1 font-semibold text-white bg-blue-600 '>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;
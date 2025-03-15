import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const {user, logOutUser} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOutUser()
        .then(() =>{
            console.log('user log out successfull')
        })
        .catch(error => console.log('error', error.message))
    }
    const links =   <>
                        <NavLink to='/'> Home </NavLink>
                        <NavLink to='/allcampaign'> All Campaign </NavLink>
                        <NavLink to='/addCampaign'> Add New Campaign </NavLink>
                        <NavLink to='/Mycampaign'> My Campaign </NavLink>
                        <NavLink to='/Mydonations' > My Donations </NavLink>
                    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">LiftUp</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                {links}
                </ul>
            </div>
            {/* <div className="navbar-end">
                {
                    user ? 
                    <>
                    <span> {user?.email}</span>
                    <a onClick={handleLogOut} className="btn">Log Out</a>
                    </>
                    : 
                    <Link to='/login'>
                    LogIn
                    </Link>
                }
            </div> */}
            <div className="navbar-end flex items-center space-x-4">
    {user ? (
        <>
            <div className="relative group w-10 h-10">
                <img
                    src={user?.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover group-hover:opacity-0 transition-opacity"
                />
                <span className="absolute inset-0 flex items-center justify-center font-medium bg-gray-200 text-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {user?.displayName?.split(' ')[0]}  
                </span>
            </div>
            <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
        </>
    ) : (
        <Link to="/login" className="btn btn-outline">
            Log In
        </Link>
    )}
</div>




        </div>
    );
};

export default Navbar;
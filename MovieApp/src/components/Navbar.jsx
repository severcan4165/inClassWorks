import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const currentUser = {displayName: "salih"};
  return <>


      <nav className=" w-full flex  items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg fixed-top">
        <div className="container-fluid w-full flex  items-center justify-between px-6">
       
            <Link className="text-2xl text-white pr-2 font-semibold" to="/">Movie</Link>
  
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="flex items-center relative">
            {/* Icon */}
            {currentUser&& <h5>{currentUser.displayName}</h5>}

            <div className="dropdown relative">
              <span className="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full" style={{height: '25px', width: '25px'}} alt="" loading="lazy" />
              </span>
              <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0" aria-labelledby="dropdownMenuButton2">
                <li>
                  <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Action</a>
                </li>
                <li>
                  <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Another action</a>
                </li>
                <li>
                  <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
      <div className="h-[52px]"></div>
  </>;
};

export default Navbar;

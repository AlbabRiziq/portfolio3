import { useState } from "react";
import menu from "../../img/menuu.png";
import MobileNavbar from "./MobileNavbar";
import { motion } from "framer-motion";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed">
      <nav className="w-screen bg-slate-500 p-5 px-8 text-slate-200 font-normal flex items-center justify-between text-sm">
        <h1>ALBAB RIZIQ</h1>
        <div className="w-auto hidden md:flex">
          <a href="" className="mx-3 lg:mx-5 xl:mx-10 hover:underline">
            <p>ABOUT</p>
          </a>
          <a href="" className="mx-3 lg:mx-5 xl:mx-10 hover:underline">
            <p>BLOG</p>
          </a>
          <a href="" className="mx-3 lg:mx-5 xl:mx-10 hover:underline">
            <p>PROJECT</p>
          </a>
          <a href="" className="mx-3 lg:mx-5 xl:mx-10 hover:underline">
            <p>CONTACT</p>
          </a>
        </div>
        <button
          className="md:hidden"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <img src={menu} alt="Menu" className="h-5 " />
        </button>
      </nav>
      {toggle && (
        <motion.div
          animate={{ x: [300, 200, 100, 0] }}
          transition={{ duration: 0.1 }}
        >
          <MobileNavbar />
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;

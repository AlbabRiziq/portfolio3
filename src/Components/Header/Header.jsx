import MovingComponent from "react-moving-text";
import facebook from "../../img/facebook.png";
import github from "../../img/github.png";
import ig from "../../img/instagram.png";
import muka from "../../img/muka.jpg";

function Header() {
  return (
    <div className="mt-2 bg-slate-400 p-10 flex flex-col md:flex-row items-center justify-center w-screen py-32">
      <img
        src={muka}
        alt="Muka ane"
        className="rounded-full hover:rounded-3xl duration-100 transition-all ease-linear h-40"
      />
      <div className="p-5 mx-5 flex flex-col ">
        <h1 className="text-xs text-center md:text-left font-bold text-slate-200">
          Hello i'm RIZIQ LILI ULIL ALBAB
        </h1>
        <div className="text-center md:text-left text-2xl text-slate-100 font-bold ml-[-9px]">
          <MovingComponent
            type="typewriter"
            dataText={["Web Developer", "Student"]}
          />
        </div>
        <div className="w-80">
          <h1 className="text-slate-200 text-xs text-center md:text-left">
            Astronomy, Physics, Software and Web Development Enthusiast
          </h1>
        </div>
        <div className="flex items-center justify-evenly mt-5">
          <a href="https://github.com/AlbabRiziq">
            <img src={github} alt="" />
          </a>
          <a href="https://www.facebook.com/albab.riziq">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/albabriziq_/">
            <img src={ig} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

import Skilnya from "./Skilnya";
import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import tailwind from "../../img/tailwind.png";
import logoReact from "../../img/react.png";
import logoExpress from "../../img/ExpressJs.png";

function Skills() {
  return (
    <div className="bg-slate-200 p-10 w-screenpx-32 py-24">
      <h1 className="text-center font-semibold text-xl">MY SKILLS</h1>
      <div className="flex items-center justify-evenly  flex-wrap">
        <Skilnya foto={html} skil="HTML" />
        <Skilnya foto={js} skil="JAVASCRIPT" />
        <Skilnya foto={css} skil="CSS" />
        <Skilnya foto={logoReact} skil="REACT JS" />
        <Skilnya foto={logoExpress} skil="EXPRESS" />
        <Skilnya foto={tailwind} skil="TAILWINDCSS" />
      </div>
    </div>
  );
}

export default Skills;

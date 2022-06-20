import html from "../../img/html.png";

function Skilnya(props) {
  return (
    <div className="m-10 bg-slate-100 p-5 w-52 flex items-center justify-center flex-col rounded-xl shadow-lg">
      <img src={props.foto} alt="html" className="h-28 w-auto object-cover" />
      <h1 className="font-semibold mt-5">{props.skil}</h1>
    </div>
  );
}

export default Skilnya;

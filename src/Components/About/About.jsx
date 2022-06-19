import muka from "../../img/muka.jpg";

function About() {
  return (
    <div className="w-screen bg-slate-300 px-32 py-24">
      <br />
      <div className="flex flex-wrap w-full items-center justify-center">
        <div>
          <h1 className="font-semibold text-2xl text-center md:text-left mt-[-50px]">
            HELLO
          </h1>

          <img
            src={muka}
            alt=""
            className="h-44 object-cover w-44 border-4 mt-5"
          />
        </div>
        <div className="m-5 flex flex-col items-center ">
          <p className="text-xs w-80 md:w-96 text-justify mb-5">
            Hi my name is Riziq Lili Ulil Albab. I'm from Indonesia. I was born
            on October 1st, 2006. And I'm a Junior Web Developer
          </p>
          <a href="https://wa.me/message/KJL5XZYGFLQDG1" className="">
            <p className="bg-slate-100 w-32 text-center py-2 rounded-md hover:rounded-2xl ">
              HIRE ME
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

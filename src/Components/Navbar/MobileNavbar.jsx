function MobileNavbar() {
  return (
    <div className="absolute p-20 right-0 h-screen bg-slate-500 transition-all">
      <a href="" className="mx-3 lg:mx-5 xl:mx-10 hover:text-xl transition-all">
        <p>ABOUT</p>
      </a>
      <br />
      <a href="" className="mx-3 lg:mx-5 xl:mx-10 hover:text-xl transition-all">
        <p>BLOG</p>
      </a>
      <br />
      <a href="" className="mx-3 lg:mx-5 xl:mx-10 hover:text-xl transition-all">
        <p>PROJECT</p>
      </a>
      <br />
      <a href="" className="mx-3 lg:mx-5 xl:mx-10 hover:text-xl transition-all">
        <p>CONTACT</p>
      </a>
    </div>
  );
}

export default MobileNavbar;

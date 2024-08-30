import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full flex justify-center bg-orange">
        <div className="container flex justify-between p-20 ml-36">
          <div className="flex">
            <img src="LogoGarudaBerWarna.avif" className="px-7" alt="" />
            <div className="flex items-center ml-20 gap-5 ">
              <i class="bx bxl-facebook-circle text-4xl text-white hover:text-slate-800 transition ease-in-out duration-300"></i>
              <i class="bx bxl-instagram text-4xl text-white hover:text-slate-800 transition ease-in-out duration-300"></i>
              <i class="bx bxl-tiktok text-4xl text-white hover:text-slate-800 transition ease-in-out duration-300"></i>
              <i class="bx bxl-twitter text-4xl text-white hover:text-slate-800 transition ease-in-out duration-300"></i>
            </div>
            <div className="text-white ml-72">
              <h1 className="font-bold">Contacts</h1>
              <p className="">+62 888 988 6 888</p>
              <p>garudalogistic.id@gmail.com</p>
            </div>
            <div className="text-white ml-10">
              <h1 className="font-bold">Location</h1>
              <p className="">
                Makassar - Jakarta - <br />
                Surabaya - Balikpapan
              </p>
            </div>
            <div className="text-white ml-10">
              <h1 className="font-bold">Hours</h1>
              <p className="">I-V 9:00-18:00</p>
              <p>VI - VII Closed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

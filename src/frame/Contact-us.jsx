import React from "react";

function Contactus() {
  return (
    <>
      <div className="w-full flex justify-center bg-birutua py-20">
        <div className="container ml-60 mt-24">
          <h1 className="text-orange font-epilouge font-extrabold text-6xl">
            Contact us
          </h1>
          <p className="text-white font-epilouge font-medium mt-2">
            Whether you have a request, a query, or want to work with us, use
            the form below to get in touch with our team.
          </p>

          <div className="mt-10">
            <p className="text-white font-epilouge text-lg font-medium">Name</p>
            <input
              type="text"
              placeholder="Masukkan Nama Depan"
              className="w-96 h-10 mt-1 bg-slate-500 rounded"
            />
          </div>
          <div className="mt-10">
            <p className="text-white font-epilouge text-lg font-medium">
              Last Name
            </p>
            <input
              type="text"
              placeholder="Masukkan Nama Akhir"
              className="w-96 h-10 mt-1 bg-slate-500 rounded"
            />
          </div>
          <div className="mt-10">
            <p className="text-white font-epilouge text-lg font-medium">
              Your Email
            </p>
            <input
              type="text"
              placeholder="Masukkan Email"
              className="w-96 h-10 mt-1 bg-slate-500 rounded"
            />
          </div>
          <div className="mt-10">
            <p className="text-white font-epilouge text-lg font-medium">
              Message
            </p>
            <input
              type="text"
              placeholder="Masukkan Message"
              className="w-96 h-16 mt-1 bg-slate-500 rounded"
            />

            <div className="">
              <button className="border font-medium bg-orange px-8 py-2 mt-6 rounded-full border-none hover:bg-white transition ease-in-out duration-300">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;

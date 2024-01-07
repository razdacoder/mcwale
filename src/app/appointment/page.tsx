import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function AppointmentPage() {
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />
      <section className="h-[78vh] px-8 py-3 md:pl-6 md:pr-0 xl:px-16 flex ">
        <div className="w-full md:w-2/4 xl:w-1/3 flex items-center">
          <form className="space-y-6 w-full md:pr-3 xl:w-9/12">
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="firstname"
                className="uppercase text-sm font-semibold tracking-wider"
              >
                First name:
              </label>
              <input
                className="w-full px-1 outline-none border-[3px] border-black"
                type="text"
                id="firstname"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="lastname"
                className="uppercase text-sm font-semibold tracking-wider"
              >
                last name:
              </label>
              <input
                className="w-full px-1 outline-none border-[3px] border-black"
                type="text"
                id="lastname"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="address"
                className="uppercase text-sm font-semibold tracking-wider"
              >
                address:
              </label>
              <input
                className="w-full px-1 outline-none border-[3px] border-black"
                type="text"
                id="address"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="email"
                className="uppercase text-sm font-semibold tracking-wider"
              >
                email:
              </label>
              <input
                className="w-full px-1 outline-none border-[3px] border-black"
                type="email"
                id="email"
              />
            </div>

            <div className="flex gap-x-5 ">
              <div className="flex flex-col gap-y-1 w-2/4">
                <label
                  htmlFor="date"
                  className="uppercase text-sm font-semibold tracking-wider"
                >
                  date:
                </label>
                <input
                  className="w-full px-1 outline-none border-[3px] border-black"
                  type="date"
                  id="date"
                />
              </div>
              <div className="w-2/4 flex items-center gap-x-1">
                <div className="flex w-1/3 flex-col gap-y-1">
                  <label
                    htmlFor="hour"
                    className="uppercase text-sm font-semibold tracking-wider"
                  >
                    time:
                  </label>
                  <input
                    className="w-full px-1 outline-none border-[3px] border-black"
                    type="text"
                    id="hour"
                  />
                  <label className="uppercase text-sm font-semibold tracking-wider">
                    hh
                  </label>
                </div>
                <div className="flex w-1/3 flex-col gap-y-1">
                  <label className="uppercase text-sm font-semibold tracking-wider">
                    :
                  </label>
                  <input
                    className="w-full px-1 outline-none border-[3px] border-black"
                    type="text"
                    id="mm"
                  />
                  <label
                    htmlFor="mm"
                    className="uppercase text-sm font-semibold tracking-wider"
                  >
                    mm
                  </label>
                </div>
                <div className="flex w-1/3 flex-col gap-y-1">
                  <select className="w-full px-1 outline-none border-[3px] border-black">
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="phoneNumber"
                className="uppercase text-sm font-semibold tracking-wider"
              >
                phone number:
              </label>
              <input
                className="w-full px-1 outline-none border-[3px] border-black"
                type="text"
                id="phoneNumber"
              />
            </div>

            <div className="flex justify-end">
              <button className="bg-black text-sm text-white px-6 py-2 font-semibold">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-2/4 xl:w-2/3 xl:grid grid-cols-2 relative">
          <div className="w-full h-full bg-[url('/img1-min.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div></div>
          <div className="hidden xl:block absolute w-2/4 top-[50%] right-16 translate-y-[-50%]">
            <h1 className="text-6xl font-black">
              By <br /> Appointment
            </h1>
            <p className="leading-8 w-10/12 font-semibold mt-3">
              To receive a copy of our latest McWale E-lookbook which are full
              of great ideas and style tips: please submit your details below.
              Feel free to send us any queries, comments or request fabric
              swatches using the comment box.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

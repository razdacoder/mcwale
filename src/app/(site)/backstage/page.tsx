import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />
      <section className="h-[78vh] flex flex-col">
        <div className="h-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full h-full bg-[url('/img1-min.jpg')] bg-cover bg-center bg-no-repeat flex items-end">
            <div className="bg-white text-sm py-4 px-16 w-full h-1/4">
              Model: ANIMASHAUN FA’HD
            </div>
          </div>
          <div className="w-full h-full bg-[url('/img2-min.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="w-full h-full bg-[url('/img4-min.jpg')] bg-cover bg-center bg-no-repeat flex items-end">
            <div className="bg-white px-16 py-4 w-full h-1/6 text-sm">
              Photograph: HAASTRUP KUNLE
            </div>
          </div>
          {/* <div className="w-full h-full bg-[url('/img5-min.jpg')] bg-cover bg-center bg-no-repeat"></div> */}
        </div>
        <div className="h-1/6 px-16 flex justify-between items-center bg-slate-200">
          <div className="inline-flex items-center gap-x-3">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="checkbox"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none border-[3px] bg-slate-200 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black checked:bg-white checked:before:bg-white hover:before:opacity-10"
                id="checkbox"
                checked
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#000000"
                  stroke="#000000"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <span className="text-sm font-semibold tracking-widest">
              ACCEPT THE PRIVACY POLICY
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <label
              htmlFor="email"
              className="uppercase text-sm font-semibold tracking-wider"
            >
              sign up for our newsletter:
            </label>
            <input
              className="w-[300px] bg-slate-200  outline-none border-[3px] text-sm px-3 border-black"
              type="email"
              placeholder="YOUR E-MAIL ADDRESS"
              id="email"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

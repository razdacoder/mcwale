import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function ContactPage() {
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

            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="comment"
                className="uppercase text-sm font-semibold tracking-wider"
              >
                comment:
              </label>
              <textarea
                className="w-full px-1 outline-none border-[3px] border-black resize-none"
                id="comment"
                rows={5}
              ></textarea>
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
            <h1 className="text-6xl font-black">Contact Us</h1>
            <p className="leading-8 w-11/12 font-semibold mt-3">
              If you have any enquiry regarding your order or any McWálé
              products, please call customer services on: +234(0)703-357-2333 |
              +234(0)703-357-2333
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

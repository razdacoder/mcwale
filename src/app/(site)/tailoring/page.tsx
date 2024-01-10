"use client";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

export default function TailoringPage() {
  const handleDownScroll = () => {
    const sec = document.querySelector("#sec") as Element;
    sec.scrollBy(0, (sec.scrollHeight as number) / sec.children.length);
  };

  const handleUpScroll = () => {
    const sec = document.querySelector("#sec") as Element;
    sec.scrollBy(0, -(sec.scrollHeight as number) / sec.children.length);
  };
  return (
    <main className="w-full h-screen flex flex-col relative">
      <Navbar className="fixed top-0 left-0 w-full bg-white" />
      <section
        id="sec"
        className="h-[85vh] mt-[15vh] lg:mb-[8vh] overflow-y-scroll bg-yellow-500 scroll-smooth scrollbar-hide"
      >
        <div className="tailor w-full h-full bg-red-500"></div>
        <div className="tailor w-full h-full bg-blue-500"></div>
        <div className="tailor w-full h-full bg-green-500"></div>
        <div className="tailor w-full h-full bg-purple-500"></div>
      </section>
      <div className="fixed bottom-20 right-10 z-50 flex flex-col gap-y-3">
        <button onClick={handleUpScroll} className="rounded-md p-2 bg-black">
          <MdArrowUpward className="text-white w-6 h-6" />
        </button>
        <button onClick={handleDownScroll} className="rounded-md p-2 bg-black ">
          <MdArrowDownward className="text-white w-6 h-6" />
        </button>
      </div>

      <Footer className="fixed bottom-0 w-full bg-white" />
    </main>
  );
}

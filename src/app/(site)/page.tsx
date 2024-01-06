import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />
      <section className="h-[78vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="w-full h-full bg-[url('/img1-min.jpg')] bg-cover bg-no-repeat"></div>
        <div className="w-full h-full bg-[url('/img2-min.jpg')] bg-cover bg-no-repeat"></div>
        <div className="w-full h-full bg-[url('/img4-min.jpg')] bg-cover bg-no-repeat"></div>
        <div className="w-full h-full bg-[url('/img5-min.jpg')] bg-cover bg-no-repeat"></div>
      </section>
      <Footer />
    </main>
  );
}

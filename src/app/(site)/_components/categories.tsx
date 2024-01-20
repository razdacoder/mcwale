import Link from "next/link";

export default function Category() {
  return (
    <Link href="#">
      <div className="h-[400px] relative">
        <img src="/img2-min.jpg" alt="Image" className="w-full h-full" />
        <div className="absolute w-full h-full top-0 left-0 flex items-end text-white p-12 uppercase font-light text-3xl">
          <h3>Agbada Dress</h3>
        </div>
      </div>
    </Link>
  );
}

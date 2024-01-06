import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-end pb-4 pt-16 px-16 border-b h-[15vh]">
      <nav>
        <ul className="flex uppercase gap-x-16 font-medium">
          <li className="font-medium">
            <Link className="font-medium text-base tracking-widest" href="#">
              / Campaign
            </Link>
          </li>
          <li>
            <Link className="font-medium text-base tracking-widest" href="#">
              / Tailoring
            </Link>
          </li>
          <li>
            <Link className="font-medium text-base tracking-widest" href="#">
              / CASUALS
            </Link>
          </li>
          <li>
            <Link className="font-medium text-base tracking-widest" href="#">
              / Backstage
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Image src="/next.svg" alt="Mcwale Logo" width={200} height={100} />
      </div>
    </header>
  );
}

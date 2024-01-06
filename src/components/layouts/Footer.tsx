import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

// px-16 py-4 flex justify-between items-center

export default function Footer() {
  return (
    <footer className="border-t h-[8vh] flex flex-col items-center">
      <nav>
        <ul className="flex uppercase font-medium justify-between items-center flex-wrap px-2 ">
          <li className="font-medium">
            <Link className="font-medium text-base tracking-widest" href="#">
              About us
            </Link>
          </li>
          <li>
            <Link className="font-medium text-base tracking-widest" href="#">
              Appointment
            </Link>
          </li>
          <li>
            <Link className="font-medium text-base tracking-widest" href="#">
              Contact
            </Link>
          </li>
          <li>
            <Link className="font-medium text-base tracking-widest" href="#">
              Policy
            </Link>
          </li>
          <li>
            <Link className="font-medium text-base tracking-widest" href="#">
              Newsletter
            </Link>
          </li>
          <li>
            <Link className="font-medium text-base tracking-widest" href="#">
              #Mcwalemen
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-4">
        <Link href="#">
          <AiFillFacebook className="w-8 h-8" />
        </Link>
        <Link href="#">
          <AiFillTwitterCircle className="w-8 h-8" />
        </Link>
        <Link href="#">
          <AiFillInstagram className="w-8 h-8" />
        </Link>
      </div>
    </footer>
  );
}

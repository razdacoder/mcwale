import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="px-16 py-4 flex justify-between items-center border-t h-[8vh]">
      <nav>
        <ul className="flex uppercase gap-x-16 font-medium">
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

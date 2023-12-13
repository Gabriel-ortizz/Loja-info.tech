import Link from "next/link";

export default function Logo(){
  return(
    <Link className="flex gap-2 " href={'/'}>
            <p className="text-md font-bold text-primary font-inter">
              Logo
            </p>
          </Link>
  )
}
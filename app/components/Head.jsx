import Image from "next/image"
import logo from '../../public/Preview.png'
import Link from "next/link"
export default function Head() {
  return (
    <div className="flex justify-between px-6 items-center border-b-2 border-black pb-4">
      <Link href={"/"}><h1 className="font-bold text-3xl transition-all m-3 hover:-translate-y-2 cursor-pointer">استلام وتسليم</h1></Link>
      <Link href={"/done"}><h1 className="font-bold text-3xl transition-all m-3 hover:-translate-y-2 cursor-pointer">ما تم تسليمه</h1></Link>
      <Image 
        src={logo}
        alt= "sorry"
        priority 
        className="w-32 h-16"
      />
    </div>
  )
}

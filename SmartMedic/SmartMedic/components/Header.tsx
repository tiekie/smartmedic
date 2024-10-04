
"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header(){
    const router = useRouter();
  
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      
      localStorage.removeItem("accessKey");

      
      router.push("/");
    }
  };
    return (
        <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
       
        <button onClick={handleLogout} className=" text-sm bg-green-500 text-white px-5 py-2 rounded-lg">Logout</button>
      </header>
    )
}
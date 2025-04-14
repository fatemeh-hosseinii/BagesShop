
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";

const NavbarRight = () => {
    const usepathname=usePathname()
    const navlinks=[
        {
            id:1,
            link:"/",
            text:"Home"

        },
        {
            id:2,
            link:"/store",
            text:"Store"
        }
    ]
    return ( <>
     <div className="flex flex-row  w-[40%] gap-5">
                {
                    navlinks.map((elem,index)=>{
                        return(
                            
                                <Link href={elem.link} className={`${usepathname==elem.link ?"text-amber-500 text-[20px]" : "text-[20px]"}`}>{elem.text}</Link>
                                
                            
                        )
                    })
                }
                <div className="bg-[white] shadow-md w-[40%]  p-1">
                    <input className="outline-none" type="text" name="" id=""  placeholder="Search"/> 

                </div>
                <Link href="" className="bg-[white] shadow-md px-3  flex flex-row justify-center items-center">
                    <BsFillSuitHeartFill className="text-[#b50303]" size={22}/>

                </Link>
                <Link  className="bg-[white] shadow-md px-3 flex flex-row justify-center items-center" href="/cart">
                <BsCartFill className="text-[#fb9292]" size={22}/>
                </Link>
        </div>
    </> );
}
 
export default NavbarRight;
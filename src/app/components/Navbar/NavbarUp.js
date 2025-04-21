import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";

const NavbarUp = () => {
    return (
        <>
            <div className="flex flex-row justify-between  w-full gap-3">
                <div className=" w-[30%]  p-2">
                    <div className="w-[100%] border-b-[1px] border-b-gray-950 flex flex-row justify-between  p-1">
                        <input type="text" className="outline-0 w-[80%]"  placeholder="Search"/>
                        <BsSearch size={23} className=""/>

                    </div>
                </div>
                <div className="w-[60%] flex flex-row justify-between">
                    <div className="w-[30%] ">
                        <img src="/Media/logo (1).png" alt="لوگو" />

                    </div>
                    <div className=" flex flex-row justify-around  w-[40%]">
                            <Link className=" flex flex-col justify-center items-center" href="">
                                <BsHeart size={25}/>
                                <p className="text-[12px]">Favorite</p>
                            </Link>
                            <Link className=" flex flex-col justify-center items-center" href="">
                                <BsBag size={25}/>
                                <p className="text-[12px]">Cart</p>
                            </Link>
                            <Link className=" flex flex-col justify-center items-center" href="">
                                <BsPerson size={28}/>
                                <p className="text-[12px]">User</p>
                            </Link>
                            <Link className=" flex flex-col justify-center items-center" href="">
                                <BsFillPersonVcardFill size={28}/>
                                <p className="text-[12px]">Dashbord</p>
                            </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarUp;

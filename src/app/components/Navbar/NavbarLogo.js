import { BsShop } from "react-icons/bs";

const NavbarLogo = () => {
    return ( <>
    <div className="flex flex-row gap-3 ">
        <BsShop className="text-[white]" size={25}/>
        <p className="text-[20px] font-bold text-[white]">ParllyShop</p>
    </div>
    </> );
}
 
export default NavbarLogo;
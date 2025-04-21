import { BsSearch } from "react-icons/bs";

const NavbarDown = () => {
    const bagBrands = [
        { id: 1, name: "Dior" },
        { id: 2, name: "Nike" },
        { id: 3, name: "Samsonite" },
        { id: 4, name: "Louis Vuitton" },
        { id: 5, name: "Gucci" },
        { id: 6, name: "Mango" },
        { id: 7, name: "Adidas" },

      ];
      
    return (<>
    <div className=" flex flex-row justify-between mt-2 w-[100%]">
        <ul className="flex flex-row gap-5 w-[50%]  "> 
            {
                bagBrands.map((elem)=>{
                    return(
                        <li className=" text-[17px] ">
                        {elem.name}
                    </li>
                    )
                })
            }
        </ul>
        <div className=" w-[30%] border-b border-black flex flex-row justify-between p-1">
            <input type="text" className="outline-0"  placeholder="Search"/>
            <BsSearch className="text-[#e8e8e8]" size={23}/>
        </div>
    </div>
    </>  );
}
 
export default NavbarDown;
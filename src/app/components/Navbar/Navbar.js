
import Container from "../Container/Containar";
import NavbarDown from "./NavbarDown";
import NavbarUp from "./NavbarUp";

const Navbar = () => {
   
    return (<>
    <nav className="w-[100%] bg-[#ffbdbd] shadow-lg p-2">
        <Container>

            <div className="bg-[#ffbdbd] flex flex-col justify-between gap-5 w-[100%] p-3">
                <NavbarUp/>
                {/* <NavbarDown/> */}
            </div>
        </Container>
    </nav>
  
    </>  );
}
 
export default Navbar;
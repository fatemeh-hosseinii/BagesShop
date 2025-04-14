
import Container from "../Container/Containar";
import NavbarLogo from "./NavbarLogo";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
   
    return (<>
    <nav className="w-[100%] bg-[#ffbdbd] shadow-lg p-2">
        <Container>

            <div className="bg-[#ffbdbd] flex flex-row justify-between gap-5 w-[100%] p-3">
                <NavbarLogo/>
                <NavbarRight/>
            </div>
        </Container>
    </nav>
  
    </>  );
}
 
export default Navbar;
import Navbar from "./Navbar/Navbar";

const layout = ({children}) => {
    return ( <>
    <div>
        <Navbar/>
        {children}
    </div>
    
    </> );
}
 
export default layout;
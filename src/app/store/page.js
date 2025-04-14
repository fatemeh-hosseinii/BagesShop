import Container from "../components/Container/Containar";
import Product from "../components/Products/Product";

const store = () => {
    return (<>
   <Container>

    <div className="grid grid-cols-4 mt-4 gap-4">
     <Product/> 
    </div>
   </Container>
    </>  );
}
 
export default store;
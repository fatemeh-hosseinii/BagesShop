import Container from "../components/Container/Containar";
import FilterLeft from "../components/Filtering/FilteringLeft/FilterLeft";
import ShowFilterProduct from "../components/Filtering/ShowFilterProduct";

const ProductsPage = () => {


  return (
    <Container>
      <div className="w-[100%] flex flex-row mt-5  ">
    
        <FilterLeft/>
        <ShowFilterProduct/>
      </div>
    </Container>
    
  );
};

export default ProductsPage;

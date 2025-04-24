const page = async({params}) => {
    const { id } = params;
    const response = await fetch(`https://alisab.ir/products/show/${id}`);
    const data = await response.json();
    console.log(data);
    return ( <>
    <div className="w-[50%] bg-[red]">
      <img src={data.image} alt="" />
    </div>
    </> );
}
 
export default page;
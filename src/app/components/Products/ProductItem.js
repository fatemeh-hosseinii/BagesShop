const ProductItem = ({img,price,title}) => {
    return ( <>
        <img className="w-[75%] h-[40vh]" src={img} alt="" />
        <p className="text-[13px] font-bold">{title}</p>
        <div className="flex flex-row justify-between">
            <p>{price}</p>


        </div>
    </> );
}
 
export default ProductItem;
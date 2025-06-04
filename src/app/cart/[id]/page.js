const page = ({ params }) => {
    const { id } = params;
  
    return (
      <>
        <h1>آیدی محصول: {id}</h1>
      </>
    );
  };
  
  export default page;
  
const page = async ({ params }) => {
    const { id } = params;
  
    const res = await fetch(`http://localhost:3004/bages/${id}`);
  
    if (!res.ok) {
      return (
        <div style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>
          آیتم با شناسه {id} پیدا نشد!
        </div>
      );
    }
  
    const data = await res.json();
  console.log(data);
    return (
      <div className="flex flex-row w-[100%] bg-[blue] mt-4">
            <div className="w-[50%] bg-[red]">
                  <img src={data.image} alt="" />
            </div>
            <div className="bg-amber-950 w-[50%]">
                yyyyyyy
                
            </div>
      </div>
    );
  };
  
  export default page;
  
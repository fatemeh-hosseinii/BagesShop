import Container from "../components/Container/Containar";
import PostBages from "../components/DashbordComponents/DashbordBages/PostBages";

const Dashboard = () => {

  return (
    <Container>
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-[25px] font-bold">This page for admin</h2>
        <div className="flex flex-col w-full">
          <PostBages/>
          {/* <DashbordAccesories/> */}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;

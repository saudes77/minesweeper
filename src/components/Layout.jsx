import Board from "./Board";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="bg-indigo-100 flex w-full h-screen">
      <div className="flex-auto">
        <Board />
      </div>
      <div className="flex-auto">
        <Sidebar />
      </div>
    </div>
  );
}

export default Layout;
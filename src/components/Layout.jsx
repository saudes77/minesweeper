import Board from "./Board";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="bg-indigo-100 text-indigo-900 h-screen">
      <main className="m-auto max-w-screen-lg space-y-4">
        <Header />
        <div className="flex flex-wrap space-x-4">
          <div className="flex-auto"></div>
          <div className="flex-initial">
            <Board rows={10} columns={10} />
          </div>
          <aside className="flex-auto max-w-sm">
            <Sidebar />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Layout;
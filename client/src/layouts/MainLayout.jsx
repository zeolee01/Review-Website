import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  const location = useLocation()

  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <Navbar />
      <Outlet />
      {/* Only render the button if the current page is not '/write' */}
      {location.pathname !== "/write" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" && (
          <button
            type="button"
            className="fixed bottom-10 right-14 bg-blue-800 text-white pl-2 pr-2 rounded-full shadow-lg font-bold text-5xl "
            onClick={() => (window.location.href = "/write")}
          >
            +
          </button>
        )}
    </div>
  )
}

export default MainLayout

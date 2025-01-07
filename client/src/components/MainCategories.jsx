import { Link } from "react-router-dom"
import Search from "./Search"

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Reviews
        </Link>
        <Link
          to="/posts?cat=food"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Food Reviews
        </Link>
        <Link
          to="/posts?cat=cloth"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Cloth Reviews
        </Link>
        <Link
          to="/posts?cat=social-media"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Social Media Reviews
        </Link>
        <Link
          to="/posts?cat=automobile"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Automobile Reviews
        </Link>
        <Link
          to="/posts?cat=it-services"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          IT Services
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  )
}

export default MainCategories

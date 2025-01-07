import { Link, useSearchParams } from "react-router-dom"
import Search from "./Search"

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleFilterChange = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      })
    }
  }
  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      })
    }
  }

  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />

      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("general")}
        >
          All
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("food")}
        >
          Food & Beverage
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("cloth")}
        >
          Cloth
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("social-media")}
        >
          Social Media
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("automobile")}
        >
          Automobile
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("it-services")}
        >
          IT Services
        </span>
      </div>
    </div>
  )
}

export default SideMenu

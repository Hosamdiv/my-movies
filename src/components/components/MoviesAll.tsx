import ReactPaginate from "react-paginate";
import useAuthenticatedQuey from "../../hooks/useAuthenticatedQuery";
import { useState } from "react";
import { IMovie } from "../../interface";
import { Button } from "../ui/button";
import MovieSlider from "./MovieSlider";

const PaginatedItems = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState("popular"); // الفئة الحالية

  const { data } = useAuthenticatedQuey({
    queryKey: [`${selectedCategory}`, `${currentPage}`],
    url: `/movie/${selectedCategory}?page=${currentPage}`,
  });
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data?.selected + 1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  return (
    <div className="mt-10">
      <div className="flex justify-center space-x-4 mb-4">
        {["popular", "top_rated", "upcoming"].map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded font-semibold ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.replace("_", " ").toUpperCase()}
          </Button>
        ))}
      </div>
      <ReactPaginate
        previousLabel="< previous"
        nextLabel="next >"
        breakLabel="..."
        breakLinkClassName="px-2 py-1 border rounded hover:bg-red-700 sm:px-3 sm:py-1"
        pageCount={50}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
        containerClassName="flex flex-wrap justify-center gap-2 sm:gap-3"
        pageClassName="inline-block"
        pageLinkClassName="px-2 py-1 border rounded hover:bg-red-700 sm:px-3 sm:py-1"
        previousClassName="inline-block"
        previousLinkClassName="px-2 py-1 border rounded hover:bg-gray-200 sm:px-3 sm:py-1"
        nextClassName="inline-block"
        nextLinkClassName="px-2 py-1 border rounded hover:bg-gray-200 sm:px-3 sm:py-1"
        activeClassName="bg-blue-500 py-1 rounded text-white"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-5">
        {data?.results?.map((item: IMovie) => (
          <MovieSlider key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default PaginatedItems;

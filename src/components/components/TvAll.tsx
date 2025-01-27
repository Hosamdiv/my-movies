import ReactPaginate from "react-paginate";
import useAuthenticatedQuey from "../../hooks/useAuthenticatedQuery";
import { useEffect, useState } from "react";
import { ITv } from "../../interface";
import { Button } from "../ui/button";
import TvSlider from "./TvSlider";
import { Input } from "@chakra-ui/react";

const PaginatedTv = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState("popular");
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const { data } = useAuthenticatedQuey({
    queryKey: isSearching
      ? [`search`, query, `${currentPage}`]
      : [selectedCategory, `${currentPage}`],
    url: isSearching
      ? `/search/tv?query=${query}&page=${currentPage}`
      : `/tv/${selectedCategory}?page=${currentPage}`,
  });
  useEffect(() => {
    if (query.trim()) {
      setIsSearching(true);
      setCurrentPage(1);
    } else {
      setIsSearching(false);
    }
  }, [query]);
  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data?.selected + 1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  return (
    <div className="mt-10">
      <div className="w-[50%] m-auto mb-5">
        <Input
          type="text"
          placeholder="Search for a movie..."
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded "
        />
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        {["popular", "top_rated", "airing_today"].map((category) => (
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
        {data?.results?.map((item: ITv) => (
          <TvSlider key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default PaginatedTv;

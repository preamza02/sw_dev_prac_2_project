export default function SearchBar() {
  return (
    <div className="mb-6 flex h-[70px] items-center justify-center space-x-4 bg-[#20274D] p-10">
      <div className="flex items-center rounded-lg bg-white px-2 py-1 text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 16a10 10 0 1116.39 8.61M4.05 19.05A7 7 0 1017 17m-1-5v1"
          />
        </svg>
        <input type="text" placeholder="Search...." className="bg-transparent px-2 outline-none" />
      </div>
      <div className="flex items-center space-x-4 rounded-xl bg-white px-1">
        <div className="flex flex-col">
          <label htmlFor="departure-date" className="text-sm font-medium text-gray-700">
            Departure Date
          </label>
          <input
            type="date"
            id="departure-date"
            className="h-[30px] w-fit max-w-40 rounded-lg px-4 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="arrival-date" className="text-sm font-medium text-gray-700">
            Arrival Date
          </label>
          <input
            type="date"
            id="arrival-date"
            className="h-[30px] w-fit max-w-40 rounded-lg px-4 py-2"
          />
        </div>
      </div>

      <button className="w-fit rounded bg-blue-500 px-6 py-2 text-white">Search</button>
    </div>
  );
}

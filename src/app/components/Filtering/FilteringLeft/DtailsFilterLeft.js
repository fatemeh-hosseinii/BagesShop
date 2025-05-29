"use client";
import { useRouter } from "next/navigation";

const DtailsFilterLeft = ({ categories, onFilter }) => {
  const router = useRouter(); 
  const handleChange = (e) => {
    const selectedId = Number(e.target.value);
    onFilter(selectedId);

    const query = selectedId === 0 ? "" : `?category=${selectedId}`;
    router.push(`/shop${query}`);
  };

  return (
    <div className="w-full max-w-sm mx-aut">
      <div className="relative">
        <select
          onChange={handleChange}
          className="w-full appearance-none bg-gray-600 text-gray-100 text-sm rounded-lg px-4 py-3 pr-10 shadow-md focus:outline-none focus:ring-2 transition-all duration-200"
        >
          <option value="0" className="text-gray-400">
            All Product
          </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id} className="text-gray-900">
              {cat.name}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="w-4 h-4 text-[black]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default DtailsFilterLeft;

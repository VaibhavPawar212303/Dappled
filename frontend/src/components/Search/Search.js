import React, { useState } from "react";
import Card from "../Card/Card";

function Search({ projects }) {
  const [search, setSearch] = useState("");
  return (
    <div className="mb-96">
      <div class="max-w-md mx-auto mr-20">
        <div class="flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            class="peer h-full w-full outline-none text-xl text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search project.."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 mr-20">
            {projects
              .filter((project) =>
                project.pro_name.toLowerCase().includes(search)
              )
              .map((project) => (
                <Card
                  project_id={project.id}
                  project_name={project.pro_name}
                  project_Description={project.pro_desc}
                />
              ))}
          </div>
        </div>
  );
}

export default Search;

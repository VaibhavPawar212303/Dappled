import React, { useState } from "react";
import Search from "../Search/Search";

function Navbar({ items }) {
  return (
    <>
      <div className="flex flex-row mt-5 mr-10 ml-10 mt-10">
        <div class="flex-1">
          <a class="">
            <img
              src="https://www.testrigtechnologies.com/wp-content/uploads/2020/05/logo-9.png"
              class="h-6 mr-3 sm:h-9"
              alt="TestRig Logo"
            />
          </a>
        </div>
        <div>
          <div className="">
            <Search projects={items} />
          </div>
        </div>
        <div class="flex-1">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <a href="/createproject">Create Project</a>
          </button>
        </div>
      </div>
      <hr/>
    </>
  );
}

export default Navbar;

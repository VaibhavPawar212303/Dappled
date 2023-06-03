import React, { useState } from "react";
import Popup from "reactjs-popup";

const deleteProject = (id) => {
  fetch(`https://testrig.onrender.com/api/project/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};

//get the card and navigates to the details page
const goToDetails = (project_id) => {
  localStorage.setItem("projectID", project_id);
};

const Card = ({ project_id, project_name, project_Description }) => {
  //grab the project data
  const [projectDetails, setProjectDetails] = useState({
    projectName: "",
    projectDesc: "",
  });

  //handle the changes
  const handleChange = (event) => {
    setProjectDetails({
      ...projectDetails,
      [event.target.name]: event.target.value,
    });
  };

  //retrive the data
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    setProjectDetails({ projectName: "", projectDesc: "" });
  };

  const updateProject = (id) => {
    fetch(`https://testrig.onrender.com/api/project/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        proName: projectDetails.projectName,
        proDesc: projectDetails.projectDesc,
      }),
    }).then((response) => {
      return response.json();
    });
  };
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div class="mt-32 w-64 h-44 rounded shadow-xl mr-10" key={project_id}>
        <div className="dropdown">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            onClick={handleDropDown}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div
            id="dropdown"
            className={`z-10 w-44 bg-white rounded divide-y ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="absolute z-15 w-20 rounded-md bg-slate-100 h-20 mt-2 drop-shadow-2xl">
              <li>
                <a class="px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">
                  {" "}
                  <button
                    onClick={() => deleteProject(project_id)}
                    className="absolute mt-2 cursor-pointer"
                  >
                    Delete
                  </button>
                </a>
              </li>
              <li>
                <Popup
                  key={project_id}
                  position="right"
                  trigger={
                    <a className="absolute ml-4 mt-4 cursor-pointer"> Update</a>
                  }
                >
                  {(close) => (
                    <form
                      onSubmit={handleSubmit}
                      className="bg-white drop-shadow-2xl"
                    >
                      <div className="flex flex-col items-center h-96 w-96 mt-8 font-sans text-lg">
                        <button
                          onClick={() => close()}
                          className="absolute ml-80 mt-4"
                        ></button>
                        <div className="mb-4 mt-16">Update Project</div>
                        <div
                          className="mb-4 ml-2 flex flex-col items-center z-10"
                          id="projectname"
                        >
                          Update Project Name
                          <input
                            type="text"
                            className="h-10 border-b-4"
                            placeholder="Enter your project name"
                            name="projectName"
                            value={projectDetails.projectName}
                            onChange={handleChange}
                          ></input>
                        </div>
                        <div
                          className="mb-4 ml-2 flex flex-col items-center "
                          id="projectname"
                        >
                          Describe Your Project
                          <input
                            type="text"
                            className="h-10 border-b-4"
                            name="projectDesc"
                            placeholder="Enter your project name"
                            value={projectDetails.projectDesc}
                            onChange={handleChange}
                          ></input>
                        </div>
                        <button
                          type="submit"
                          class="text-white w-44 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          onClick={() => {
                            updateProject(project_id);
                          }}
                        >
                          Update Project
                        </button>
                      </div>
                    </form>
                  )}
                </Popup>
              </li>
            </ul>
          </div>
        </div>
        {/* -----------------------Card body ---------------------- */}
        <div className="">
          <div className="">
            <div
              className="px-3 py-4"
              key={project_id}
              onClick={() => goToDetails(project_id)}
            >
              <a href="/">
                <div class="flex flex-row font-bold mb-2 items-center ml-24 w-10">
                  {project_name}
                </div>
                <div class="text-gray-700 mb-2 ml-20">
                  {project_Description}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

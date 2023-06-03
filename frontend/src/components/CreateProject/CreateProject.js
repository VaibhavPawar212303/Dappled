import React, { useState } from "react";
function CreateProject() {
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

  const createProject = (event) => {
    fetch("https://testrig.onrender.com/api/project", {
      method: "POST",
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

  return (
    <div className="flex flex-col items-center mt-40">
      <div class="block p-6 rounded-lg shadow-2xl bg-white max-w-md">
        <form onSubmit={handleSubmit}>
          <label
            for="email"
            class="block mb-2 text-xl font-medium text-gray-900 dark:text-white  uppercase mb-5"
          >
            Project Name
          </label>
          <div class="form-group mb-10">
            <input
              type="text"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        mb-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
              name="projectName"
              value={projectDetails.projectName}
              onChange={handleChange}
            />
            <label
              for="email"
              class="block mb-2 text-xl font-medium text-gray-900 dark:text-white  uppercase mb-5"
            >
              Describtion
            </label>
          </div>
          <div class="form-group mb-6">
            <textarea
              class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              name="projectDesc"
              placeholder="Describtion"
              value={projectDetails.projectDesc}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            onClick={createProject}
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;

import React, { Component } from "react";

const goToTestDetails = (item_id) => {
  localStorage.setItem("Build_Id", item_id);
};

export default class Builds extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/build", {
      method: "GET",
      accept: "application/json",
      "Content-Type": "application/json",
    })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          items: responseData,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      );
    return (
      <div>
        {items.map((item) => {
          return (
            <div
              key={item._id}
              class="mt-2"
              onClick={() => goToTestDetails(item.Build_Id)}
            >
              <div class="list-group">
                <a
                  href="/testDetails"
                  class="list-group-item list-group-item-action flex-column align-items-start active"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Build Id:- {item._id}</h5>
                  </div>
                  <p class="mb-1">Build Type:-{item.Build_Description}</p>
                  <small>Build start:-{item.BuildData.startedTestsAt}</small>
                  <br />
                  <small>Build end:-{item.BuildData.endedTestsAt}</small>
                  <br />
                  <div>
                    <span class="mr-2 badge badge-success">
                      Total Tests :- {item.BuildData.totalTests}
                    </span>
                    <span class="mr-2 badge badge-danger">
                      Total Tests Failed :- {item.BuildData.totalFailed}
                    </span>
                    <span class="badge badge-warning">
                      Total Tests Skipped :- {item.BuildData.totalSkipped}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

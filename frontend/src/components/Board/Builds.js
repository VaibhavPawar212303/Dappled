import React, { Component } from "react";
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
    })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          items: responseData.buildData,
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
            <div key={item.id} class="mt-2">
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start active"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Build :- {item.id}</h5>
                  </div>
                  <p class="mb-1">Build Type:-{item.Build_Description}</p>
                  <small>Build start:-{item.BuildStartAt}</small>
                  <br />
                  <small>Build end:-{item.BuildEndAt}</small>
                  <br />
                  <div>
                    <span class="mr-2 badge badge-success">
                      Total Tests :- {item.totalTests}
                    </span>
                    <span class="mr-2 badge badge-danger">
                      Total Tests Failed :- {item.totalTestsFailed}
                    </span>
                    <span class="badge badge-warning">
                      Total Tests Skipped :- {item.totalTestsSkipped}
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

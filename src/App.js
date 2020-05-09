import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class CatalogueOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startPoint: false,
      endPoint: false,
      x: [],
      y: [],
    };
  }
  createTable = () => {
    let table = [];
    for (let i = 0; i < 26; i++) {
      let children = [];
      for (let j = 0; j < 100; j++) {
        children.push(
          <td
            onMouseDown={(e) => {
              this.onMouseDown(e, i, j);
            }}
            onMouseUp={this.onMouseUp}
          ></td>
        );
      }
      table.push(<tr>{children}</tr>);
    }
    return table;
  };
  onMouseOver = () => {};
  onMouseDown = (e, i, j) => {
    this.state.x.push(i);
    this.state.y.push(j);
    console.log(this.state.x + "---" + this.state.y);
    if (this.state.startPoint) {
      this.startPoint();
      e.target.className = "start-cell";
      console.log("start at", i, j);
    } else if (this.state.endPoint) {
      this.endPoint();
      e.target.className = "end-cell";
      console.log("end at", i, j);
    } else {
      if (e.target.className !== "highlighted") {
        e.target.className = "highlighted";
      } else {
        e.target.className = "";
      }
    }
  };
  onMouseUp = () => {};

  startPoint = () => {
    this.setState({
      startPoint: !this.state.startPoint,
    });
  };

  endPoint = () => {
    this.setState({
      endPoint: !this.state.endPoint,
    });
  };

  render() {
    return (
      <div>
        <table cellpadding="10" cellspacing="1" id="our_table">
          {this.createTable()}
        </table>
        <form>
          <input type="button" value="START POINT" onClick={this.startPoint} />
          <input type="button" value="END POINT" onClick={this.endPoint} />
          <input type="button" value="START" />
        </form>
      </div>
    );
  }
}

export default CatalogueOverlay;

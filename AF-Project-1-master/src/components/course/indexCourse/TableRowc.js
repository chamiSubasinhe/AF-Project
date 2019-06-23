import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import UpdateAdmin from "../updateAdmin/UpdateAdmin";
import axios from "axios";
import ReactDOM from "react-dom";

class TableRow extends Component {
   /* constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios
            .get("http://localhost:3000/admin/delete/" + this.props.obj._id)
            .then(console.log("Deleted"))
            .catch(err => console.log(err));
    }

    update() {
        ReactDOM.render(<UpdateAdmin />, document.getElementById("root"));
    }*/

    render() {
        return (
            <tr>
                <td>{this.props.obj.cId}</td>
                <td>{this.props.obj.cName}</td>
                <td>{this.props.obj.iName}</td>
                <td>
                    {/* <BrowserRouter>
            {" "}
            <Link
              to={"/edit/" + this.props.obj._id}
              className="btn btn-primary"
            >
              Edit
            </Link>
          </BrowserRouter> */}
                    <button  className="btn btn-warning">
                        Assign
                    </button>
                </td>

            </tr>
        );
    }
}

export default TableRow;
import "./form.css";
import { Component } from "react";


class FormClass extends Component {

    constructor() {
        super();
        this.state = {
            data: "",
        };
    }
    reset = () => {
        this.setState({ data: "" });
    };

    getData = (e) => {
        this.setState({ data: e.target.value });
    };


    render() {
        return (
            <div>
                <div class="container">
                    <div class="content">
                        <input type="text" id="enter" value={this.state.data} onChange={this.getData} />
                        <button id="clear" value="Reset" onClick={this.reset}>Reset</button>
                    </div>
                    <p>Data: {this.state.data}</p>
                </div>
            </div >
        );
    }

}

export default FormClass;
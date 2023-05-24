import { Component } from 'react';
import './form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: ''

        }
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onKeyChange(this.state.user)
        this.setState(() => ({
            user: {
                name: "",
                email: ""
            }
        }));
    };
    render() {
        return (
            <div class="login-page">
                <div class="form">
                    <form onSubmit={this.handleSubmit}>
                        <input class="form-control" name="name" type="text" placeholder="username" onChange={this.handleInputChange} required />
                        <input class="form-control" name="email" type="email" placeholder="Email" ormControlName="email" onChange={this.handleInputChange}  required />
                        <button type="submit" class="formbutton" value="Add">ADD</button>
                    </form>
                </div>
            </div>

        );

    }
}
export default Form;

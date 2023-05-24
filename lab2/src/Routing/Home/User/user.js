import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';
import './user.css';

class User extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    renderTableRows() {
        const { list } = this.props;
        console.log(list)

        if (list && list.length > 0) {
            return list.map((student, index) => (
                <tr key={student.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td><NavLink  to={"/details/:id"} style={{textDecoration:"none"}}><div class="nav-link"><button type="button" class="btn btn-success"><i class="fa-regular fa-pen-to-square"></i></button></div></NavLink></td>
                    
                </tr>
            ));
        } else {
            return (
                <tr>
                    <td colSpan={4}>No Students</td>
                </tr>
            );
        }
    }
    render() {
        return (
            <table class="table-fill">
                <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Name</th>
                        <th class="text-center">email</th>
                        <th class="text-center">view</th>
                    </tr>
                </thead>
                <tbody class="table-hover" >
                    
                        {this.renderTableRows()}
                    
                </tbody>
            </table>
        )
    }
}

export default User;
import { Component } from 'react'

import Form from '../Form/form'
import User from '../User/user'

class Home extends Component { 
    constructor() {
        super();
        this.state = {
            AllStudents : []
        }
    }
    addNewUser = (user)=>{
        this.setState((prevState) => ({
            AllStudents: [
                ...prevState.AllStudents,
                user
            ]
        }));
    }
    render() {
        return (
            
            <div>
                <Form onKeyChange={this.addNewUser} />
                <User list={this.state.AllStudents} />
           </div>
        )
    }
}

export default Home;


import React,{Component} from 'react';
import API from "../../util/Api";
// import style
import DataTable from "../DataTable/DataTable";

export default class EmployeeCard extends Component{
    state = {
        users: [{}]
    }

    headings = [
        {name: "imgage", width: "15%"},
        {name: "name", width: "15%" },
        {name: "phone", width: "15%"},
        {name: "email", width: "15%"},
        {name: "dob", width: "15%"}
    ]

    componentDidMount(){
        API.getUsers()
        .then(res => {
            this.setState({
                users: res.data.results
            })
           
        })
    }

    render(){
        // console.log(this.state)
        return (
            <>
            <DataTable
                headings={this.headings}
                users={this.state.users}
            />
            </>
        )
    }
}
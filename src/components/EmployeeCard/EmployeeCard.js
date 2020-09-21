import React,{Component} from 'react';
import API from "../../util/Api";
// import style
import DataTable from "../DataTable/DataTable";
import NavBar from "../NavBar/NavBar";

export default class EmployeeCard extends Component{
    state = {
        users: [{}],
        filteredList: [{}],
        order: "descend"
    }

    headings = [
        {name: "imgage", width: "15%"},
        {name: "name", width: "15%" },
        {name: "phone", width: "15%"},
        {name: "email", width: "15%"},
        {name: "age", width: "15%"}
    ]

    sort = (name) => {
       // check to see is this.state.order == descend
        // set state order = ascend
    // if false
        //this,setstate = descend
    }

    //compare function
        // if order = ascend
        

    handleSearch = e => {
        const filter = e.target.value;

        const filteredList = this.state.users.filter(item =>{
            //turn obj into one string
            let values = Object.values(item).join("").toLowerCase();
            //return obj that dosent -1
           return values.indexOf(filter.toLowerCase()) !== -1;
        })
       // console.log(filteredList)
        this.setState({
            filteredList: filteredList
        })

    }

    componentDidMount(){
        API.getUsers()
        .then(res => {
            this.setState({
                users: res.data.results,
                filteredList: res.data.results
            })
           
        })
    }

    render(){
        // console.log(this.state)
        return (
            <>
            <NavBar
            handleSearch = {this.handleSearch}
            />
            <DataTable
                headings={this.headings}
                users={this.state.filteredList}
                sort={this.sort}
            />
            </>
        )
    }
}
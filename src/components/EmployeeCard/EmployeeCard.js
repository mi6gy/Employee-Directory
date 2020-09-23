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
        {name: "Employee Photo", width: "15%"},
        {name: "Name", width: "15%" },
        {name: "Phone", width: "15%"},
        {name: "E-mail", width: "15%"},
        {name: "Age", width: "10%"}
    ]

    // sort = (name) => {
    //    // check to see is this.state.order == descend
    //     // set state order = ascend
    // // if false
    //     //this,setstate = descend
    // }

    //compare function
        // if order = asce


        const handleSort = (heading) => {
            let currentOrder = developerState.headings
              .filter((elem) => elem.name === heading)
              .map((elem) => elem.order)
              .toString();
        
            if (currentOrder === "descend") {
              currentOrder = "ascend";
            } else {
              currentOrder = "descend";
            }
        
            const compareFnc = (a, b) => {
              if (currentOrder === "ascend") {
                if (a[heading] === undefined) {
                  return 1;
                } else if (b[heading] === undefined) {
                  return -1;
                } else if (heading === "name") {
                  return a[heading].first.localeCompare(b[heading].first);
                } else if (heading === "dob") {
                  return a[heading].age - b[heading].age;
                } else {
                  return a[heading].localeCompare(b[heading]);
                }
              } else {
                if (a[heading] === undefined) {
                  return 1;
                } else if (b[heading] === undefined) {
                  return -1;
                } else if (heading === "name") {
                  return b[heading].first.localeCompare(a[heading].first);
                } else if (heading === "dob") {
                  return b[heading].age - a[heading].age;
                } else {
                  return b[heading].localeCompare(a[heading]);
                }
              }
            };
            const sortedUsers = developerState.filteredUsers.sort(compareFnc);
            const updatedHeadings = developerState.headings.map((elem) => {
              elem.order = elem.name === heading ? currentOrder : elem.order;
              return elem;
            });
        
            setDeveloperState({
              ...developerState,
              filteredUsers: sortedUsers,
              headings: updatedHeadings,
            });
          };
        
          const handleSearchChange = (event) => {
            const filter = event.target.value;
            const filteredList = developerState.users.filter((item) => {
              let values =
                item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
              console.log(filter, values);
              if (values.indexOf(filter.toLowerCase()) !== -1) {
                return item;
              }
            });
        
            setDeveloperState({ ...developerState, filteredUsers: filteredList });
          };

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
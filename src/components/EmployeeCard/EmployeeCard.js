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

        handleSort = heading => {
            console.log(heading)
          if(this.state.order === "descend"){
            this.setState({
              order: "ascend"
            })
          }
          else{
            this.setState({
              order: "descend"
            })
          }
          
        
      const compareFnc = (a, b) => {
          // console.log("YOOOO", a,b);
          if (this.state.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else if (heading === "age") {
              return a[heading].dob - b[heading].dob;
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
            } else if (heading === "age") {
              return b[heading].dob - a[heading].dob;
            } else {
              return b[heading].localeCompare(a[heading]);
            }
          }
      }
         const sortedUsers = this.state.filteredList.sort(compareFnc);
        this.setState({ filteredList: sortedUsers })
        // const updatedHeadings = developerState.headings.map((elem) => {
        //   elem.order = elem.name === heading ? currentOrder : elem.order;
        //   return elem;
         
        // );  
        }
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
        return (
            <>
            <NavBar
            handleSearch = {this.handleSearch}
            />
            <DataTable
                headings={this.headings}
                users={this.state.filteredList}
                sort={this.sort}
                handleSort={this.handleSort}
            />
            </>
        )
    }
  
  };
  
  // setDeveloperState({
            //   ...developerState,
            //   filteredUsers: sortedUsers,
            //   headings: updatedHeadings,
            // });
          
        
          // const handleSearchChange = (event) => {
          //   const filter = event.target.value;
          //   const filteredList = developerState.users.filter((item) => {
          //     let values =
          //       item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
          //     console.log(filter, values);
          //     if (values.indexOf(filter.toLowerCase()) !== -1) {
          //       return item;
          //     }
          //   });
        
            // setDeveloperState({ ...developerState, filteredUsers: filteredList });
          // };

    // handleSearch = e => {
    //     const filter = e.target.value;

    //     const filteredList = this.state.users.filter(item =>{
    //         //turn obj into one string
    //         let values = Object.values(item).join("").toLowerCase();
    //         //return obj that dosent -1
    //        return values.indexOf(filter.toLowerCase()) !== -1;
    //     })
    //    // console.log(filteredList)
    //     this.setState({
    //         filteredList: filteredList
    //     })

    // }
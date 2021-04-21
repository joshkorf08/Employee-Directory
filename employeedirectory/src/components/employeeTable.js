import React, { Component } from "react";
import API from "../utils/API";
import EmployeeDetails from "./EmployeeDetails";
import Search from "./Search"
class EmployeeTable extends Component {
    state = {
        search: "",
        result: [],
        filteredResults: []
    };


    componentDidMount() {
        this.searchEmployees();
    };

    searchEmployees = () => {
        API.search()
            .then(res => this.setState({ result: res.data.result, filteredResults: res.data.results}))
            .catch(err => console.log(err));
    };

    handleFormSearch = event => {
        event.preventDefault();
        const value = event.target.value;
        const filterEmployee = this.state.results.filter(
            employee => {
                let userValue = Object.values(employee).join("").toLowerCase();
                return userValue.indexOf(value.toLowerCase()) !== -1;
            }
        );
        this.setState({ filteredResults: filterEmployee })
        };


        render() {
            return (
                <div>
                    <Search
                    handleFormSearch={this.handleFormSearch}/>
                    {this.state.result !== undefined ? (
                        this.state.filteredResults.map((user) => {

                            return (

                                <EmployeeDetails
                                    firstName={user.name.first}
                                    lastName={user.name.ast}
                                    Age={user.age}
                                    Email={user.email}

                                />
                            )
                        })
                    ) :
                        (
                            <h3>No Results to Display</h3>
                        )}
                </div>
            );
        }
    }

    export default EmployeeTable;
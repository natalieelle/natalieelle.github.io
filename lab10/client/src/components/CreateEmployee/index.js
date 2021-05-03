import React from "react";

class CreateEmployee extends React.Component {
    createEmployee(event) {
        //Stop (prevent) the 'default' form action
    event.preventDefault();
    // find the element with id= name
                let name = document.querySelector("#employeeName");

                let age = document.querySelector("#employeeAge");

                fetch("/api/employees/" + name.value + "/" + age.value, {
                    "method": "post"
                }).then((res) => {
                    //parse the string into a javascript object and return
                    return res.json();
                })
                .then((processed) => {
                    console.log(processed);
                });
}

    
    render() {
        return(
            <div><hr></hr>
            <h2>Add Employee</h2>
            <form onSubmit={this.createEmployee}>
            <input id = "employeeName" type="text"/>
            <input id = "employeeAge" type="text"/>
            <button>Submit</button>
                </form>
                <hr></hr>
                </div>
                )
            }
}

export default CreateEmployee;
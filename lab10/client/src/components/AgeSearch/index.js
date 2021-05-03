import React from "react";

class AgeSearch extends React.Component {
    readAge(event) {
        //Stop (prevent) the 'default' form action
    event.preventDefault();
    // find the element with id= age
                let element = document.querySelector("#age");
                fetch("api/employees/age/" + element.value)
                .then((res) => {
                    //parse the string into a javascript object and return
                    return res.json();
                })
                .then((processed) => {
                    //find the element with id reporting area
                    let reporting = document.querySelector("#reportingArea");
                    //Does the processed object hace a property called
                    if(processed.error) {
                        reporting.innerHTML = processed.error;
                    } else {
                        reporting.innerHTML = processed.age;
                    }
                });
                element.value = "";
}
            render() {
        return(
            <div>
            <h2>Age</h2>
            <form onSubmit={this.readAge}>
            <input id = "age" type="text"/>
            <button>Submit</button>
                </form>
                </div>
                )
            }
}

export default AgeSearch;
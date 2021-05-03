import React from "react";

class NameSearch extends React.Component {
    readName(event) {
        //Stop (prevent) the 'default' form action
    event.preventDefault();
    // find the element with id= name
                let element = document.querySelector("#name");
                fetch("/api/employees/name/" + element.value)
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
                        reporting.innerHTML = processed.name;
                    }
                });
                element.value = "";
}
            render() {
        return(
            <div>
            <h2>Name</h2>
            <form onSubmit={this.readName}>
            <input id = "name" type="text"/>
            <button>Submit</button>
                </form>
                </div>
                )
            }
}

export default NameSearch;
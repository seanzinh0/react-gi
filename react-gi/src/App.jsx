import React from 'react';
import './App.css'
import BasicInfo from "./components/BasicInfo.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [{name: "John Doe", phoneNumber: "123-456-7890", dob: "11/11/1111"},
                {name: "Sean Doe", phoneNumber: "555-222-1111", dob: "10/15/1945"},
                {name: "James Dean", phoneNumber: "535-212-1211", dob: "12/09/1942"},
            ]
        };
    }

    render() {
        return (
            <>
                <div className="flex-wrap">
                {this.state.person.map((person, index) => (
                    <BasicInfo key={index} person={person} />
                ))}
                </div>
            </>
        )
    }
}

export default App

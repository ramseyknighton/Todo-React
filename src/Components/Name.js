import React from 'react';

class Name extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div>
                <h1>My Name is Ramsey</h1>
            </div>
        );
    }
};

class Hobby extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div>
                <h1>I like to read</h1>
            </div>
        );
    }
};

export default Name;
import React from 'react';

class Example extends React.Component {
	constructor() {
		super();
		this.state = 'hello';
	}

	render() {
		return <div>{this.state}</div>;
	}
}

export default Example;

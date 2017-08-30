// @flow

import React, { Component } from 'react'

type Name = {
	first?: string,
	last: string,
}

type Props = {
	name: Name,
	func: (string, number) => number,
	names: Name[],
}

type State = {}

class Comp extends React.Component<Props, State> {
	render() {
		return (
			<div>
				Hello World {this.props.name.first}
			</div>
		)
	}
}

const Stateless = (props: Props) => <div>Hello</div>

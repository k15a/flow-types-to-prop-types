'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Comp extends _react2.default.Component {
	render() {
		return _react2.default.createElement(
			'div',
			null,
			'Hello World ',
			this.props.name.first
		);
	}
}

Comp.propTypes = {
	name: require('prop-types').shape({
		first: require('prop-types').string,
		last: require('prop-types').string.isRequired
	}).isRequired,
	func: require('prop-types').func.isRequired,
	names: require('prop-types').arrayOf(require('prop-types').shape({
		first: require('prop-types').string,
		last: require('prop-types').string.isRequired
	})).isRequired
};


const Stateless = props => _react2.default.createElement(
	'div',
	null,
	'Hello'
);
Stateless.propTypes = {
	name: require('prop-types').shape({
		first: require('prop-types').string,
		last: require('prop-types').string.isRequired
	}).isRequired,
	func: require('prop-types').func.isRequired,
	names: require('prop-types').arrayOf(require('prop-types').shape({
		first: require('prop-types').string,
		last: require('prop-types').string.isRequired
	})).isRequired
};

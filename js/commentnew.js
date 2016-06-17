var CommentBox = React.createClass({
	render: function() {
		return(
			React.createElement('div', {ClassName: "myclass" },
				"Hello, this React component")
			);
		}
})

ReactDOM.render(React.createElement(CommentBox,null),
	document.getElementById('content')
	);
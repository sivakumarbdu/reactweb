var CommentList = React.createClass({
	render: function(){
		return(
			<h3> Comment list </h3>
			);
	}
})

var CommentForm = React.createClass({
	render: function() {
		return(
		<h2> Comment Form </h2>
		);
	}
});

var CommentBox = React.createClass({
	render: function() {
		return (
		<div>
		<h1> Comment box </h1>
		<CommentList />
		<CommentForm />
		</div>
		);
	}
});

ReactDOM.render(React.createElement(CommentBox, null),
document.getElementById('content'))
var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
			Welcome, Here is comment box
			</div>
			);
	}
})

ReactDOM.render(
<CommentBox/>,
document.getElementById('content')
);

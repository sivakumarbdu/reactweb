var data = [{id:1, name: "sivakumar", comments: "Really usefull."},
{id: 2, name: "Williams", comments: "Nice"}]
var CommentBox = React.createClass({
	render: function() {
		return(
			<CommentList data={this.props.data} />
			);
	}
});


var CommentList = React.createClass({
	render: function() {
		var commentsNode = this.props.data.map(function(comment) {
			return (
			<div class="nodeComments"> <br/>
			 Name : {comment.name} <br/>
			 id: {comment.id} <br/>
			 comments: {comment.comments}
			</div>
			);
			})

			return(
			<div class="box">
			{commentsNode}
			</div>
			);
	}
})

ReactDOM.render(<CommentBox data={data} />,
document.getElementById('content'));


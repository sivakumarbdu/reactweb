var Comment = React.createClass({
	render: function(){
		return(
			<div className="Comment">
			  <div className="author">
			  {this.props.author}
			  </div>
			   	{this.props.children}
			</div>
			);
	}
});

var CommentList = React.createClass({
	render: function(){
		return(
		<div className="commentListing">
		<Comment author="Sivakumar"> author 1 </Comment>
		<Comment author="SK">  author 2 	</Comment>
		</div>
		);
	}
});


ReactDOM.render(React.createElement(CommentList, null),
document.getElementById('content'));

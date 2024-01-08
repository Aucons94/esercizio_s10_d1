import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
	state = {
		selected: false,
	};

	handleClick = () => {
		const { selected } = this.state;
		this.setState({ selected: !selected }, () => {
			if (this.state.selected) {
				this.props.setAsinState(this.props.book.asin);
			}
		});
	};

	render() {
		return (
			<>
				<Card onClick={this.handleClick} style={{ border: this.state.selected ? "3px solid red" : "none" }}>
					<Card.Img variant="top" src={this.props.book.img} />
					<Card.Body>
						<Card.Title style={{ color: "black" }}>{this.props.book.title}</Card.Title>
					</Card.Body>
				</Card>
			</>
		);
	}
}
export default SingleBook;

import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	h2 {
		text-align: center;
		color: #BF0000
	}

	#forms {
		max-width: 450px;
		background: #FAFAFA;
		padding: 30px;
		margin: 50px auto;
		box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
		border-radius: 10px;
		border: 6px solid #305A72;
	}

	.form-group {
		color: #BF0000;
	}
`;

export const Contact = () => (
	<Styles>
		<Form id="forms">
			<h2>Contact Us</h2>

			<Form.Row>
				<Form.Group as={Col} controlId="fname">
					<Form.Label>First Name</Form.Label>
					<Form.Control placeholder="John" />
				</Form.Group>
				
				<Form.Group as={Col} controlId="lname">
					<Form.Label>Last Name</Form.Label>
					<Form.Control placeholder="Smith" />
				</Form.Group>
			</Form.Row>

			<Form.Group controlId="email">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="JohnSmith@Gmail.com" />
			</Form.Group>

			<Form.Group controlId="message">
				<Form.Label>Message</Form.Label>
				<Form.Control as="textarea" rows="3" />
			</Form.Group>

			<Button variant="primary" type="Submit">Submit</Button>
		</Form>
	</Styles>
)
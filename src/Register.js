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



export function Register() {

	const [validated, setValidated] = React.useState(false);

	const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	}
	return(
	<Styles>
		<Form id="forms" noValidate validated={validated} onSubmit={handleSubmit}>
			<h2>Sign-Up</h2>

			<Form.Group controlId="fname">
				<Form.Label>First Name</Form.Label>
				<Form.Control 
					placeholder="John"
					required
					type="text" 
					/>
				<Form.Control.Feedback>Looks Good! </Form.Control.Feedback>
			</Form.Group>
			
			<Form.Group controlId="lname">
				<Form.Label>Last Name</Form.Label>
				<Form.Control 
					placeholder="Smith"
					required
					type="text" 
				/>
				<Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
			</Form.Group>

			<Form.Group controlId="username">
				<Form.Label>Username</Form.Label>
				<Form.Control 
					placeholder="Enter a Username" 
					required
					type="text"
				/>
				<Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">Please enter a username</Form.Control.Feedback>
			</Form.Group>

			<Form.Row>
				<Form.Group as={Col} controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control 
						type="email" 
						placeholder="JohnSmith@Gmail.com"
						required 
					/>
					<Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
				</Form.Group>

				<Form.Group as={Col} controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control 
						type="password" 
						placeholder="password"
						required 
					/>
					<Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
				</Form.Group>
			</Form.Row>

			<Button variant="primary" type="Submit">Submit</Button>
		</Form>
	</Styles>
	)
}

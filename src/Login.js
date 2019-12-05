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

export const Login = () => (
	<Styles>
		<Form id="forms">
			<h2>Login</h2>


			<Form.Group as={Col} controlId="email">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Enter Email" />
			</Form.Group>

			<Form.Group as={Col} controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Enter Password" />
			</Form.Group>

			<Form.Row>
				<Col>
					<Button variant="primary" type="Submit">Submit</Button>
				</Col>
				<Col>
					<Button href="/register" variant="secondary" type="Submit">Sign-Up</Button>
				</Col>
			</Form.Row>
		</Form>
	</Styles>
)
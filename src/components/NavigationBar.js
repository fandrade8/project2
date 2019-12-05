import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import img from '../assets/icon.png';

const Styles = styled.div`
	.navbar-brand, .navbar-nav .nav-link  {
		color: white;

		&:hover {
			color: #BF0000;
		}
	}

	.navbar-brand {
		padding-left: 5%;
	}

	.navbar-nav {
		padding-left: 70%;
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar bg="dark" varient="dark" expand="lg">
		  	<Navbar.Brand href="/">
		  		<img
		  			alt=""
		  			src={img}
		  			width="30"
		  			height="30"
					className="d-inline-block align-top"
	  			/>{' '}
	  			Brand Name?
		  	</Navbar.Brand>
		  	<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
		    	<Nav>
					<Nav.Item>
				      	<Nav.Link href="/">Home</Nav.Link>
					</Nav.Item>
					<Nav.Item >
				      	<Nav.Link href="/about">About</Nav.Link>
					</Nav.Item>
					<Nav.Item>
				      	<Nav.Link href="/contact">Contact</Nav.Link>
					</Nav.Item>
					<Nav.Item>					
				      	<Nav.Link href="/login">Login</Nav.Link>
					</Nav.Item>    			
				</Nav>
	  		</Navbar.Collapse>
		</Navbar>
	</Styles>
)
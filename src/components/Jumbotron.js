import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import img from '../assets/music1.jpg';

const Styles = styled.div`
	.jumbotron {
		background: url(${img}) center center;
		background-size: 100% 100%;
		color: #005b96;
		height: 200px;
		position: relative;
		z-index: -2;
	}

	.overlay {
		background-color: #6497b1;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`;

export const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className="jumbo">
			<div className="overlay"></div>
			<Container>
				<h1> Welcome to Spoticloud </h1>
				<p> Time to find a playlist you will love </p>
			</Container>
		</Jumbo>
	</Styles>
)

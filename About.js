import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import img from './assets/Ginyu.jpg';


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
export const About = () => (
	<div>
<Styles>
	<Form id="forms">
	<h2> WE ARE THE GINYU FORCE </h2>
	<img 
		alt= ''
		src= {img}/>
	</Form>
</Styles>
	</div>
)

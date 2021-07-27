import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--red', 'btn-outline'];
const SISES = ['btn-medium', 'btn--large'];

// export default Button;
export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = SISES.includes(buttonSize) ? buttonSize : SISES[0];
	return (
		// <LINK to='/' className="btn--mobile">
		// 	<button>
		// 		{children}
		// 	</button>
		// </LINK>
		<button>
			{children}
		</button>
	)
};
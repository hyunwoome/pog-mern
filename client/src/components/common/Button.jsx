import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function Button({ children, ...props }) {
	let history = useHistory();
	const pushButton = () => {
		history.push(`${props.href}`);
	};

	return (
		<Container>
			{props.href ? (
				<BaseButton onClick={pushButton} {...props}>
					{children}
				</BaseButton>
			) : (
				<BaseButton {...props}>{children}</BaseButton>
			)}
		</Container>
	);
}

const Container = styled.div``;

const BaseButton = styled.button`
	/* Base */
	padding: 8px 16px 6px 16px;
	border: 0;
	border-radius: 5px;
	box-shadow: 0px 1px 3px -1px gray;
	font-size: var(--font-button);
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}

	// ! Color
	${(props) =>
		props.color === 'primary' &&
		css`
			background-color: var(--color-button-primary);
			color: #fff;
		`}

	${(props) =>
		props.color === 'secondary' &&
		css`
			background-color: var(--color-button-secondary);
		`}

		// ! Variant
		${(props) =>
		props.variant === 'outlined' &&
		props.color === 'primary' &&
		css`
			background-color: #fff;
			border: 1px solid var(--color-button-primary);
			color: var(--color-button-primary);
		`}

		${(props) =>
		props.variant === 'outlined' &&
		props.color === 'secondary' &&
		css`
			background-color: #fff;
			border: 1px solid var(--color-button-secondary);
			color: var(--color-button-secondary);
		`}
`;

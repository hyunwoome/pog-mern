import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';

interface Props {
	children?: string | JSX.Element | JSX.Element[];
	href?: string;
	variant?: string;
	color?: string;
}

export default function Button({ children, ...props }: Props) {
	let history = useHistory();
	const pushButton = () => {
		history.push(`${props.href}`);
	};

	return (
		<StyledContainer>
			{props.href ? (
				<StyledBaseButton onClick={pushButton} {...props}>
					{children}
				</StyledBaseButton>
			) : (
				<StyledBaseButton {...props}>{children}</StyledBaseButton>
			)}
		</StyledContainer>
	);
}

const StyledContainer = styled.div``;

const StyledBaseButton = styled.button<Props>`
	font-size: var(--font-button);
	padding: 8px 16px 6px 16px;
	border: 0;
	border-radius: 5px;
	box-shadow: 0px 1px 3px -1px gray;
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

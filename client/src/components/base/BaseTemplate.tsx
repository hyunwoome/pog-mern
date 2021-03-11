import styled from 'styled-components';

interface Props {
	children: string | JSX.Element | JSX.Element[];
}

export default function BaseTemplate({ children }: Props) {
	return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
	background-color: var(--color-background-base);
	max-width: 728px;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0 1rem;
`;

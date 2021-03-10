import styled from 'styled-components';

interface Props {
	children: string | JSX.Element | JSX.Element[];
}

export default function BaseTemplate({ children }: Props) {
	return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
	max-width: 728px;
	margin: auto;
	/* 임시 */
	height: 100vh;
`;

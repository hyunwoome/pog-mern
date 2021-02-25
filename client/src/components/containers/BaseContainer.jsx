import styled from 'styled-components';

export default function BaseContainer({ children }) {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	max-width: 1024px;
	margin: auto;
	height: 150vh; /* 임시 */
`;

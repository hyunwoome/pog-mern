import styled from 'styled-components';

export default function NotFound() {
	return <Container>페이지를 찾을 수 없습니다.</Container>;
}

const Container = styled.div`
	height: 90vh;
	background-color: var(--color-background);
`;

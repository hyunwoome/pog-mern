import styled from 'styled-components';
import BackButton from '../components/common/BackButton';

export default function NotFound() {
	return (
		<>
			<BackButton />
			<Container>페이지를 찾을 수 없습니다.</Container>
		</>
	);
}

const Container = styled.div`
	max-width: 1024px;
	height: 90vh;
	margin: auto;
	padding-top: 3rem;
	background-color: var(--color-background);
`;

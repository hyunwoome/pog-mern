import styled from 'styled-components';
import BackButton from '../components/common/ButtonBack';

export default function NotFoundPage() {
	return (
		<>
			<BackButton />
			<StyledContent>페이지를 찾을 수 없습니다.</StyledContent>
		</>
	);
}

const StyledContent = styled.h1`
	padding-top: 5rem;
`;

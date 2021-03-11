import styled from 'styled-components';
import BackButton from '../components/common/ButtonBack';
import BaseTemplate from '../components/base/BaseTemplate';

export default function NotFoundPage() {
	return (
		<>
			<BackButton />
			<BaseTemplate>
				<StyledContent>페이지를 찾을 수 없습니다.</StyledContent>
			</BaseTemplate>
		</>
	);
}

const StyledContent = styled.h1`
	padding-top: 5rem;
`;

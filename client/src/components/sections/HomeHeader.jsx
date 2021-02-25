import styled from 'styled-components';
import Button from '../common/Button';

export default function HomeHeader() {
	return (
		<Container>
			<LogoContainer>
				<LogoText>PRIDE OF GOLF</LogoText>
			</LogoContainer>
			<Button>로그인</Button>
		</Container>
	);
}

const Container = styled.header`
	background-color: ${({ theme }) => theme.colors.white};
	width: 100%;
	height: 150px;
	display: flex;
	padding: ${({ theme }) => theme.paddings.sm}
		${({ theme }) => theme.paddings.laptop};
	@media ${({ theme }) => theme.device.mobile} {
		padding: ${({ theme }) => theme.paddings.sm}
			${({ theme }) => theme.paddings.mobile};
	}
`;

const LogoContainer = styled.div``;

const LogoText = styled.h3`
	font-family: 'Racing Sans One', cursive;
	font-size: 26px;
`;

import styled from 'styled-components';
import Button from '../common/Button';

export default function HomeHeader() {
	return (
		<Container>
			<LogoContainer>
				<LogoText>PRIDE OF GOLF</LogoText>
			</LogoContainer>
			<ButtonContainer>
				<Button color="primary" href="/login">
					로그인
				</Button>
			</ButtonContainer>
		</Container>
	);
}

const Container = styled.header`
	background-color: var(--color-background);
	width: 100%;
	height: 150px;
	display: flex;
	padding: var(--padding-sm) var(--padding-laptop);
	@media screen and (max-width: var(--device-mobile)) {
		padding: var(--padding-sm) var(--padding-mobile);
	}
`;

const LogoContainer = styled.div``;

const LogoText = styled.h3`
	font-family: 'Racing Sans One', cursive;
	font-size: 26px;
`;

const ButtonContainer = styled.div`
	flex: 2;
	text-align: right;
`;
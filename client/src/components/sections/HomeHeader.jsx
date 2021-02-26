import styled from 'styled-components';
import Button from '../common/Button';
import CalendarButton from '../common/CalendarButton';

export default function HomeHeader() {
	return (
		<Container>
			<FirstContainer>
				<LogoContainer>
					<LogoText>PRIDE OF GOLF</LogoText>
				</LogoContainer>
				<ButtonContainer>
					<Button color="primary" href="/login">
						로그인
					</Button>
				</ButtonContainer>
			</FirstContainer>
			<SecondContainer>
				<CalendarButton />
			</SecondContainer>
		</Container>
	);
}

const Container = styled.header`
	background-color: var(--color-background);
	width: 100%;
	height: 112px;
	padding: var(--padding-sm) var(--padding-laptop);
	@media screen and (max-width: 600px) {
		padding: var(--padding-sm) var(--padding-mobile);
	}
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const FirstContainer = styled.div`
	display: flex;
	align-items: center;
`;

const SecondContainer = styled.div``;

const LogoContainer = styled.div``;

const LogoText = styled.h3`
	font-family: 'Racing Sans One', cursive;
	font-size: 26px;
`;

const ButtonContainer = styled.div`
	flex: 2;
	text-align: right;
`;

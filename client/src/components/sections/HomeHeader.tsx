import styled from 'styled-components';
import Button from '../common/Button';
import CalendarButton from '../common/CalendarButton';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
	return (
		<Container>
			<FirstContainer>
				<LogoContainer>
					<LogoText>
						<Link to="/">PRIDE OF GOLF</Link>
					</LogoText>
				</LogoContainer>
				<ButtonContainer>
					<Button color="secondary" variant="outlined" href="/product">
						골프상품 더보기
					</Button>
					<LoginButton color="primary" href="/login">
						로그인
					</LoginButton>
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
	height: 98px;
	padding: var(--padding-sm) var(--padding-laptop) 0px var(--padding-laptop);
	@media screen and (max-width: 600px) {
		padding: var(--padding-sm) var(--padding-mobile) 0px var(--padding-mobile);
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
	font-size: 24px;
	margin-right: 1rem;
`;

const LoginButton = styled(Button)`
	margin-left: 1rem;
	@media screen and (max-width: 600px) {
		display: none;
	}
`;

const ButtonContainer = styled.div`
	flex: 2;
	text-align: right;
	display: flex;
	justify-content: flex-end;
`;

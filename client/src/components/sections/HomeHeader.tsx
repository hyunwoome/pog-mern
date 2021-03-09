import styled from 'styled-components';
import CalendarButton from '../common/CalendarButton';
import { Link } from 'react-router-dom';
import TopTabs from '../common/TopTabs';

export default function HomeHeader() {
	return (
		<HeaderContainer>
			<Container>
				<FirstContainer>
					<LogoContainer>
						<LogoText>
							<Link to="/">PRIDE OF GOLF</Link>
						</LogoText>
					</LogoContainer>
					<ButtonContainer>
						<CalendarButton />
					</ButtonContainer>
				</FirstContainer>
			</Container>
			<TopTabs />
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header``;

const Container = styled.div`
	background-color: var(--color-background);
	width: 100%;
	height: 60px;
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

const LogoContainer = styled.div`
	margin-right: 0.5rem;
`;

const LogoText = styled.h3`
	/* font-family: 'Racing Sans One', cursive; */
	font-family: 'Montserrat', sans-serif;
	font-weight: 800;
	font-style: italic;
	font-size: var(--font-lg);
	margin-right: 1rem;
`;

const ButtonContainer = styled.div`
	flex: 2;
	text-align: right;
	display: flex;
	justify-content: flex-end;
`;

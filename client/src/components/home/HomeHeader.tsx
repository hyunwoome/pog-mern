import styled from 'styled-components';
import CalendarButton from './HomeCalButton';
import { Link } from 'react-router-dom';
import TopTabs from './HomeTopTabs';

export default function HomeHeader() {
	return (
		<>
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
		</>
	);
}

const Container = styled.section`
	background-color: var(--color-background);
	width: 100%;
	height: 52px;
	margin: 0;
	padding: 0 16px;
	position: fixed;
	top: 0;
	z-index: 10;
`;

const FirstContainer = styled.header`
	max-width: 728px;
	height: 100%;
	margin: 0 auto;
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

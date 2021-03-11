import styled from 'styled-components';
import CalendarButton from './HomeCalButton';
import { Link } from 'react-router-dom';
import TopTabs from './HomeTopTabs';

export default function HomeHeader() {
	return (
		<>
			<StyledContainer>
				<StyledHeader>
					<StyledLogoContainer>
						<StyledLogoText>
							<Link to="/">PRIDE OF GOLF</Link>
						</StyledLogoText>
					</StyledLogoContainer>
					<StyledButtonContainer>
						<CalendarButton />
					</StyledButtonContainer>
				</StyledHeader>
			</StyledContainer>
			<TopTabs />
		</>
	);
}

const StyledContainer = styled.section`
	background-color: var(--color-background);
	width: 100%;
	height: 52px;
	margin: 0;
	padding: 0 16px;
	position: fixed;
	top: 0;
	z-index: 10;
`;

const StyledHeader = styled.header`
	max-width: 728px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
`;

const StyledLogoContainer = styled.div`
	margin-right: 0.5rem;
`;

const StyledLogoText = styled.h3`
	font-size: var(--font-xl);
	font-family: 'Montserrat', sans-serif;
	font-weight: 800;
	font-style: italic;
	margin-right: 1rem;
`;

const StyledButtonContainer = styled.div`
	flex: 2;
	text-align: right;
	display: flex;
	justify-content: flex-end;
`;

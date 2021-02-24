import styled from 'styled-components';
import HomeHeader from '../components/section/HomeHeader';
import HomeProductNavBar from '../components/section/HomeProductNavBar';

export default function Home() {
	return (
		<HomeContainer>
			<HomeHeader />
			<HomeProductNavBar />
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	max-width: 1024px;
	height: 150vh; // * 임시 높이
	margin: auto;
`;

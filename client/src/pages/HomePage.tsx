import styled from 'styled-components';
import HomeHeader from '../components/home/HomeHeader';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/section/SectionFooter';
import ProductGrid from '../components/product/ProductGrid';

export default function HomePage() {
	return (
		<>
			<HomeHeader />
			<StyledContainer>
				<ProductGrid />
				<BottomNav />
				<Footer />
			</StyledContainer>
		</>
	);
}

const StyledContainer = styled.div`
	padding-top: 6rem;
`;

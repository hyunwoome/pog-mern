import BaseContainer from '../components/containers/BaseContainer';
import HomeHeader from '../components/sections/HomeHeader';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/sections/Footer';
import ProductGrid from '../components/sections/ProductGrid';

export default function HomePage() {
	return (
		<>
			<BaseContainer>
				<HomeHeader />
				<ProductGrid />
				<BottomNav />
				<Footer />
			</BaseContainer>
		</>
	);
}

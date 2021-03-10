import BaseTemplate from '../components/base/BaseTemplate';
import HomeHeader from '../components/sections/HomeHeader';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/sections/Footer';
import ProductGrid from '../components/sections/ProductGrid';

export default function HomePage() {
	return (
		<>
			<BaseTemplate>
				<HomeHeader />
				<ProductGrid />
				<BottomNav />
				<Footer />
			</BaseTemplate>
		</>
	);
}

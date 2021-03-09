import BaseContainer from '../components/containers/BaseContainer';
import HomeHeader from '../components/sections/HomeHeader';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/sections/Footer';

export default function Home() {
	return (
		<>
			<BaseContainer>
				<HomeHeader />
				<BottomNav />
				<Footer />
			</BaseContainer>
		</>
	);
}

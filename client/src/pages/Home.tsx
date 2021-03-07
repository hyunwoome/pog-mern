import BaseContainer from '../components/containers/BaseContainer';
import HomeHeader from '../components/sections/HomeHeader';
import TopTabs from '../components/common/TopTabs';
import BottomNav from '../components/common/BottomNav';
import Footer from '../components/sections/Footer';

export default function Home() {
	return (
		<>
			<BaseContainer>
				<HomeHeader />
				<TopTabs />
				<BottomNav />
				<Footer />
			</BaseContainer>
		</>
	);
}

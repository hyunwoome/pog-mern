import BaseContainer from '../components/containers/BaseContainer';
import HomeHeader from '../components/sections/HomeHeader';
import TopTabs from '../components/common/TopTabs';

export default function Home() {
	return (
		<>
			<BaseContainer>
				<HomeHeader />
				<TopTabs />
			</BaseContainer>
		</>
	);
}

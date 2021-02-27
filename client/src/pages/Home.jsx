import BaseContainer from '../components/containers/BaseContainer';
import HomeHeader from '../components/sections/HomeHeader';
import ProductTabs from '../components/common/ProductTabs';

export default function Home() {
	return (
		<>
			<BaseContainer>
				<HomeHeader />
				<ProductTabs />
			</BaseContainer>
		</>
	);
}

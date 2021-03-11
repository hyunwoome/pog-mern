import BaseContainer from '../components/base/BaseTemplate';
import BackButton from '../components/common/ButtonBack';

export default function MenuPage() {
	return (
		<>
			<BackButton title="전체메뉴" />
			<BaseContainer>메뉴 페이지</BaseContainer>
		</>
	);
}

import BaseContainer from '../components/containers/BaseContainer';
import BackButton from '../components/common/BackButton';

export default function Menu() {
	return (
		<>
			<BackButton title="전체메뉴" />
			<BaseContainer>메뉴 페이지</BaseContainer>
		</>
	);
}

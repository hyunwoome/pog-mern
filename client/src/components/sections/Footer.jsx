import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {
	const footerList = [
		{
			title: '회사소개',
			href: '/company',
		},
		{
			title: '개인정보처리방침',
			href: '/privateinfo',
		},
		{
			title: '여행약관',
			href: '/policy',
		},
		{
			title: '고객센터',
			href: '/service',
		},
	];
	return (
		<Container>
			<Wrapper>
				<UnList>
					{footerList.map((item) => (
						<List key={item.title}>
							<Link to={item.href}>{item.title}</Link>
						</List>
					))}
				</UnList>
				<ContentWrapper></ContentWrapper>
			</Wrapper>
		</Container>
	);
}

const Container = styled.footer`
	width: 100%;
	height: 220px;
`;

const Wrapper = styled.div`
	max-width: 1024px;
	height: 100%;
	margin: auto;
	font-size: var(--font-sm);
	font-weight: 300;
	color: var(--color-font-gray);
	border-top: 1px solid var(--color-border);
	padding: var(--padding-sm) var(--padding-laptop) 0px var(--padding-laptop);
	@media screen and (max-width: 600px) {
		padding: var(--padding-sm) var(--padding-mobile) 0px var(--padding-mobile);
	}
`;

const UnList = styled.ul`
	display: flex;
	justify-content: flex-start;
`;

const List = styled.li`
	margin-right: 16px;
`;

const ContentWrapper = styled.div``;

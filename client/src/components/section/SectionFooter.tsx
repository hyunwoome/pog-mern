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
				<ContentWrapper>
					<Content>
						(주)프라이드 오브 골프 · 대표: 김남윤 · 사업자등록번호: 110-30-25883
						· 통신판매업신고 · 강남-1982호 · 메일: kny89@pog.com
					</Content>
					<Content>
						관광사업자 등록번호: 제2021-89호 · 주소 : 서울시 강남구 테헤란로{' '}
					</Content>
					<Content>
						Copyright 2021 PRIDE OF GOLF, &nbsp; All Right Reserved.
					</Content>
				</ContentWrapper>
			</Wrapper>
		</Container>
	);
}

const Container = styled.footer`
	width: 100%;
	height: 170px;
	@media screen and (max-width: 600px) {
		height: 200px;
	}
`;

const Wrapper = styled.div`
	max-width: 1024px;
	height: 100%;
	margin: auto;
	font-size: var(--font-sm);
	font-weight: 300;
	color: var(--color-font-gray);
	border-top: 1px solid var(--color-border);
`;

const UnList = styled.ul`
	display: flex;
	justify-content: flex-start;
`;

const List = styled.li`
	margin-right: 1rem;
	margin-bottom: 1rem;
`;

const ContentWrapper = styled.div``;

const Content = styled.p`
	line-height: 1.5rem;
`;

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Item {
	_id: string;
	image: string;
	country: string;
	region: string;
	title: string;
	price: number;
}

export default function ProductGrid() {
	const [product, setProduct] = useState<any>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				setError(null);
				setProduct(null);
				setLoading(true);
				const response = await axios.get('http://localhost:5000/api/products');
				setProduct(response.data);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		};
		fetchProduct();
	}, []);
	if (loading) return <div>상품이 준비중입니다.</div>;
	if (error) return <div>상품을 불러올 수 없습니다.</div>;
	if (!product) return null;
	return (
		<Container>
			{product.map((item: Item) => (
				<CardContainer key={item._id}>
					<ImageContainer>
						<img src={`http://localhost:5000/${item.image}`} alt="상품이미지" />
					</ImageContainer>
					<ContentContainer>
						<ContentHeader>
							<ContentCountry>{item.country}</ContentCountry>
							<ContentRegion>{item.region}</ContentRegion>
						</ContentHeader>
						<ContentTitle>{item.title}</ContentTitle>
						<ContentBottom>
							<ContentPrice>{item.price.toLocaleString('ko-KR')}</ContentPrice>
							<ContentWon>원</ContentWon>
						</ContentBottom>
					</ContentContainer>
				</CardContainer>
			))}
		</Container>
	);
}

const Container = styled.section`
	width: 100%;
	background-color: var(--color-background);
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: var(--padding-sm) var(--padding-laptop);
	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
		padding: var(--padding-sm) var(--padding-mobile);
	}
	gap: 1.3rem;
`;

const CardContainer = styled.div`
	border: 0.1px solid var(--color-border);
	border-radius: 5px;
`;

const ImageContainer = styled.div`
	max-height: 200px;
	background-color: var(--color-background);
	overflow: hidden;
	border-radius: 5px;
	& > img {
		max-width: 100%;
		height: auto;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
`;

const ContentContainer = styled.div`
	padding: 1rem;
	height: 8rem;
	box-shadow: 0.5px 0.5px 10px var(--color-border);
`;

const ContentHeader = styled.header`
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
`;

const ContentCountry = styled.h2`
	font-size: var(--font-button);
	margin-right: 0.3rem;
`;

const ContentRegion = styled.h4`
	font-size: var(--font-button);
	font-weight: 300;
`;

const ContentTitle = styled.h1`
	font-size: var(--font-lg);
	font-weight: 500;
`;

const ContentBottom = styled.div`
	margin-top: 2rem;
	text-align: right;
`;

const ContentPrice = styled.p`
	font-size: var(--font-lg);
	font-weight: 500;
	display: inline;
	margin-right: 0.1rem;
`;

const ContentWon = styled.span`
	font-size: var(--font-sm);
`;

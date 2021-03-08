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
				<li key={item._id}>
					<img src={`http://localhost:5000/${item.image}`} alt="상품이미지" />
					{item.country}
					{item.region}
					{item.title}
					{item.price}
				</li>
			))}
		</Container>
	);
}

const Container = styled.section`
	width: 100%;
	background-color: var(--color-background);
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	/* grid-template-rows: repeat(1, minmax(300px, auto)); */
	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

const CardContainer = styled.div``;

const ImageContainer = styled.div``;

const ContentContainer = styled.div``;

const ContentHeader = styled.header``;

const ContentTitle = styled.h1``;

const ContentPrice = styled.p``;

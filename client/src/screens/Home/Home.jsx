import React from 'react';
import './Home.scss';
import { Hero, EvaluationSection, ContrastSection } from '../../components';

const Home = () => (
	<main className="container">
		<Hero />
		<EvaluationSection />
		<ContrastSection />
	</main>
);

export default Home;

import React from 'react';
import './Home.scss';
import {
	Button,
	HeroIllustration,
	EvaluationIllustration,
	ContrastIllustration,
} from '../../components';

const Home = () => (
	<>
		<section className="section">
			<div className="section__content">
				<h1 className="heading-1 heading-1--primary">
					We want to help you make the web more accessible
				</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
					sequi officia obcaecati dolore, harum tempora a numquam expedita
					optio? Possimus.
				</p>
				<Button to="/evaluation/url">Evaluate</Button>
			</div>

			<div className="section__illustration">
				<HeroIllustration />
			</div>
		</section>

		<section className="section">
			<div className="section__illustration">
				<EvaluationIllustration />
			</div>
			<div className="section__content">
				<h1 className="heading-1 heading-1--secondary">
					We want to help you make the web more accessible
				</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
					sequi officia obcaecati dolore, harum tempora a numquam expedita
					optio? Possimus.
				</p>
				<Button to="/evaluation/code">Evaluate</Button>
			</div>
		</section>

		<section className="section">
			<div className="section__content">
				<h1 className="heading-1 heading-1--primary">
					We want to help you make the web more accessible
				</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
					sequi officia obcaecati dolore, harum tempora a numquam expedita
					optio? Possimus.
				</p>
				<Button to="/contrast">Evaluate</Button>
			</div>
			<div className="section__illustration">
				<ContrastIllustration />
			</div>
		</section>
	</>
);

export default Home;

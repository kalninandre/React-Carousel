import { useState } from 'react';

import '@components/Carousel/carousel.scss';
import useScreen from '@hooks/useScreen';
import { motion } from 'framer-motion';

type CarouselType = {
	width: string;
	height: string;

	data: CarouselItemsType[];

	showMiniatures?: boolean;

	showDots?: boolean;
	dotSize?: string;
	dotColor?: string;
	dotHoverColor?: string;
	dotActiveColor?: string;

	showArrow?: boolean;
	arrowSize?: string;
	arrowColor?: string;
	arrowHoverColor?: string;

	autoPlay?: boolean;
	autoPlayTimer?: number;
};

type CarouselItemsType = {
	url: string;
	alt: string;
};

const Carousel = ({
	data,
	width,
	height,

	showMiniatures,

	showDots = true,
	dotSize = '20px',
	dotColor = '#e2e2e2',
	dotHoverColor = '#b2b2b2',
	dotActiveColor = '#a2a2a2',

	showArrow = true,
	arrowSize = '36px',
	arrowColor = '#e2e2e2',
	arrowHoverColor = '#b2b2b2',

	autoPlay = true,
	autoPlayTimer = 5000,
}: CarouselType) => {
	const [index, setIndex] = useState(0);

	// You can insert your own code here to know screen size, or just also use the useScreen hook
	const { screen, isMobile } = useScreen();
	if (isMobile) {
		width = (screen - 80).toString() + 'px';

		if (screen < 480) {
			height = (screen * 0.75).toString() + 'px';
		}
	}

	// Carousel Styles
	const containerStyle = {
		width,
		height,
	};

	const miniaturesSize = {
		width: (Number.parseInt(width) / data.length - 8).toString() + 'px',
	};

	const arrowStyle = {
		fontSize: arrowSize,
		'--arrow-color': arrowColor,
		'--arrow-hover-color': arrowHoverColor,
	};

	const dotStyle = {
		fontSize: dotSize,
		'--dot-color': dotColor,
		'--dot-hover-color': dotHoverColor,
		'--dot-active-color': dotActiveColor,
	};

	// Carousel Functions
	const goToPrevious = () => {
		clearTimeout(interval);

		const isFirstSlide = index === 0;
		const newIndex = isFirstSlide ? data.length - 1 : index - 1;
		setIndex(newIndex);
	};
	const goToNext = () => {
		clearTimeout(interval);

		const isLastSlide = index === data.length - 1;
		const newIndex = isLastSlide ? 0 : index + 1;
		setIndex(newIndex);
	};

	const goToSlide = (slideIndex: number) => {
		clearTimeout(interval);

		setIndex(slideIndex);
	};

	// Auto play functions
	let interval: any = null;
	const initPlay = () => {
		interval = setTimeout(function () {
			goToNext();
		}, autoPlayTimer);
	};
	if (autoPlay) initPlay();

	return (
		<div className='carousel-container' style={containerStyle}>
			<motion.div
				className='flex items-center justify-center h-full'
				key={index}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'linear', duration: 1 }}
			>
				<img className='item-background' src={`${data[index].url}`} />
			</motion.div>

			{showArrow && (
				<>
					<div style={arrowStyle} className='left-arrow' onClick={goToPrevious}>
						❰
					</div>
					<div style={arrowStyle} className='right-arrow' onClick={goToNext}>
						❱
					</div>
				</>
			)}

			{showMiniatures ? (
				<div className='miniatures-container'>
					{data.map((_, slide_index) => (
						<img
							className={`miniatures-item ${index == slide_index ? 'active' : ''}`}
							style={miniaturesSize}
							key={slide_index}
							src={`${data[slide_index].url}`}
							onClick={() => goToSlide(slide_index)}
						/>
					))}
				</div>
			) : (
				showDots && (
					<div className='dot-container'>
						{data.map((_, slide_index) => (
							<div
								className={`dot-element ${index == slide_index ? 'active' : ''}`}
								style={dotStyle}
								key={slide_index}
								onClick={() => goToSlide(slide_index)}
							>
								●
							</div>
						))}
					</div>
				)
			)}
		</div>
	);
};

export default Carousel;

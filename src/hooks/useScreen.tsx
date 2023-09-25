import { useState, useEffect } from 'react';

const delay = 500;

const useScreen = () => {
	const [screen, setScreen] = useState(window.innerWidth);

	const isMobile = screen <= 768;
	const isTablet = screen > 768 && screen <= 1024;
	const isNotebook = screen > 1024 && screen <= 1440;

	useEffect(() => {
		const resize = () => {
			setScreen(window.innerWidth);
		};
		let timeout = setTimeout(resize, delay);

		window.addEventListener('resize', function () {
			if (typeof timeout != 'undefined' || timeout != null) clearTimeout(timeout);
			timeout = setTimeout(resize, delay);
		});

		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	return {
		screen,
		isMobile,
		isTablet,
		isNotebook,
	};
};

export default useScreen;

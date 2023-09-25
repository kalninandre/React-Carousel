import { Carousel } from '@components/index';

function App() {
	const data = [
		{
			url: 'https://picsum.photos/200',
			alt: 'Random Text Value',
		},
		{
			url: 'https://picsum.photos/300',
			alt: 'Random Text Value',
		},
		{
			url: 'https://picsum.photos/400',
			alt: 'Random Text Value',
		},
		{
			url: 'https://picsum.photos/500',
			alt: 'Random Text Value',
		},
		{
			url: 'https://picsum.photos/600',
			alt: 'Random Text Value',
		},
		{
			url: 'https://picsum.photos/700',
			alt: 'Random Text Value',
		},
		{
			url: 'https://picsum.photos/800',
			alt: 'Random Text Value',
		},
		{
			url: 'https://picsum.photos/900',
			alt: 'Random Text Value',
		},
	];

	return (
		<>
			<header className='flex items-center w-full h-[48px] bg-black text-white p-2 mb-4'>
				<div>React Carousel Header</div>
			</header>

			<main className='minimum-page-height w-full'>
				<div className='flex flex-col items-center'>
					<Carousel width='600px' height='400px' data={data} />
				</div>
			</main>

			<footer className='flex items-center w-full h-[48px] bg-black text-white p-2 mt-4'>
				<div>Made by André Kalnin</div>
			</footer>
		</>
	);
}

export default App;

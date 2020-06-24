import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {
	const category = 'One Punch';

	test('debe de mostrarse correctamente', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar items cuando se carga imágenes useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://localost/cualquiera.jpg',
				title: 'cualquier cosa',
			},
			{
				id: '123',
				url: 'https://localost/xoalquiero.jpg',
				title: 'cualquier coxxa',
			},
		];
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});

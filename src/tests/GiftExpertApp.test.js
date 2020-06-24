import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GiftExpertApp } from '../GiftExpertApp';

describe('Pruebas en <GiftExpertApp />', () => {
	test('debe coincidir con el snapshot', () => {
		const wrapper = shallow(<GiftExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar una lista de categorias', () => {
		const categories = ['One Punch', 'Dragon Ball'];
		const wrapper = shallow(
			<GiftExpertApp defaultCategories={categories} />
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});
});

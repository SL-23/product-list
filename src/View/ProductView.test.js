/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import ProductView from './ProductView';

describe('product view', () => {
  test('displays product view', () => {
    const { getByTestId } = render(<ProductView />);
    const elem = getByTestId('product_view');
    expect(elem).toBeInTheDocument();
  });
});

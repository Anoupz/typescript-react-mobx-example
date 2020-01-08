import '@testing-library/jest-dom';

import * as React from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'mobx-react';

const customRender = (node, stores, options) => {
  return render(<Provider {...stores}>{node}</Provider>, options);
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender };

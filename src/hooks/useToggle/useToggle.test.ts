import useToggle from './useToggle';

const mockSetState = jest.fn();

jest.mock('react', () => ({
  useState: (initialState: boolean) => ([initialState, mockSetState]),
}));

it('toggles state from true to false', () => {
  const [, toggleState] = useToggle(false);
  toggleState();
  expect(mockSetState).toHaveBeenCalledWith(true);
});

it('toggles state from false to true', () => {
  const [, toggleState] = useToggle(true);
  toggleState();
  expect(mockSetState).toHaveBeenCalledWith(false);
});

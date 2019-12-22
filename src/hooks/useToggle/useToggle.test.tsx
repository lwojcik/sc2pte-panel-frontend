import useToggle from './useToggle';

const mockSetState = jest.fn();

jest.mock('react', () => ({
  useState: (initial: unknown) => [initial, mockSetState]
}));

test('toggles state', () => {
  const [state, toggleState] = useToggle(false);
  (toggleState as (() => void))();
  expect(mockSetState).toHaveBeenCalledWith(!state);
});

import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize count to 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should increment count by 1', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should update val and increment by new val', () => {
    const { result, rerender } = renderHook(() => useCounter());

    // First set val to 5
    act(() => {
      result.current.setVal(5);
    });

    // Re-render to reflect updated val
    rerender();

    // Now increment should add 5
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(5);
  });
});

import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState('');

  const AB = () => {
    setDebouncedValue(value);
  };
  useEffect(() => {
    const handler = setTimeout(() => AB(), delay);

    return () => {
      clearTimeout(handler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return debouncedValue;
}

export default useDebounce;

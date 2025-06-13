import { useEffect, useRef } from 'react';

export function useFocusOnMount() {
  const inputLinkRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputLinkRef.current) {
      inputLinkRef.current.focus();
    }
  }, []);

  return inputLinkRef;
}

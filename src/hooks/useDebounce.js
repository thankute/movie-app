import { useEffect, useState } from 'react'

function useDebounce(value, delay = 1000) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => setDebounce(value), delay)
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounce;
}

export default useDebounce
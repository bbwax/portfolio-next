import { useState, useEffect } from 'react';

const useLoading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return loading;
};

export default useLoading;
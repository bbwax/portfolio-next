import React from 'react';
import useLoading from './UseLoading';

const LoadingComponent = () => {
    const loading = useLoading();

    if (!loading) return null;

    return (
        <div className="loading-spinner">
            Loading...
            {/* Add your spinner or loading image here */}
        </div>
    );
};

export default LoadingComponent;
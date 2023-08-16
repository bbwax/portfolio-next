import React, { useState, useEffect } from 'react';

function SkillBarChart({ data, title }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Setting loaded to true will initiate the animation after the component is mounted.
        setLoaded(true);
    }, []);

    return (
        <div className="w-full space-y-6 p-6 md:w-1/2 flex flex-col">
            <h2 className="text-xl text-even-darker-green font-semibold mb-4">{title}</h2>
            {data.map((item, index) => {
                const percentage = loaded ? (item.value / 10) * 100 : 0;

                return (
                    <div key={index} className="w-full">
                        <p className="mb-2 text-even-darker-green">{item.skill}</p>
                        <div className="w-full h-6 bg-gray-200 rounded text-even-darker-green">
                            <div
                                style={{ width: `${percentage}%` }}
                                className="h-full bg-dark-green transition-all duration-1000 rounded"
                            ></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SkillBarChart;
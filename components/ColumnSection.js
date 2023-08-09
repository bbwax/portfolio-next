import ColumnCard from './ColumnCard';

const ColumnSection = ({ qualifications }) => {
    return (
        <div className='bg-gradient-to-b from-white to-dark-green justify-center p-6 md:py-32'>
            <div className="flex flex-wrap md:flex-row  ">
                {qualifications.map((qualification, i, arr) => {
                    let position = 'middle';
                    if (i === 0) position = 'first';
                    else if (i === arr.length - 1) position = 'last';

                    return (
                        <div key={i} className="flex-grow w-full md:w-1/3">
                            <ColumnCard  {...qualification} position={position} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ColumnSection;
import ColumnCard from './ColumnCard';

const ColumnSection = ({ qualifications }) => {
    return (
        <div className="flex flex-col md:flex-row bg-gradient-to-b from-white to-dark-green justify-center p-6 shadow-lg">
            {qualifications.map((qualification, i, arr) => {
                let position = 'middle';
                if (i === 0) position = 'first';
                else if (i === arr.length - 1) position = 'last';

                return <ColumnCard key={i} {...qualification} position={position} />;
            })}
        </div>
    );
};

export default ColumnSection;
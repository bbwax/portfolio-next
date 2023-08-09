import WithScrollFade from "./WithScrollFade";

const ColumnCard = ({ discipline, Icon, intro, explanation, explantionTitle, stats, statsTitle, position }) => {
    // Base styles
    let classNames = "flex-col flex items-center bg-light-cream p-6 border border-slate-300 hover:border-indigo-300 h-[600px]";

    // Conditional styles based on position
    if (position === 'first') {
        classNames += " rounded-t-lg md:rounded-bl-lg md:rounded-r-none";
    } else if (position === 'last') {
        classNames += " rounded-b-lg md:rounded-tr-lg md:rounded-l-none";
    }

    return (
        <div className={classNames}>
            <div className="p-3 rounded-full bg-dark-green">
                <Icon className="w-12 h-12 text-light-cream" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-dark-green">{discipline}</h2>
            <p className="mb-4 text-dark-green">{intro}</p>
            <h3 className="text-lg font-bold mb-1 text-dark-green">{explantionTitle}</h3>
            <p className="mb-4 text-dark-green">{explanation}</p>
            <h3 className="text-lg font-bold mb-1 text-dark-green">{statsTitle}</h3>
            <ul>
                {stats.map((stat, i) => (
                    <li key={i} className="mb-1 text-dark-green">{stat}</li>
                ))}
            </ul>
        </div>
    );
};

export default WithScrollFade(ColumnCard);
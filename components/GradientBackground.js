export default function GradientBackground({ children }) {
    return (
        <div className="bg-gradient-to-b from-tan to-white flex flex-col items-center justify-center h-max p-6 md:py-32">
            {children}
        </div>
    );
}
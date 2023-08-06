import AnimatedText from './AnimatedText';
import SideAnimation from './SideAnimation';

export default function HomePage() {
    return (
            <div className="relative bg-tan min-h-screen">
                <SideAnimation />
                <AnimatedText />
            </div>
    );
}
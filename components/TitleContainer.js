import { motion } from 'framer-motion';

function TitleContainer({ pageTitle = "Default Title" }) {
    return (
        <div className='pt-12 pb-6 md:pt-24'>
            <motion.div
                className="h-1/4 w-full flex items-center pl-8 "
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 20 }}
            >
                <h2 className="text-4xl">{pageTitle}</h2>
            </motion.div>
        </div>
    );
}

export default TitleContainer;
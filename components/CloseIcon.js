import { AiOutlineClose } from 'react-icons/ai';

const CloseIcon = ({ toggle }) => (
    <div className="z-30">
        <AiOutlineClose
            size={24}
            onClick={toggle}
            className="text-white cursor-pointer md:hidden"
        />
    </div>
);

export default CloseIcon;
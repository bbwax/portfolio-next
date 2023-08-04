import { AiOutlineClose } from 'react-icons/ai';

const CloseIcon = ({ toggle }) => (
    <div className="z-30">
        <AiOutlineClose
            size={60}
            onClick={toggle}
            className="text-white cursor-pointer md:hidden p-2"
        />
    </div>
);

export default CloseIcon;
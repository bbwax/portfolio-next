import { AiOutlineMenu } from 'react-icons/ai';

const MenuIcon = ({ toggle }) => (
  <button
    className="md:hidden block text-white p-3 bg-tan rounded-full"
    type="button"
    onClick={toggle}
  >
    <AiOutlineMenu size={40} />
  </button>
);

export default MenuIcon;
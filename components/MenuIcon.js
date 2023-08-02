import { AiOutlineMenu } from 'react-icons/ai';

const MenuIcon = ({ toggle }) => (
  <button
    className="md:hidden block text-white"
    type="button"
    onClick={toggle}
  >
    <AiOutlineMenu size={24} />
  </button>
);

export default MenuIcon;
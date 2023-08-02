const Button = ({ children, onClick, type = "button", ...rest }) => (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      {...rest}
    >
      {children}
    </button>
  );
  
  export default Button;
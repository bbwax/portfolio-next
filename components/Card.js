const Card = ({ heading, children }) => (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-bold">{heading}</h2>
      <div className="p-2">{children}</div>
    </div>
  )
  
  export default Card
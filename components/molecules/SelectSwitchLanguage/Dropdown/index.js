const Dropdown = ({ children, isOpen, target, onClose }) => (
  <div className="relative ">
    {target}
    {isOpen ? (
      <div className="absolute -left-4 lg:left-0 top-8 z-20 mt-2  w-full  rounded-sm shadow-lg">
        {children}
      </div>
    ) : null}
    {isOpen ? (
      <div
        className="fixed bottom-0 left-0 top-0 right-0 z-10"
        onClick={onClose}
      />
    ) : null}
    {/*onClose blur Dropdown*/}
  </div>
);

export default Dropdown;

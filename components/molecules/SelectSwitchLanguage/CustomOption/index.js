import { components } from "react-select";
const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div className="inline-flex cursor-pointer items-center">
        <img
          style={{ marginRight: 8, width: 25, height: 18 }}
          src={props.data.image}
          alt={`flag`}
        />
        <span className="text-sm text-black">{props.data.label}</span>
      </div>
    </components.Option>
  );
};

export default CustomOption;

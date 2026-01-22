import { components } from "react-select";
import Image from "next/image";

const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div className="inline-flex cursor-pointer items-center">
        <Image
          width={25}
          height={18}
          style={{ marginRight: 8 }}
          src={props.data.image}
          alt={`flag`}
          className="object-cover"
        />
        <span className="text-sm text-black">{props.data.label}</span>
      </div>
    </components.Option>
  );
};

export default CustomOption;

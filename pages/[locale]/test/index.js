import React, { useState } from "react";

import { alphabet } from "./data.js";
import { default as ReactSelect, components } from "react-select";
import Layout from "components/organisms/LayoutTemplate";

const controlStyles = {
  border: "1px solid black",
  padding: "5px",
  background: "red",
  color: "white",
};
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <div className="flex justify-between">
          <label>{props.label}</label>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />
        </div>
      </components.Option>
    </div>
  );
};

export default function Home() {
  const [state, setState] = useState({ optionSelected: [alphabet[0]] });
  console.log(state);
  const handleChange = (selected) => {
    setState({
      optionSelected: selected,
    });
  };

  const ControlComponent = ({ children, ...rest }) => {
    console.log(children);
    return (
      <div style={controlStyles}>
        <div className="">
          {state.optionSelected.map((item) => (
            <div className="mb-4 flex mr-4">
              <div className="mr-4">
                <components.Control {...rest}>
                  <div className="flex">
                    👎
                    <p className="text-black">{item.label}</p>
                    {children[1]}
                    <button>x</button>
                  </div>
                </components.Control>
              </div>

              <div>sdsdsdsđ</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <Layout>
      <div className="container mt-20">
        <div>
          <h3>MultiSelect dropdown with Checkbox</h3>
          <ReactSelect
            options={alphabet}
            isMulti
            isClearable={false}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Control: ControlComponent, Option }}
            // components={{
            //   Option,
            //   ControlComponent,
            // }}
            onChange={handleChange}
            value={state.optionSelected}
            // Hide dropdown list  when select any item
            // closeMenuOnSelect={true}

            //Selected Item Remove in dropdown list
            // hideSelectedOptions={true}
          />
        </div>
      </div>
    </Layout>
  );
}

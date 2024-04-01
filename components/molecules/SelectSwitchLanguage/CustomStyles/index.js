export const customStyles = {
  control: (provided) => ({
    ...provided,
    display: "none",
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: 20,
    overflow: "hidden",
    minWidth: "124px",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 2,
  }),
  //   custom active
  option: (provided, state) => ({
    ...provided,
    padding: "8px 16px",
    color: state.isSelected ? "#002A66" : "#333",
    background: state.isSelected || state.isFocused ? "#F1FBFF" : "",
    fontWeight: state.isSelected ? "500" : "normal",
  }),
  input: (provided) => ({
    ...provided,
  }),
  indicatorsContainer: () => ({
    border: "none",
  }),
};

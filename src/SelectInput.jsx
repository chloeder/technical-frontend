/* eslint-disable react/prop-types */
import Select from "react-select";

export default function SelectInput({ options, handleChange }) {
  return (
    <Select
      options={options}
      placeholder="Pilih Berry"
      onChange={handleChange}
    />
  );
}

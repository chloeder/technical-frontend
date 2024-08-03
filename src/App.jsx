/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import SelectInput from "./SelectInput";
import DetailListBerry from "./DetailListBerry";

function App() {
  // Declare states options for the list of berries, selectedBerry for the selected berry, berryDetail for the detail of the selected berry and isLoading to check if the data is still loading for better user experience
  const [options, setOptions] = useState([]);
  const [selectedBerry, setSelectedBerry] = useState(null);
  const [berryDetail, setBerryDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchBerry() {
    // Fetch data from API pokeapi.co
    const response = await fetch("https://pokeapi.co/api/v2/berry");
    const data = await response.json();

    // Map the data to get the value and label to be used in SelectInput component
    const result = data.results.map((item) => ({
      value: item.name,
      label: item.name,
    }));

    // Sort the data alphabetically
    const sorted = result.sort((a, b) => a.label.localeCompare(b.label));
    setOptions(sorted);
  }

  // Fetch data from API pokeapi.co when the component is mounted
  useEffect(() => {
    fetchBerry();
  }, []);

  // Handle change event when the user selects a berry
  function handleChange(value) {
    setSelectedBerry(value);
  }

  // Fetch data from API pokeapi.co to get the detail of the selected berry
  async function fetchBerryDetail() {
    if (selectedBerry) {
      setIsLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/berry/${selectedBerry}`
      );
      const data = await response.json();

      setBerryDetail(data);
      setIsLoading(false);
    }
  }

  // Fetch data from API pokeapi.co when the selectedBerry state is updated
  useEffect(() => {
    fetchBerryDetail();

    // dependency array is selectedBerry to make sure the effect is only run when selectedBerry is updated
  }, [selectedBerry]);

  return (
    <div className="flex flex-col gap-5">
      {/* Call SelecInput components with props */}
      <SelectInput
        options={options}
        handleChange={(e) => handleChange(e.value)}
      />
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : berryDetail ? (
        <DetailListBerry
          name={berryDetail.name.toUpperCase()}
          growth_time={berryDetail.growth_time}
          max_harvest={berryDetail.max_harvest}
          natural_gift_power={berryDetail.natural_gift_power}
          size={berryDetail.size}
          smoothness={berryDetail.smoothness}
        />
      ) : (
        <p className="text-center">No berry selected</p>
      )}
    </div>
  );
}

export default App;

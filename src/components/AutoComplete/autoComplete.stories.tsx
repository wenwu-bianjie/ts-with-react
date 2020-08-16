import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AutoComplete, DataSourceType } from "./autoComplete";

const SimpleComplete = () => {
  const lakers = [
    { value: "bradley", number: 1 },
    { value: "aaaaaaa", number: 2 },
  ];
  // const handleFetch = (query: string) => {
  //   return lakers.filter((name) => name.includes(query));
  // };
  // const handleFetch = (query: string) => {
  //   return lakers.filter((player) => player.value.includes(query));
  // };
  const handleFetch = (query: string) => {
    return new Promise<DataSourceType[]>((resolve) => {
      setTimeout(() => {
        resolve(lakers.filter((player) => player.value.includes(query)));
      }, 1000);
    });
  };
  const renderOption = (item: DataSourceType) => {
    return <h2>Name: {item.value}</h2>;
  };
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action("selected")}
      renderOption={renderOption}
    />
  );
};

storiesOf("AutoComplete Component", module).add("AutoComplete", SimpleComplete);

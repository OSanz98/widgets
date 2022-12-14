import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/route";
import Header from './components/Header';


const items = [
  {
    title: 'What is react?',
    content: 'It is a front end javascript framework'
  },
  {
    title: 'Why use react?',
    content: 'React is a favourite JS library amongst engineers'
  },
  {
    title: 'How do you use react?',
    content: 'Use react by creating components'
  }
];

const options =[
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'Shade of blue',
    value: 'blue'
  }
];


export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label='Select a color' options={options} selected={selected} onSelectedChange={setSelected}/>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      </div>
  );
};

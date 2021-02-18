import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AddToDo from "./AddToDo";
import ListToDo from "./ListToDo";
import fetchData from "./Data.json";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fetchData);
  }, []);

  const onElementListToDo = (valueInput) => {
    setData([...data, { id: data.length + 1, toDo: valueInput }]);
  };

  const onDeleteElementListToDo = (index) => {
    setData(data.filter((item) => item.id !== index));
  };

  const onCheckElementListToDo = (index) => {
    setData(
      data.map((item) =>
        item.id === index ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <div className="App">
      <AddToDo onElementListToDo={onElementListToDo} />
      <ListToDo
        data={data}
        onDeleteElementListToDo={onDeleteElementListToDo}
        onCheckElementListToDo={onCheckElementListToDo}
      />
    </div>
  );
}

export default App;

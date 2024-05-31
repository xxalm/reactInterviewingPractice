import React, { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleMultiSelection = (index) => {
    if (multiple.includes(index)) {
      setMultiple(multiple.filter(item => item !== index));
    } else {
      setMultiple([...multiple, index]);
    }
  };

  const toggle = (index) => {
    if (enableMultiSelection) {
      handleMultiSelection(index);
    } else {
      if (selected === index) {
        return setSelected(null);
      }
      setSelected(index);
    }
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Desabilitar Seleção Múltipla" : "Habilitar Seleção Múltipla"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item" key={dataItem.id}>
              <div className="title" onClick={() => toggle(index)}>
                <h3>{dataItem.question}</h3>
                <span>{(enableMultiSelection ? multiple.includes(index) : selected === index) ? "-" : "+"}</span>
              </div>
              {(enableMultiSelection ? multiple.includes(index) : selected === index) && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

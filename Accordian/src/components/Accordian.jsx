import { useState } from "react";
import data from "../data";
import "./Accrodian.css";
function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multi, setMulti] = useState(false);
  const [ms, setms] = useState([]);
  function singleSelection(a) {
    if (selected === a) {
      setSelected(null);
    } else {
      setSelected(a);
    }
  }
  function multiselect(a) {
    let b = [...ms];
    const findIndex = b.indexOf(a);
    if (findIndex === -1) {
      b.push(a);
    } else {
      b.splice(findIndex, 1);
    }
    setms(b);
  }
  return (
    <>
      <button
        onClick={() => {
          setMulti((a) => !a);
          setSelected(null);
          setms([]);
        }}
        className={multi ? "active" : ""}
      >
        Set Multi Selection
      </button>
      <div className="wrapper">
        <div className="accrodian">
          {data && data.length > 0 ? (
            data.map((item, i) => (
              <div key={i}>
                <h2>{item.question}</h2>
                <span
                  onClick={() => {
                    multi ? multiselect(item.id) : singleSelection(item.id);
                  }}
                >
                  {multi
                    ? ms.includes(item.id)
                      ? "-"
                      : "+"
                    : selected === item.id
                    ? "-"
                    : "+"}
                </span>
                <div>
                  {multi
                    ? ms.includes(item.id) && (
                        <div>
                          <h3>{item.answer}</h3>
                        </div>
                      )
                    : selected === item.id && (
                        <div>
                          <h3>{item.answer}</h3>
                        </div>
                      )}
                </div>
              </div>
            ))
          ) : (
            <div>No Data Present</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordian;

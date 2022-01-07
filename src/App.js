import React, { useReducer } from "react";
import KeyPad from "./Components/KeyPad";
import Display from "./Components/Display";

const initialState = {
  displayValue: "",
  operator: null,
  firstOperand: 0,
  lastAcceptedKey: null,
  dotPressed: false,
};
const logic = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a * (b / 100),
};

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "number":
        let currentDisplayValue = state.displayValue;
        if (state.lastAcceptedKey === "operator") {
          currentDisplayValue = "";
        }
        return {
          ...state,
          displayValue: currentDisplayValue + action.payload,
          lastAcceptedKey: action.type,
        };
      case "operator":
        if (action.payload === "=") {
          if (state.operator === null) {
            return {
              ...state,
            };
          } else {
            const operation = logic[state.operator];
            const left = state.firstOperand;
            const right = parseFloat(state.displayValue);
            const result = operation(left, right);

            return {
              ...state,
              lastAcceptedKey: action.type,
              operator: null,
              firstOperand: result,
              displayValue: result,
            };
          }
        }
        if (action.payload === ".") {
          if (!state.dotPressed) {
            let currentDisplayValue = state.displayValue;
            return {
              ...state,
              displayValue: currentDisplayValue + action.payload,
              lastAcceptedKey: "number",
              dotPressed: true,
            };
          } else {
            return {
              ...state,
            };
          }
        }

        if (action.payload === "AC") {
          return {
            ...initialState,
          };
        } else {
          return {
            ...state,
            lastAcceptedKey: action.type,
            operator: action.payload,
            firstOperand: parseFloat(state.displayValue),
          };
        }
    }
  };

  const [currentState, dispatch] = useReducer(reducer, initialState);

  const handleClick = (name) => {
    if (!isNaN(name)) {
      dispatch({ type: "number", payload: name });
    } else {
      dispatch({ type: "operator", payload: name });
    }
  };

  return (
    <div>
      <h1>Calculator Application </h1>
      <Display value={currentState.displayValue} />
      <KeyPad handleClickEvent={handleClick} />
    </div>
  );
}

export default App;

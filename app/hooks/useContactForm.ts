import { useReducer } from "react";

export type State = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  answer: string;
  comments: string;
  isVerified: boolean;
};

type Action = {
  type: "SET_FIELD";
  field: keyof State;
  value: string | boolean;
};

const initialState: State = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  answer: "Immediately",
  comments: "",
  isVerified: false,
};

function reducer(state: State, action: Action): State {
  if (action.type === "SET_FIELD") {
    return { ...state, [action.field]: action.value };
  }
  return state;
}

export const useContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setField = (field: keyof State) => (value: string | boolean) =>
    dispatch({ type: "SET_FIELD", field, value });

  const resetForm = () => {
    Object.entries(initialState).forEach(([key, value]) => {
      dispatch({ type: "SET_FIELD", field: key as keyof State, value });
    });
  };

  return { state, setField, resetForm };
};

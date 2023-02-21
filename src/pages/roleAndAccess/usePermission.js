import { useReducer } from "react";

export function usePermission() {
  const [state, dispatch] = useReducer(reducer, {
    employee: {
      new: false,
      edit: false,
      delete: false,
    },
    bank: {
      new: false,
      edit: false,
      delete: false,
    },
    customer: {
      new: false,
      edit: false,
      delete: false,
    },
    exchange: {
      new: false,
      edit: false,
      delete: false,
    },
    trueMoney: {
      new: false,
      edit: false,
      delete: false,
    },
    wave: {
      new: false,
      edit: false,
      delete: false,
    },
  });

  function reducer(state, action) {
    switch (action.type) {
      case "NEW":
        return {
          ...state,
          [action.category]: {
            ...state[action.category],
            new: !state[action.category].new,
          },
        };
      case "EDIT":
        return {
          ...state,
          [action.category]: {
            ...state[action.category],
            edit: !state[action.category].edit,
          },
        };
      case "DELETE":
        return {
          ...state,
          [action.category]: {
            ...state[action.category],
            delete: !state[action.category].delete,
          },
        };
      case "SET_PERMISSION":
        return { ...action.payload };
      default:
        return state;
    }
  }

  function handlePermissionChange(category, type) {
    dispatch({
      type,
      category,
    });
  }

  function setPermission(data) {
    dispatch({
      type: "SET_PERMISSION",
      payload: data,
    });
  }

  return {
    state,
    handlePermissionChange,
    setPermission,
  };
}

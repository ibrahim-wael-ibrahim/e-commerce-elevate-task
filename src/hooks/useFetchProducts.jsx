import { useReducer, useEffect } from "react";

// Initial state for the reducer
const initialState = {
  data: null,
  status: "loading", // loading, error, or receive
  error_message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        status: "receive",
        data: action.payload,
        error_message: "",
      };
    case "dataFailed":
      return { ...state, status: "error", error_message: action.payload };
    default:
      throw new Error("Unknown action.");
  }
}

export function useFetchProducts(id = null) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const url = id
          ? `https://fakestoreapi.com/products/${id}`
          : "https://fakestoreapi.com/products";

        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error("Something went wrong with fetching Products");
        }

        const data = await res.json();

        if (id && typeof data !== "object") {
          throw new Error("Product not found");
        }

        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed", payload: err.message });
      }
    }

    fetchData();

    return function () {
      controller.abort();
    };
  }, [id]);

  return state;
}

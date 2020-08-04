import React, { useState } from "react";

export const initialState = [{}, () => {}];
export const AppContext = React.createContext(initialState);

export function AppProvider(props: any) {
  const [state, setState] = useState({
    query: "",
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
}

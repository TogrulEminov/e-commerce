import { createContext } from 'react';

export const Context = createContext(null);

function AppContext({ children }) {
  const VALUES = {};
  return <Context.Provider value={VALUES}>{children}</Context.Provider>;
}

export default AppContext;

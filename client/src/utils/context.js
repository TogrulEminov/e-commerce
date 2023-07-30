import { createContext } from 'react';

export const Context = createContext(null);

function AppContext({ children }) {
  return <Context.Provider>{children}</Context.Provider>;
}

export default AppContext;

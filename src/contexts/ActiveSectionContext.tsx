import { FC, createContext } from "react";
import ActiveSection from "../enums/ActiveSection";

interface Props {}

const ActiveSectionContext = createContext(ActiveSection.home);

const ActiveSectionProvider: FC<Props> = ({ children }) => (
  <ActiveSectionContext.Provider value={ActiveSection.home}>
    {children}
  </ActiveSectionContext.Provider>
);

export default ActiveSectionProvider;

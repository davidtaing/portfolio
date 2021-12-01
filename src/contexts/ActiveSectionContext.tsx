import { FC, createContext, useState, Dispatch, SetStateAction } from "react";
import SectionName from "../enums/SectionName";

interface Props {}

interface ActiveSectionContextInterface {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>> | null;
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextInterface>({
    activeSection: SectionName.home,
    setActiveSection: null,
  });

const ActiveSectionProvider: FC<Props> = ({ children }) => {
  const [activeSection, setActiveSection] = useState(SectionName.home);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;

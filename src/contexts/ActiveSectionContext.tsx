import { FC, createContext, useState, Dispatch, SetStateAction } from "react";
import ActiveSection from "../enums/ActiveSection";

interface Props {}

interface ActiveSectionContextInterface {
  activeSection: ActiveSection;
  setActiveSection: Dispatch<SetStateAction<ActiveSection>> | null;
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextInterface>({
    activeSection: ActiveSection.home,
    setActiveSection: null,
  });

const ActiveSectionProvider: FC<Props> = ({ children }) => {
  const [activeSection, setActiveSection] = useState(ActiveSection.home);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;

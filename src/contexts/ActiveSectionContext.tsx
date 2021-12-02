import {
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import SectionName from "../enums/SectionName";

interface Props {}

const ActiveSectionContext = createContext<
  | {
      activeSection: SectionName;
      setActiveSection: Dispatch<SetStateAction<SectionName>>;
    }
  | undefined
>(undefined);

const ActiveSectionProvider: FC<Props> = ({ children }) => {
  const [activeSection, setActiveSection] = useState(SectionName.home);
  const value = { activeSection, setActiveSection };

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === undefined) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveStateProvider"
    );
  }

  return context;
};

export default ActiveSectionProvider;

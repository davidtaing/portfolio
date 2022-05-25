import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  PropsWithChildren,
  useContext,
} from "react";
import { useRouter } from "next/router";

interface HeaderContextInterface {
  visible: boolean;
  currentRoute: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const HeaderContext = createContext<HeaderContextInterface | undefined>(
  undefined
);

export function HeaderContextProvider({ children }: PropsWithChildren<{}>) {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <HeaderContext.Provider value={{ visible, setVisible, currentRoute }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderContext() {
  const ctx = useContext(HeaderContext);

  if (ctx === undefined) {
    throw new Error(
      "useHeaderContext must be used inside a HeaderContextProvider"
    );
  }

  return ctx;
}

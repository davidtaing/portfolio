import { Dispatch, SetStateAction } from "react";

interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export function HamburgerMenu({ visible, setVisible }: Props) {
  return (
    <span
      className="hamburger-menu material-symbols-outlined"
      onClick={() => setVisible(!visible)}
    >
      menu
    </span>
  );
}

import { FC } from "react";

interface Props {
  iconName: string;
}

const Icon: FC<Props> = ({ iconName }) => (
  <span className="material-icons">{iconName}</span>
);

export default Icon;

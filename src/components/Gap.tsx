import { ReactNode } from "react";

interface GapProps {
  children?: ReactNode;
  className?: string;
}
export const gapClassName = "px-2 sm:px-10 md:px-20";
const Gap: React.FC<GapProps> = ({ children, className }) => {
  return <div className={`${gapClassName} ${className}`}>{children}</div>;
};

export default Gap;

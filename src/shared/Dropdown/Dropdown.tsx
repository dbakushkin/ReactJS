import React from "react";
import styles from "./dropdown.css";

interface IDropdownProps {
  button?: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  classList?: string;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(
    () => (isDropdownOpen ? onOpen() : onClose()),
    [isDropdownOpen]
  );
  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <ul className={styles.list}>{children}</ul>
        </div>
      )}
    </div>
  );
}

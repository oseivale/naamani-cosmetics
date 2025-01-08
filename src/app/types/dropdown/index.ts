export type DropdownProps = {
  options: string[] | undefined; // Array of dropdown options
  label: string; // Label for the dropdown
  handleScent: (scent: string) => void;
};

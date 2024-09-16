
type ChildrenCheckboxProps = {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  isChildrenChecked: boolean;
};
function ChildrenCheckbox({ onChange, isChildrenChecked }: ChildrenCheckboxProps): JSX.Element {


  return (
    <input
      type="checkbox"
      id="children"
      name="children"
      checked = {isChildrenChecked}
      onChange={onChange}
    />
  );
}

export { ChildrenCheckbox };

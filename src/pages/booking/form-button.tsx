type FormButtonProps = {
  bemBlock: string;
  name: string;
  onClick: () => void;  
};
function FormButton({ bemBlock, name,onClick }: FormButtonProps): JSX.Element {
  return (
    <button className={`btn btn--accent ${bemBlock}`} type="submit" onClick={onClick}>
      {name}
    </button>
  );
}

export { FormButton };

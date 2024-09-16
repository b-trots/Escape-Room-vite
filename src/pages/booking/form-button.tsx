type FormButtonProps = {
  bemBlock: string;
  name: string;
};
function FormButton({ bemBlock, name }: FormButtonProps): JSX.Element {
  return (
    <button className={`btn btn--accent ${bemBlock}`} type="submit">
      {name}
    </button>
  );
}

export { FormButton };

interface prop {
  text: string;
}

const Alert = ({ text }: prop) => {
  return (
    <div className="alert alert-primary" role="alert">
      {text}
    </div>
  );
};

export default Alert;

interface Props {
  onClick: () => void;
}

const Alert = ({ onClick }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
};

export default Alert;

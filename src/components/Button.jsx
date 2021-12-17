const Button = (props) => {
  const handleSwitchToggle = () => {
    let app = document.querySelector(".app");
    app.classList.toggle("is-dark");
  };

  return (
    <div className="toggle-switch">
      <input
        onClick={handleSwitchToggle}
        className="toggle-button"
        type="checkbox"
      />
      <div className="round-button">
        <div></div>
        <div></div>
        <div></div>
        <div className="button-body"></div>
      </div>
    </div>
  );
};

export default Button;

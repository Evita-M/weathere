const Button = (props) => {
  var buttons = document.querySelectorAll(".btn");
  let pressEffect = "btn-pressed";

  function handleOnMouseDown(e, effect) {
    e.target.classList.add(effect);
  }
  function handleOnMouseUp(e, effect) {
    e.target.classList.remove(effect);
  }
  function handleOnMouseOut(e, effect) {
    e.target.classList.remove(effect);
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", (e) =>
      handleOnMouseDown(e, pressEffect)
    );
    buttons[i].addEventListener("mouseup", (e) =>
      handleOnMouseUp(e, pressEffect)
    );
    buttons[i].addEventListener("mouseout", (e) =>
      handleOnMouseOut(e, pressEffect)
    );
  }

  const buttonStyles = {
    minWidth: props.minWidth + "px",
    cursor: "pointer",
  };

  const buttonTextStyles = {
    padding: "8px 15px 10px 15px",
    display: "inline-block",
    width: "100%",
    fontSize: "20px",
  };

  return (
    <button style={buttonStyles}>
      <span style={buttonTextStyles}>{props.children}</span>
    </button>
  );
};

export default Button;

import "./Button.scss";

const Button = ({ name , clickHandler, children }) => {
    return (
        <button onClick={clickHandler} className="button">
            {children}
            {name && name}
        </button>
    );
};

export default Button;

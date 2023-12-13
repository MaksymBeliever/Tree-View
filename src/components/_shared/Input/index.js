import "./Input.scss";

const Input = ({ name, type, placeholder, value, handleChange }) => {
    return (
        <input
            className="input"
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    );
};

export default Input;

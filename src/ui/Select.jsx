function Select({ value, onChange, options }) {
    return (
      <select
        value={value}
        onChange={onChange}
        className="textField__input"
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    );
  }
  
  export default Select;
  
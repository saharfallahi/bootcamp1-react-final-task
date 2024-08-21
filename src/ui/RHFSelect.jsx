function RHFSelect({ name, width, register, options ,placeholder}) {
  return (
    <select
      id={name}
      {...register(name)}
      className={`textField__input ${width}`}
    >
      <option key="" value="">{placeholder}</option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default RHFSelect;

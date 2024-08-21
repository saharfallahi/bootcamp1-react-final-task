
function Label({name, label,display}) {
  return (
    <label htmlFor={name} className={`mb-2 text-secondary-400 ${display}`} >{label}</label>
  )
}

export default Label
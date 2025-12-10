const TypeButton = ({ type, handleClick, styles }) => {
  return (
    <button className={`tipo-btn tipo-${type.name.toLowerCase()} ${styles}`} onClick={() => handleClick(type)}>
      { type.name }
    </button>
  )
}

export default TypeButton

function Square(props) {
    return (
        <button
            className={props.isSelected ? "square selected" : "square"}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

export default Square;
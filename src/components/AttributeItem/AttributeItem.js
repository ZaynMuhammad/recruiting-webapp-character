
export function AttributeItem({ name, value, modifier, increment, decrement }) {
    return (
        <li>
            {name}: {value}(Modifier: {modifier})
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </li>
    );

}
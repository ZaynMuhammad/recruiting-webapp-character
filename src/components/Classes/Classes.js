
export function Classes({ CLASS_LIST, }) {
    return (
        <div>
            <h2>Classes:</h2>
            <ul className="classes-list">
                {Object.keys(CLASS_LIST).map((className) => {
                    return (
                        <li>{className}</li>
                    )
                })}
            </ul>
        </div>
    );
}
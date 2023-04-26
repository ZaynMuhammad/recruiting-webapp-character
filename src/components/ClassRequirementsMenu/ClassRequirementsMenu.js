
export function ClassRequirementsMenu({ CLASS_LIST, pickedClass }) {
    return (
        <div>
            <h2>Class Requirements for {pickedClass}</h2>
            <ul className="class-req-list">
                {
                    pickedClass ?
                        (Object.keys(CLASS_LIST[pickedClass]).map((attributeName) => {
                            return (
                                <li key={attributeName}>
                                    {attributeName}: {CLASS_LIST[pickedClass][attributeName]}
                                </li>
                            )
                        })) : null
                }
            </ul>
        </div>
    )
}
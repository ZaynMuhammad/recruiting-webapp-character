
export function Skills({
    SKILL_LIST,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma
}) {
    return (
        <div>
            <h2>Skills:</h2>
            <ul className="skills-list">
                {SKILL_LIST.map((skill) => (
                        <li
                            key={skill.name}
                            className="skill-item"
                    >
                        <p>{skill.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
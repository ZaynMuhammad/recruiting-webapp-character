import { calculateModifier } from "../../utils/calculateModifier"
import { AttributeItem } from "../AttributeItem/AttributeItem";

export function Attributes({
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    setStrength,
    setDexterity,
    setConstitution,
    setIntelligence,
    setWisdom,
    setCharisma
}) {

    const attributes = [
        { name: "Strength", value: strength, setter: setStrength },
        { name: "Dexterity", value: dexterity, setter: setDexterity },
        { name: "Constitution", value: constitution, setter: setConstitution },
        { name: "Intelligence", value: intelligence, setter: setIntelligence },
        { name: "Wisdom", value: wisdom, setter: setWisdom },
        { name: "Charisma", value: charisma, setter: setCharisma },
    ];

    return (
        <div>
            <h2>Attributes</h2>
            <ul className="attributes-list">
                {attributes.map(({ name, value, setter }) => (
                    <AttributeItem
                        key={name}
                        name={name}
                        value={value}
                        modifier={calculateModifier(value)}
                        increment={() => setter(value + 1)}
                        decrement={() => setter(value - 1)}
                    />
                ))}
            </ul>
        </div>
    )
}
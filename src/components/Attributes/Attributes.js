import { calculateModifier } from "../../utils/calculateModifier"

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
    setCharsima
}) {
    return (
        <div>
            <h2>Attributes</h2>
            <ul className="attributes-list">
                <li>
                    <label>Strength: {strength}(Modifier: {calculateModifier(strength)})</label>
                    <button onClick={() => setStrength(strength + 1)}>+</button>
                    <button onClick={() => setStrength(strength - 1)}>-</button>
                </li>
                <li>
                        Dexterity: {dexterity}(Modifier: {calculateModifier(dexterity)})
                        <button onClick={() => setDexterity(dexterity + 1)}>+</button>
                        <button onClick={() => setDexterity(dexterity - 1)}>-</button>
                    </li>
                    <li>
                        Constitution: {constitution}(Modifier: {calculateModifier(constitution)})
                        <button onClick={() => setConstitution(constitution + 1)}>+</button>
                        <button onClick={() => setConstitution(constitution - 1)}>-</button>
                    </li>
                    <li>
                        Intelligence: {intelligence}(Modifier: {calculateModifier(intelligence)})
                        <button onClick={() => setIntelligence(intelligence + 1)}>+</button>
                        <button onClick={() => setIntelligence(intelligence - 1)}>-</button>
                    </li>
                    <li>
                        Wisdom: {wisdom}(Modifier: {calculateModifier(wisdom)})
                        <button onClick={() => setWisdom(wisdom + 1)}>+</button>
                        <button onClick={() => setWisdom(wisdom - 1)}>-</button>
                    </li>
                    <li>
                        Charisma: {charisma}(Modifier: {calculateModifier(charisma)})
                        <button onClick={() => setCharsima(charisma + 1)}>+</button>
                        <button onClick={() => setCharsima(charisma - 1)}>-</button>
                    </li>
            </ul>
        </div>
    )
}
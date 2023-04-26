import { useState } from "react";
import { calculateModifier } from "../../utils/calculateModifier";
import { SkillTotalItem } from "../SkillTotalItem/SkillTotalItem";

export function Skills({
    SKILL_LIST,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma
}) {
    const [totalSkillPoints, setTotalSkillPoints] = useState(10);

    
    function selectModifier(attribute) {
        switch (attribute) {
            case 'Strength':
                return calculateModifier(strength);
            case 'Dexterity':
                return calculateModifier(dexterity);
            case 'Constitution':
                return calculateModifier(constitution);
            case 'Intelligence':
                return calculateModifier(intelligence);
            case 'Wisdom':
                return calculateModifier(wisdom);
            case 'Charisma':
                return calculateModifier(charisma);
            default:
                return 0;
        }
    }

    function handlePointAllocation(action) {
        if (totalSkillPoints === 0 && action === 'decrement') 
            return;
        
        if (totalSkillPoints === 10 && action === 'increment')
            return;
        
        if (action === 'decrement')
            return setTotalSkillPoints(totalSkillPoints - 1)
        
        if (action === 'increment')
            return setTotalSkillPoints(totalSkillPoints + 1)
    }

    return (
        <div>
            <h2>Skills:</h2>
            <h3>Amount of points available: {totalSkillPoints}</h3>
            <ul className="skills-list">
                {SKILL_LIST.map((skill) => (
                    <SkillTotalItem
                        key={skill.name}
                        skillName={skill.name}
                        attributeModifier={skill.attributeModifier}
                        selectModifier={selectModifier}
                        handlePointAllocation={handlePointAllocation}
                        setTotalSkillPoints={setTotalSkillPoints}
                    />   
                ))}
            </ul>
        </div>
    )
}
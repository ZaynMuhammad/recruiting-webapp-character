import { useState } from "react";

export function SkillTotalItem({
    skillName,
    attributeModifier,
    selectModifier,
    handlePointAllocation,
    setTotalSkillPoints
}) {
    const [total, setTotal] = useState(0);

    function handleSkillTotal(action) {
        if (total === 0 && action === 'decrement')
            return;
        
        if (total === 10 && action === 'increment')
            return;
        
        if (action === 'decrement') {
            setTotal(total - 1);
            handlePointAllocation('increment');
        }

        if (action === 'increment') {
            setTotal(total + 1);
            handlePointAllocation('decrement');
        }
    }

    function handleAttributeModifier() {
        const modifier = selectModifier(attributeModifier);
        if (modifier < 0)
            return total;
        
        if (modifier > 0) {
            return total + modifier;
        }
        
        return total;
    }

    return (
        <li>
            {skillName} ({attributeModifier}):
            {' '}
            {selectModifier(attributeModifier)}
            {' '}
            total: {handleAttributeModifier()}
            {' '}
            <button onClick={() => handleSkillTotal('increment')}>
                +
            </button>
            <button onClick={() => handleSkillTotal('decrement')}>
                -
            </button>
        </li>  
    );
}
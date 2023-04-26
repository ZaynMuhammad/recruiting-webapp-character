import { useState } from 'react';

export function Classes({
    CLASS_LIST,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma
}) {

    const [pickedClass, setPickedClass] = useState('')
    
    function canPickClass(className) {
        const attributes = {
            'Strength': strength,
            'Dexterity': dexterity,
            'Constitution': constitution,
            'Intelligence': intelligence,
            'Wisdom': wisdom,
            'Charisma': charisma,
        }

        const requiredAttributes = CLASS_LIST[className]
        let canPick = true
        for (const attributeName in requiredAttributes) {
            if (requiredAttributes[attributeName] > attributes[attributeName]) {
                canPick = false
                break
            }
        }

        if (canPick) {
            return true
        }
        
        return false
    }

    return (
        <div>
            <h2>Classes:</h2>
            <ul className="classes-list">
                {Object.keys(CLASS_LIST).map((className) => {
                    return (
                        <li
                            key={className}
                            className="class-item"
                            onClick={() => setPickedClass(className)}
                        >
                            
                            <p className={`${canPickClass(className) ? '' : 'invalid'}`}>{className}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
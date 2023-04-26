import { useEffect, useState } from "react";

export function useOutsideClick(ref) {
    const [isOutside, setIsOutside] = useState(true);

    useEffect(() => {
      
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              setIsOutside(true);
        } else {
            setIsOutside(false);
        }
      }
        
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref]);

    return isOutside;
}
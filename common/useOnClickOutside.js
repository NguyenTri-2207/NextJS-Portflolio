import { useEffect } from "react";
/**
 * Set click outside menu by customized hook.
 * @param {reference} ref connect jsx reference.
 * @param {function} handler set the new state to close the menu.
 */

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(false);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            /* Clean up function. Remove event before component unmount. */
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;
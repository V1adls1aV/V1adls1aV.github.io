/**
 * Utility class for performance optimization
 */
class PerformanceUtils {
    /**
     * Creates a throttled version of a function
     * @param {Function} func - The function to throttle
     * @param {number} delay - Delay in milliseconds
     * @returns {Function} - Throttled function
     */
    static throttle(func, delay) {
        let lastCall = 0;
        return function(...args) {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            return func(...args);
        };
    }
}

export default PerformanceUtils;
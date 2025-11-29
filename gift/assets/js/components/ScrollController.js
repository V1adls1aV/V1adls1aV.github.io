import PerformanceUtils from '../utils/PerformanceUtils.js';

/**
 * Controller for managing scroll-based animations and transitions
 */
class ScrollController {
    constructor() {
        this.header = null;
        this.messages = [];
        this.init();
    }

    /**
     * Initialize the scroll controller
     */
    init() {
        this.cacheElements();
        this.bindEvents();
        this.checkMessages(); // Initial check
    }

    /**
     * Cache DOM elements for better performance
     */
    cacheElements() {
        this.header = document.querySelector('.header');
        this.messages = document.querySelectorAll('.message');
    }

    /**
     * Bind scroll event with throttling
     */
    bindEvents() {
        window.addEventListener('scroll', PerformanceUtils.throttle(() => this.checkMessages(), 100));
    }

    /**
     * Calculate current scroll percentage
     * @returns {number} - Scroll percentage (0-100)
     */
    getScrollPercentage() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        return (scrollTop / docHeight) * 100;
    }

    /**
     * Update element classes based on scroll position
     * @param {Element} element - DOM element to update
     * @param {number} from - Start percentage
     * @param {number} to - End percentage
     * @param {number} scrollPercent - Current scroll percentage
     */
    updateElementState(element, from, to, scrollPercent) {
        if (scrollPercent >= from && scrollPercent < to) {
            element.classList.add('active');
            element.classList.remove('exiting');
        } else if (scrollPercent >= to) {
            element.classList.remove('active');
            element.classList.add('exiting');
        } else {
            element.classList.remove('active');
            element.classList.remove('exiting');
        }
    }

    /**
     * Check and update all messages and header based on scroll position
     */
    checkMessages() {
        const scrollPercent = this.getScrollPercentage();

        // Update header
        if (this.header) {
            const headerFrom = parseFloat(this.header.getAttribute('data-from'));
            const headerTo = parseFloat(this.header.getAttribute('data-to'));
            this.updateElementState(this.header, headerFrom, headerTo, scrollPercent);
        }

        // Update messages
        this.messages.forEach(message => {
            const from = parseFloat(message.getAttribute('data-from'));
            const to = parseFloat(message.getAttribute('data-to'));
            this.updateElementState(message, from, to, scrollPercent);
        });
    }
}

export default ScrollController;
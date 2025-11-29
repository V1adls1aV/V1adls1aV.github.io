import ScrollController from './components/ScrollController.js';

/**
 * Main application entry point
 */
class MotherDayApp {
    constructor() {
        this.scrollController = null;
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.startApp());
        } else {
            this.startApp();
        }
    }

    /**
     * Start the application components
     */
    startApp() {
        this.scrollController = new ScrollController();
        console.log('Mother\'s Day application initialized');
    }
}

// Initialize the application
const app = new MotherDayApp();
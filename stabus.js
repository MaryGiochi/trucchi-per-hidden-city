/**
 * levelTracker - Simple Level Progression Manager
 * Author: MaryGiochi
 * License: Custom
 */

class levelTracker {
    /**
     * Initializes the level tracker.
     * @param {number} maxLevel - Maximum achievable level.
     */
    constructor(maxLevel = 10) {
        if (typeof maxLevel !== 'number' || maxLevel < 1) {
            throw new Error('[levelTracker] Invalid maximum level.');
        }
        this.currentLevel = 1;
        this.maxLevel = maxLevel;
    }

    /**
     * Advances to the next level if possible.
     */
    next() {
        if (this.currentLevel < this.maxLevel) {
            this.currentLevel++;
            console.log(`[levelTracker] Advanced to level ${this.currentLevel}.`);
        } else {
            console.log('[levelTracker] Maximum level reached.');
        }
    }

    /**
     * Resets the level to 1.
     */
    reset() {
        this.currentLevel = 1;
        console.log('[levelTracker] Level reset to 1.');
    }

    /**
     * Returns the current level.
     * @returns {number}
     */
    getLevel() {
        return this.currentLevel;
    }
}

// Example usage:
// const tracker = new levelTracker(5);
// tracker.next();
// tracker.next();
// console.log(tracker.getLevel()); // Output: 3
// tracker.reset();

module.exports = levelTracker;

/**
 * Enumeration defining the various log levels
 */
var Level;
(function (Level) {
    /**
     * Error indicators - Will be logged in RED.
     */
    Level[Level["Error"] = 0] = "Error";
    /**
     * Info indicators - Will be logged in BLUE.
     */
    Level[Level["Info"] = 1] = "Info";
    /**
     *  Debug indicators - Used for internal trainnings
     */
    Level[Level["Debug"] = 2] = "Debug";
})(Level || (Level = {}));
/**
 * A global function that can be used to log different error levels
 *
 * @param message                The message to be logged.
 * @param level                  enum value to indicate log level
 *
 * @returns boolean     Status indicate log was successful
 */
function globalLogger(message, level) {
    switch (level) {
        case Level.Error:
            console.error(message);
            break;
        case Level.Info:
            console.info(message);
            break;
        case Level.Debug:
            console.debug(message);
            break;
        default:
            console.log(message);
    }
    return true;
}
//# sourceMappingURL=logger.js.map
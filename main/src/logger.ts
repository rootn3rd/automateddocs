/**
 * Enumeration defining the various log levels
 */
enum Level {
    /**
     * Error indicators - Will be logged in RED.
     */
    Error, 
    /**
     * Info indicators - Will be logged in BLUE.
     */
    Info,
    /**
     *  Debug indicators - Used for internal trainnings
     */
     Debug
}



/**
 * A global function that can be used to log different error levels
 *
 * @param message                The message to be logged.
 * @param level                  enum value to indicate log level
 * 
 * @returns boolean     Status indicate log was successful
 */

function globalLogger(message: string, level: Level) : boolean {

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
        default :
            console.log(message);
    }

    return true;
}
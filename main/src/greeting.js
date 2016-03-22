/**
 * Module for printing out messages
 *
 * @module GreetingsModule
 */
var GreetingsModule;
(function (GreetingsModule) {
    var Greetings = (function () {
        function Greetings() {
            /**
             * private variable to hold the message text
             * @private
             *  */
            this.message = "This is a sample test message";
        }
        /**
        * Prints out the actual message.
        */
        Greetings.prototype.greet = function () {
            console.log(this.message);
        };
        return Greetings;
    })();
    GreetingsModule.Greetings = Greetings;
})(GreetingsModule || (GreetingsModule = {}));
//var x = GreetingsModule.greeter.greet(); 
//# sourceMappingURL=greeting.js.map
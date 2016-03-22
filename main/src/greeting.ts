/**
 * Module for printing out messages
 * 
 * @module GreetingsModule
 */

module GreetingsModule {


    export interface IMessages {
        greet(): void;
    }

    export class Greetings implements IMessages {
        /**
         * private variable to hold the message text
         * @private
         *  */
        message: string = "This is a sample test message";

        /**
        * Prints out the actual message.
        */
        greet(): void {
            console.log(this.message);
        }

    }

    /**
    * Global greeting object exposed.
    * @public
    */
   // export var greeter = new Greetings();
}
//var x = GreetingsModule.greeter.greet();
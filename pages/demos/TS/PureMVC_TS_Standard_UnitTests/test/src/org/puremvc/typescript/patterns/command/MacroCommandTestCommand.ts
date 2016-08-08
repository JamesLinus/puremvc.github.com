///<reference path='../../../../../../../bin/puremvc-typescript-standard-1.0.d.ts'/>

///<reference path='MacroCommandTestSub1Command.ts'/>
///<reference path='MacroCommandTestSub2Command.ts'/>

module test
{
	"use strict";

	/**
	 * A MacroCommand subclass used by MacroCommandTest.
	 */
	export class MacroCommandTestCommand
		extends puremvc.MacroCommand
		implements puremvc.ICommand
	{
		/**
		 * Initialize the MacroCommandTestCommand by adding
		 * its 2 SubCommands.
		 *
		 * @override
		 */
		initializeMacroCommand()
		{
			this.addSubCommand( MacroCommandTestSub1Command );
			this.addSubCommand( MacroCommandTestSub2Command );
		}
	}
}
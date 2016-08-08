///<reference path='../../../../../../../test/lib/YUITest.d.ts'/>
///<reference path='../../../../../../../bin/puremvc-typescript-standard-1.0.d.ts'/>

module test
{
	"use strict";

	/**
	 * Test the PureMVC Notification class.
	 */
	export class NotificationTest
	{
		/**
		 * The name of the test case - if not provided, one is automatically generated by the
		 * YUITest framework.
		 */
		name:string = "PureMVC Notification class tests";

		/**
		 * Tests setting and getting the name using Notification class accessor methods.
		 */
		testNameAccessors():void
		{
			// Create a new Notification and use accessors to set the notification name
			var notification:puremvc.INotification = new puremvc.Notification('TestNote');

			// test assertions
			YUITest.Assert.areEqual
			(
				'TestNote',
				notification.getName(),
				"Expecting notification.getName() == 'TestNote'"
			);
		}

		/**
		 * Tests setting and getting the body using Notification class accessor methods.
		 */
		testBodyAccessors():void
		{

			// Create a new Notification and use accessors to set the body
			var notification:puremvc.INotification = new puremvc.Notification(null);
			notification.setBody(5);

			// test assertions
			YUITest.Assert.areSame
			(
				5,
				notification.getBody(),
				"Expecting notification.getBody() === 5"
			);
		}

		/**
		 * Tests setting the name and body using the Notification class constructor.
		 */
		testConstructor():void
		{
			// Create a new Notification using the Constructor to set the notification name and body.
			var notification:puremvc.INotification = new puremvc.Notification( 'TestNote', 5, 'TestNoteType' );

			// test assertions
			YUITest.Assert.areEqual
			(
				"TestNote",
				notification.getName(),
				"Expecting notification.getName() == 'TestNote'"
			);

			YUITest.Assert.areSame
			(
				5,
				notification.getBody(),
				"Expecting notification.getBody() === 5"
			);

			YUITest.Assert.areEqual
			(
				"TestNoteType",
				notification.getType(),
				"Expecting notification.getType() == 'TestNoteType'"
			);
		}

		/**
		 * Tests the toString method of the notification.
		 */
		testToString():void
		{
			// Create a new Notification and use accessors to set the notification name.
			var notification:puremvc.INotification = new puremvc.Notification( 'TestNote', [1,3,5], 'TestType' );
			var ts:String = "Notification Name: TestNote\nBody:1,3,5\nType:TestType";

			// test assertions
			YUITest.Assert.areEqual
			(
				ts,
				notification.toString(),
				"Expecting notification.testToString() == '" + ts + "'"
			);
		}
	}
}
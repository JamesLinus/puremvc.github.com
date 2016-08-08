Ext.data.JsonP.puremvc_SimpleCommand({"singleton":false,"statics":{"cfg":[],"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[]},"files":[{"filename":"SimpleCommand.js","href":"SimpleCommand.html#puremvc-SimpleCommand"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/puremvc.Notifier' rel='puremvc.Notifier' class='docClass'>puremvc.Notifier</a><div class='subclass '><strong>puremvc.SimpleCommand</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/SimpleCommand.html#puremvc-SimpleCommand' target='_blank'>SimpleCommand.js</a></div></pre><div class='doc-contents'><p>SimpleCommands encapsulate the business logic of your application. Your\nsubclass should override the <a href=\"#!/api/puremvc.SimpleCommand-method-execute\" rel=\"puremvc.SimpleCommand-method-execute\" class=\"docClass\">execute</a> method where your business logic will\nhandle the\n<a href=\"#!/api/puremvc.Notification\" rel=\"puremvc.Notification\" class=\"docClass\">Notification</a></p>\n\n<p>Take a look at\n<a href=\"#!/api/puremvc.Facade-method-registerCommand\" rel=\"puremvc.Facade-method-registerCommand\" class=\"docClass\">Facade's registerCommand</a>\nor <a href=\"#!/api/puremvc.Controller-method-registerCommand\" rel=\"puremvc.Controller-method-registerCommand\" class=\"docClass\">Controllers registerCommand</a>\nmethods to see how to add commands to your application.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-facade' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/puremvc.Notifier' rel='puremvc.Notifier' class='defined-in docClass'>puremvc.Notifier</a><br/><a href='source/Notifier.html#puremvc-Notifier-property-facade' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.Notifier-property-facade' class='name expandable'>facade</a><span> : <a href=\"#!/api/puremvc.Facade\" rel=\"puremvc.Facade\" class=\"docClass\">puremvc.Facade</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>A reference to this Notifier's Facade. ...</div><div class='long'><p>A reference to this Notifier's Facade. This reference will not be available\nuntil <a href=\"#!/api/puremvc.Notifier-method-initializeNotifier\" rel=\"puremvc.Notifier-method-initializeNotifier\" class=\"docClass\">initializeNotifier</a> has been called.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.SimpleCommand'>puremvc.SimpleCommand</span><br/><a href='source/SimpleCommand.html#puremvc-SimpleCommand-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/puremvc.SimpleCommand-method-constructor' class='name expandable'>puremvc.SimpleCommand</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/puremvc.Notifier-method-constructor' rel='puremvc.Notifier-method-constructor' class='docClass'>puremvc.Notifier.constructor</a></p></div></div></div><div id='method-execute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.SimpleCommand'>puremvc.SimpleCommand</span><br/><a href='source/SimpleCommand.html#puremvc-SimpleCommand-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.SimpleCommand-method-execute' class='name expandable'>execute</a>( <span class='pre'><a href=\"#!/api/puremvc.Notification\" rel=\"puremvc.Notification\" class=\"docClass\">puremvc.Notification</a> notification</span> ) : void</div><div class='description'><div class='short'>Fulfill the use-case initiated by the given Notification\n\nIn the Command Pattern, an application use-case typically b...</div><div class='long'><p>Fulfill the use-case initiated by the given Notification</p>\n\n<p>In the Command Pattern, an application use-case typically begins with some\nuser action, which results in a Notification is handled by the business logic\nin the <a href=\"#!/api/puremvc.SimpleCommand-method-execute\" rel=\"puremvc.SimpleCommand-method-execute\" class=\"docClass\">execute</a> method of a command.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>notification</span> : <a href=\"#!/api/puremvc.Notification\" rel=\"puremvc.Notification\" class=\"docClass\">puremvc.Notification</a><div class='sub-desc'><p>The notification to handle.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFacade' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/puremvc.Notifier' rel='puremvc.Notifier' class='defined-in docClass'>puremvc.Notifier</a><br/><a href='source/Notifier.html#puremvc-Notifier-method-getFacade' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.Notifier-method-getFacade' class='name expandable'>getFacade</a>( <span class='pre'></span> ) : <a href=\"#!/api/puremvc.Facade\" rel=\"puremvc.Facade\" class=\"docClass\">puremvc.Facade</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Retrieve the Multiton Facade instance ...</div><div class='long'><p>Retrieve the Multiton Facade instance</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/puremvc.Facade\" rel=\"puremvc.Facade\" class=\"docClass\">puremvc.Facade</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initializeNotifier' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/puremvc.Notifier' rel='puremvc.Notifier' class='defined-in docClass'>puremvc.Notifier</a><br/><a href='source/Notifier.html#puremvc-Notifier-method-initializeNotifier' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.Notifier-method-initializeNotifier' class='name expandable'>initializeNotifier</a>( <span class='pre'>string key</span> ) : void</div><div class='description'><div class='short'>Initialize this Notifier instance. ...</div><div class='long'><p>Initialize this Notifier instance.</p>\n\n<p>This is how a Notifier gets its multitonKey.\nCalls to <a href=\"#!/api/puremvc.Notifier-method-sendNotification\" rel=\"puremvc.Notifier-method-sendNotification\" class=\"docClass\">sendNotification</a> or to access the\nfacade will fail until after this method\nhas been called.</p>\n\n<p>Mediators, Commands or Proxies may override\nthis method in order to send notifications\nor access the Multiton Facade instance as\nsoon as possible. They CANNOT access the facade\nin their constructors, since this method will not\nyet have been called.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : string<div class='sub-desc'><p>The Notifiers multiton key;</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-sendNotification' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/puremvc.Notifier' rel='puremvc.Notifier' class='defined-in docClass'>puremvc.Notifier</a><br/><a href='source/Notifier.html#puremvc-Notifier-method-sendNotification' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.Notifier-method-sendNotification' class='name expandable'>sendNotification</a>( <span class='pre'>string notificationName, [Object body], [string type]</span> ) : void</div><div class='description'><div class='short'>Create and send a Notification. ...</div><div class='long'><p>Create and send a Notification.</p>\n\n<p>Keeps us from having to construct new Notification instances in our\nimplementation code.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>notificationName</span> : string<div class='sub-desc'><p>A notification name</p>\n</div></li><li><span class='pre'>body</span> : Object (optional)<div class='sub-desc'><p>The body of the notification</p>\n</div></li><li><span class='pre'>type</span> : string (optional)<div class='sub-desc'><p>The notification type</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"uses":[],"code_type":"function","inheritdoc":null,"superclasses":["puremvc.Notifier","puremvc.SimpleCommand"],"mixedInto":[],"mixins":[],"members":{"property":[{"owner":"puremvc.Notifier","meta":{"protected":true},"name":"facade","id":"property-facade","tagname":"property"}],"cfg":[],"css_var":[],"css_mixin":[],"event":[],"method":[{"owner":"puremvc.SimpleCommand","meta":{},"name":"constructor","id":"method-constructor","tagname":"method"},{"owner":"puremvc.SimpleCommand","meta":{},"name":"execute","id":"method-execute","tagname":"method"},{"owner":"puremvc.Notifier","meta":{"protected":true},"name":"getFacade","id":"method-getFacade","tagname":"method"},{"owner":"puremvc.Notifier","meta":{},"name":"initializeNotifier","id":"method-initializeNotifier","tagname":"method"},{"owner":"puremvc.Notifier","meta":{},"name":"sendNotification","id":"method-sendNotification","tagname":"method"}]},"allMixins":[],"meta":{"author":["PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau","Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved."]},"private":false,"name":"puremvc.SimpleCommand","alternateClassNames":[],"aliases":{},"html_meta":{"author":null},"tagname":"class","extends":"puremvc.Notifier","requires":[],"id":"class-puremvc.SimpleCommand","subclasses":[],"inheritable":false});
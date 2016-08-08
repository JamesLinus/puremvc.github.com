Ext.data.JsonP.puremvc_Observer({"singleton":false,"statics":{"cfg":[],"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[]},"files":[{"filename":"Observer.js","href":"Observer.html#puremvc-Observer"}],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Observer.html#puremvc-Observer' target='_blank'>Observer.js</a></div></pre><div class='doc-contents'><p>A base Observer implementation.</p>\n\n<p>An Observer is an object that encapsulates information\nabout an interested object with a method that should\nbe called when a particular Notification is broadcast.</p>\n\n<p>In PureMVC, the Observer class assumes these responsibilities:</p>\n\n<ul>\n<li>Encapsulate the notification (callback) method of the interested object.</li>\n<li>Encapsulate the notification context (this) of the interested object.</li>\n<li>Provide methods for setting the notification method and context.</li>\n<li>Provide a method for notifying the interested object.</li>\n</ul>\n\n\n<p>The notification method on the interested object should take\none parameter of type Notification.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.Observer'>puremvc.Observer</span><br/><a href='source/Observer.html#puremvc-Observer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/puremvc.Observer-method-constructor' class='name expandable'>puremvc.Observer</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-compareNotifyContext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.Observer'>puremvc.Observer</span><br/><a href='source/Observer.html#puremvc-Observer-method-compareNotifyContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.Observer-method-compareNotifyContext' class='name expandable'>compareNotifyContext</a>( <span class='pre'>Object object</span> ) : boolean</div><div class='description'><div class='short'>Compare an object to this Observers notification context. ...</div><div class='long'><p>Compare an object to this Observers notification context.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-notifyObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.Observer'>puremvc.Observer</span><br/><a href='source/Observer.html#puremvc-Observer-method-notifyObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.Observer-method-notifyObserver' class='name expandable'>notifyObserver</a>( <span class='pre'><a href=\"#!/api/puremvc.Notification\" rel=\"puremvc.Notification\" class=\"docClass\">puremvc.Notification</a> notification</span> ) : void</div><div class='description'><div class='short'>Notify the interested object. ...</div><div class='long'><p>Notify the interested object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>notification</span> : <a href=\"#!/api/puremvc.Notification\" rel=\"puremvc.Notification\" class=\"docClass\">puremvc.Notification</a><div class='sub-desc'><p>The Notification to pass to the interested objects notification method</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setNotifyContext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.Observer'>puremvc.Observer</span><br/><a href='source/Observer.html#puremvc-Observer-method-setNotifyContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.Observer-method-setNotifyContext' class='name expandable'>setNotifyContext</a>( <span class='pre'>Object notifyContext</span> ) : void</div><div class='description'><div class='short'>Set the Observers notification context. ...</div><div class='long'><p>Set the Observers notification context.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>notifyContext</span> : Object<div class='sub-desc'><p>the notification context (this) of the interested object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setNotifyMethod' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='puremvc.Observer'>puremvc.Observer</span><br/><a href='source/Observer.html#puremvc-Observer-method-setNotifyMethod' target='_blank' class='view-source'>view source</a></div><a href='#!/api/puremvc.Observer-method-setNotifyMethod' class='name expandable'>setNotifyMethod</a>( <span class='pre'>Function notifyMethod</span> ) : void</div><div class='description'><div class='short'>Set the Observers notification method. ...</div><div class='long'><p>Set the Observers notification method.</p>\n\n<p>The notification method should take one parameter of type Notification</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>notifyMethod</span> : Function<div class='sub-desc'><p>the notification (callback) method of the interested object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"uses":[],"code_type":"function","inheritdoc":null,"superclasses":[],"mixedInto":[],"mixins":[],"members":{"property":[],"cfg":[],"css_var":[],"css_mixin":[],"event":[],"method":[{"owner":"puremvc.Observer","meta":{},"name":"constructor","id":"method-constructor","tagname":"method"},{"owner":"puremvc.Observer","meta":{},"name":"compareNotifyContext","id":"method-compareNotifyContext","tagname":"method"},{"owner":"puremvc.Observer","meta":{},"name":"notifyObserver","id":"method-notifyObserver","tagname":"method"},{"owner":"puremvc.Observer","meta":{},"name":"setNotifyContext","id":"method-setNotifyContext","tagname":"method"},{"owner":"puremvc.Observer","meta":{},"name":"setNotifyMethod","id":"method-setNotifyMethod","tagname":"method"}]},"allMixins":[],"meta":{"author":["PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau","Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved."]},"private":false,"name":"puremvc.Observer","alternateClassNames":[],"aliases":{},"html_meta":{"author":null},"tagname":"class","extends":null,"requires":[],"id":"class-puremvc.Observer","subclasses":[],"inheritable":false});
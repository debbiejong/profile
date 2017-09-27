if (self.CavalryLogger) { CavalryLogger.start_js(["RUp\/J"]); }

__d("XEventReminderImpressionLoggerAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/events\/ajax\/reminder\/impression\/",{acontext:{type:"StringToStringMap",required:true},data:{type:"StringToStringMap"}})}),null);
__d('EventReminderController',['Arbiter','AsyncRequest','DOM','DOMQuery','Event','Scroll','ScrollableArea','XEventReminderImpressionLoggerAsyncController'],(function a(b,c,d,e,f,g){var h={registerReminder:function i(j,k){this._firstOpen=true;var l=j.getDialog(),m=c('ScrollableArea').getInstance(c('DOMQuery').scry(l.getRoot(),'.uiScrollableArea')[0]),n=null;if(m){n=c('DOM').find(m.getElement(),'div.uiScrollableAreaWrap');m.subscribe('scroll',function(){return c('Arbiter').inform('EventReminderDialog/scroll',{rect:n.getBoundingClientRect(),scrollTop:c('Scroll').getTop(n)})})}c('Event').listen(j.getRoot(),'click',function(event){event.preventDefault()});l.subscribe('show',function(){var o=c('XEventReminderImpressionLoggerAsyncController').getURIBuilder().setStringToStringMap('acontext',k).setStringToStringMap('data',{first_open:this._firstOpen}).getURI();new (c('AsyncRequest'))(o).send();this._firstOpen=false;var p={};if(n)p={rect:n.getBoundingClientRect()};c('Arbiter').inform('EventReminderDialog/show',p)}.bind(this));l.subscribe('hide',function(){return c('Arbiter').inform('EventReminderDialog/hide')})}};f.exports=h}),null);
__d('FlexibleScrollableArea',['DataStore','DOM','DOMDimensions','Event','Parent','Run','Style','Vector','throttle'],(function a(b,c,d,e,f,g){var h=30,i=100;function j(k,l,m,n,o){'use strict';this._element=k;this._tight=l;this._measureFrom=m;this._minHeight=n;this._margin=o;c('DataStore').set(this._element,'FlexibleScrollableArea',this);c('Run').onLeave(this.cleanup.bind(this));this._listener=c('Event').listen(window,'resize',c('throttle')(this.poke,i,this));this.poke()}j.prototype.poke=function(){'use strict';var k=c('DOM').find(this._element,'.uiScrollableAreaBody'),l=c('Vector').getElementDimensions(k).y+c('DOMDimensions').measureElementBox(k,'height',true,true,true),m;if(this._tight){var n=this.getMaxHeight();if(l<n+h)n+=h;m=Math.max(Math.min(l,n),this._minHeight)}else m=Math.max(this.getMaxHeight(),this._minHeight);c('Style').set(this._element,'height',m+'px')};j.prototype.getMaxHeight=function(){'use strict';if(this._measureFrom==='bottom'){var k=c('Vector').getViewportDimensions().y,l=c('Vector').getElementPosition(this._element,'viewport').y,m=k-l;return m-this._margin}var n=c('Vector').getElementPosition(this._element,'viewport').y+c('Vector').getElementDimensions(this._element).y;return n-this._margin};j.prototype.cleanup=function(){'use strict';this._listener&&this._listener.remove()};j.getInstance=function(k){'use strict';var l=c('Parent').byClass(k,'flexibleScrollableArea');return l?c('DataStore').get(l,'FlexibleScrollableArea'):null};f.exports=j}),null);
__d('ReminderStory',['AsyncRequest','Arbiter','Bootloader','DOMQuery','Event','FlexibleScrollableArea','LayerAutoFocus','ScrollableArea','SubscriptionsHandler','getActiveElement'],(function a(b,c,d,e,f,g){function h(i,j,k,l,m,n){'use strict';this.$ReminderStory1=false;this.$ReminderStory2=j;this.$ReminderStory3=i;c('Event').listen(i,'click',function(event){if(k&&c('DOMQuery').contains(k,event.target))return;j.show();if(l)new (c('AsyncRequest'))('/growth/reminder/logging.php').setData({context_data:l,first_click:!this.$ReminderStory1}).send();this.$ReminderStory1=true}.bind(this));if(m)j.subscribeOnce('show',function(){c('Bootloader').loadModules(["UIPagelet"],function(o){return o.loadFromEndpoint(m,j.getContent(),n)},'ReminderStory')});j.disableBehavior(c('LayerAutoFocus'));j.subscribe('aftershow',function(){var o=j.getRoot(),p=c('DOMQuery').scry(o,'#SuggestBelowInvite')[0];if(p)new (c('AsyncRequest'))('/ajax/pages/reminder/recommendations').send();var q=j.hide.bind(j);this.$ReminderStory4=new (c('SubscriptionsHandler'))();this.$ReminderStory4.addSubscriptions(c('Event').listen(window,'resize',q),c('Event').listen(window,'scroll',q));var r=c('DOMQuery').scry(o,'.inlineReplyTextArea');r[0]&&r[0].focus();var s=c('DOMQuery').scry(o,'.jewelItemNew'),t=[];s.forEach(function(x){var y=s[x].getAttribute('id');if(y&&y.endsWith('_1_req'))t=t.concat(y.replace('_1_req',''));});if(t.length>0)new (c('AsyncRequest'))('/friends/requests/log_impressions').setData({ids:t.join(','),ref:'reminder_box'}).send();var u=c('ScrollableArea').getInstance(c('DOMQuery').scry(j.getRoot(),'.uiScrollableArea')[0]),v=c('FlexibleScrollableArea').getInstance(c('DOMQuery').scry(j.getRoot(),'.flexibleScrollableArea')[0]),w=function x(){if(v)v.poke();if(u){u.poke();c('Event').fire(c('DOMQuery').scry(j.getRoot(),'.scrollable')[0],'scroll')}};w();c('Arbiter').subscribe('reflow',function(){var x=c('DOMQuery').scry(o,'.fbRemindersBirthdayList');if(r&&x)for(var y=0;y<r.length;++y)if(r[y]==c('getActiveElement')()&&c('DOMQuery').contains(x[0],r[y]))w();})}.bind(this));j.subscribe('beforehide',function(){if(this.$ReminderStory4){this.$ReminderStory4.release();this.$ReminderStory4=null}}.bind(this))}h.prototype.getDialog=function(){'use strict';return this.$ReminderStory2};h.prototype.getRoot=function(){'use strict';return this.$ReminderStory3};f.exports=h}),null);
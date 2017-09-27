if (self.CavalryLogger) { CavalryLogger.start_js(["CDwUw"]); }

__d('MessagingBugReportStateUtils',['ifRequired'],(function a(b,c,d,e,f,g){'use strict';var h='N/A',i=function k(){return h},j={getStateSnapshot:function k(){var l=false,m=false;c('ifRequired')('ChatSidebarVisibility',function(p){l=p.isSidebarVisible();m=p.isBuddyListVisible()});var n=h,o=h;c('ifRequired')('MercurySyncDeltaHolder',function(p){var q=p.get();n=q.getLastSeqID();o=q.getTop()});return {channel_connection:c('ifRequired')('ChannelConnection',function(p){return !p.disconnected()},i),buddylist_visible:m,sidebar_visible:l,tab_id:c('ifRequired')('ChannelClientID',function(p){return p.getID()},i),channel_host:c('ifRequired')('ChannelManager',function(p){return p.getConfig('fullHost')+'.'+p.getConfig('domain')},i),processedSeqID:n,receivedSeqID:o}}};f.exports=j}),null);
__d('AutomaticScreenshot.react',['cx','Image.react','React','html2canvas'],(function a(b,c,d,e,f,g,h){var i='data-html2canvas-ignore',j=c('React').PropTypes,k=c('React').createClass({displayName:'AutomaticScreenshot',propTypes:{hiddenElementSelector:j.func,onBeforeCaptureScreenshotHandler:j.func,onScreenshotCapturedHandler:j.func},getInitialState:function l(){return {imageURI:'',scrollPos:0}},_onRendered:function l(m){if(this.isMounted()){var n=m.toDataURL();this.setState({imageURI:n});window.scrollTo(0,this.state.scrollPos);if(this.props.hiddenElementSelector)this.props.hiddenElementSelector().removeAttribute(i,true);if(this.props.onScreenshotCapturedHandler)this.props.onScreenshotCapturedHandler(n);}},componentDidMount:function l(){if(this.props.hiddenElementSelector)this.props.hiddenElementSelector().setAttribute(i,true);if(this.props.onBeforeCaptureScreenshotHandler)this.props.onBeforeCaptureScreenshotHandler();this.setState({scrollPos:document.body.scrollTop});c('html2canvas')([document.body],{onrendered:this._onRendered,useCORS:true})},render:function l(){var m=this.state.imageURI?c('React').createElement('div',null,c('React').createElement(c('Image.react'),{src:this.state.imageURI,className:"_20ym"}),c('React').createElement('input',{type:'hidden',name:'screenshot_data_uri',value:this.state.imageURI})):c('React').createElement('div',{className:"_20yn"},'Loading...');return c('React').createElement('div',{className:"_20yl"},m)}});f.exports=k}),null);
__d('EventHandlerUtils',['DataStore'],(function a(b,c,d,e,f,g){var h={introspect:function i(j){var k=[],l=j;do{var m=c('DataStore').get(l,'Event.listeners');if(m)k.unshift({elementRef:l,handlers:m});l=l.parentNode}while(l!=null);return k}};f.exports=h}),null);
__d('SRTUtils',['DateConsts'],(function a(b,c,d,e,f,g){var h=c('DateConsts').SEC_PER_MIN,i=c('DateConsts').SEC_PER_HOUR,j={convertSecondsToString:function k(l){var m=Math.floor(l/i),n=Math.floor(l%i/h),o=Math.ceil(l%i%h),p=m.toString().length;p=p>1?p:2;return ('0'+m).slice(-p)+':'+('0'+n).slice(-2)+':'+('0'+o).slice(-2)},convertSecondsToMinutes:function k(l){return Math.floor(l/h)},convertMinutesToSeconds:function k(l){return l*h}};f.exports=j}),null);
__d('LayerHideOnSuccess',[],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i}h.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('success',this._layer.hide.bind(this._layer))};h.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null}};Object.assign(h.prototype,{_subscription:null});f.exports=h}),null);
__d('ModalLayerBugNub',['DOM','ModalLayer'],(function a(b,c,d,e,f,g){var h=false,i={init:function j(k){if(h)return;h=true;c('ModalLayer').subscribe('show',function(l,m){c('DOM').appendContent(m.getLayerContentRoot(),k)});c('ModalLayer').subscribe('hide',function(l,m){c('DOM').remove(k)})}};f.exports=i}),null);
__d('DialogUtils',['Event'],(function a(b,c,d,e,f,g){var h={showDialogOnClickTruthyReturn:function i(j,k){c('Event').listen(j,'click',function(){k.show();return true})},showDialogOnClick:function i(j,k){c('Event').listen(j,'click',function(){k.show();return false})}};f.exports=h}),null);
__d('MouseEventAccumulator.react',['React'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.state={hover:false,clicked:false},l}j.prototype.render=function(){var k=this.props,l=k.render,m=babelHelpers.objectWithoutProperties(k,['render']);return c('React').createElement('span',babelHelpers['extends']({},m,{onMouseEnter:function(){return this.setState({hover:true})}.bind(this),onMouseLeave:function(){return this.setState({hover:false})}.bind(this),onClick:function(){return this.setState({clicked:true})}.bind(this)}),l(this.state))};f.exports=j}),null);
__d("XBrowserPreRenderLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/logging\/prerender\/",{href:{type:"String",required:true},page_id:{type:"String",required:true},script_path:{type:"String",required:true},session_name:{type:"String"},visibility_state:{type:"String",required:true}})}),null);
__d('ReportPreRender',['ScriptPath','XBrowserPreRenderLoggingController','pageID'],(function a(b,c,d,e,f,g){var h=null,i=null;if(document.visibilityState){h='visibilitychange';i='visibilityState'}else if(document.webkitVisibilityState){h='webkitvisibilitychange';i='webkitVisibilityState'}function j(){var k=document[i];if(k=='visible')document.removeEventListener(h,j);var l=c('XBrowserPreRenderLoggingController').getURIBuilder().setString('href',window.location.href).setString('page_id',c('pageID')).setString('script_path',c('ScriptPath').getScriptPath()).setString('visibility_state',k).setString('session_name',window.name);new Image().src=l.getURI()}if(i&&document[i]=='prerender'){j();document.addEventListener(h,j)}f.exports={}}),null);
__d("XAtWorkSAMLUnlinkController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/work\/saml\/unlink_account\/",{})}),null);
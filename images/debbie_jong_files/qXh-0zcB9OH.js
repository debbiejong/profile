if (self.CavalryLogger) { CavalryLogger.start_js(["leDlV"]); }

__d('StreamBandwidthReporter',['EventEmitter','ReadableStream','WritableStream','performanceNow','pipeErrorTo'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('EventEmitter'));i=h&&h.prototype;j.prototype.$StreamBandwidthReporter5=function(k){this.$StreamBandwidthReporter3.enqueue(k)};function j(){i.constructor.call(this);this.$StreamBandwidthReporter1=0;this.writable=new (c('WritableStream'))({start:function(k){this.$StreamBandwidthReporter2=c('performanceNow')();this.$StreamBandwidthReporter4=k}.bind(this),write:function(k){if(k.length!=undefined)this.$StreamBandwidthReporter1+=k.length;this.emit('bandwidthUpdate',{bytesRead:this.$StreamBandwidthReporter1,timeTaken:c('performanceNow')()-this.$StreamBandwidthReporter2});this.$StreamBandwidthReporter5(k)}.bind(this),close:function(){this.$StreamBandwidthReporter3.close()}.bind(this),abort:function(k){c('pipeErrorTo')(this.$StreamBandwidthReporter3,k)}.bind(this)});this.readable=new (c('ReadableStream'))({start:function(k){this.$StreamBandwidthReporter3=k}.bind(this),cancel:function(k){c('pipeErrorTo')(this.$StreamBandwidthReporter4,k)}.bind(this)})}f.exports=j}),null);
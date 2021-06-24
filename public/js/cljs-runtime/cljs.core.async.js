goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48487 = arguments.length;
switch (G__48487) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48493 = (function (f,blockable,meta48494){
this.f = f;
this.blockable = blockable;
this.meta48494 = meta48494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48495,meta48494__$1){
var self__ = this;
var _48495__$1 = this;
return (new cljs.core.async.t_cljs$core$async48493(self__.f,self__.blockable,meta48494__$1));
}));

(cljs.core.async.t_cljs$core$async48493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48495){
var self__ = this;
var _48495__$1 = this;
return self__.meta48494;
}));

(cljs.core.async.t_cljs$core$async48493.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48493.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48493.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async48493.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async48493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48494","meta48494",-548747056,null)], null);
}));

(cljs.core.async.t_cljs$core$async48493.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48493");

(cljs.core.async.t_cljs$core$async48493.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48493");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48493.
 */
cljs.core.async.__GT_t_cljs$core$async48493 = (function cljs$core$async$__GT_t_cljs$core$async48493(f__$1,blockable__$1,meta48494){
return (new cljs.core.async.t_cljs$core$async48493(f__$1,blockable__$1,meta48494));
});

}

return (new cljs.core.async.t_cljs$core$async48493(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__48511 = arguments.length;
switch (G__48511) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__48519 = arguments.length;
switch (G__48519) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__48521 = arguments.length;
switch (G__48521) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_50248 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50248) : fn1.call(null,val_50248));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50248) : fn1.call(null,val_50248));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__48523 = arguments.length;
switch (G__48523) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___50250 = n;
var x_50251 = (0);
while(true){
if((x_50251 < n__4706__auto___50250)){
(a[x_50251] = x_50251);

var G__50252 = (x_50251 + (1));
x_50251 = G__50252;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48524 = (function (flag,meta48525){
this.flag = flag;
this.meta48525 = meta48525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48526,meta48525__$1){
var self__ = this;
var _48526__$1 = this;
return (new cljs.core.async.t_cljs$core$async48524(self__.flag,meta48525__$1));
}));

(cljs.core.async.t_cljs$core$async48524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48526){
var self__ = this;
var _48526__$1 = this;
return self__.meta48525;
}));

(cljs.core.async.t_cljs$core$async48524.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48524.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async48524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48525","meta48525",-2095783480,null)], null);
}));

(cljs.core.async.t_cljs$core$async48524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48524");

(cljs.core.async.t_cljs$core$async48524.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48524.
 */
cljs.core.async.__GT_t_cljs$core$async48524 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48524(flag__$1,meta48525){
return (new cljs.core.async.t_cljs$core$async48524(flag__$1,meta48525));
});

}

return (new cljs.core.async.t_cljs$core$async48524(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48527 = (function (flag,cb,meta48528){
this.flag = flag;
this.cb = cb;
this.meta48528 = meta48528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48529,meta48528__$1){
var self__ = this;
var _48529__$1 = this;
return (new cljs.core.async.t_cljs$core$async48527(self__.flag,self__.cb,meta48528__$1));
}));

(cljs.core.async.t_cljs$core$async48527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48529){
var self__ = this;
var _48529__$1 = this;
return self__.meta48528;
}));

(cljs.core.async.t_cljs$core$async48527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async48527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48528","meta48528",-128615543,null)], null);
}));

(cljs.core.async.t_cljs$core$async48527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48527");

(cljs.core.async.t_cljs$core$async48527.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48527.
 */
cljs.core.async.__GT_t_cljs$core$async48527 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48527(flag__$1,cb__$1,meta48528){
return (new cljs.core.async.t_cljs$core$async48527(flag__$1,cb__$1,meta48528));
});

}

return (new cljs.core.async.t_cljs$core$async48527(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48530_SHARP_){
var G__48532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48530_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48532) : fret.call(null,G__48532));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48531_SHARP_){
var G__48533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48531_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48533) : fret.call(null,G__48533));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50255 = (i + (1));
i = G__50255;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50256 = arguments.length;
var i__4830__auto___50257 = (0);
while(true){
if((i__4830__auto___50257 < len__4829__auto___50256)){
args__4835__auto__.push((arguments[i__4830__auto___50257]));

var G__50258 = (i__4830__auto___50257 + (1));
i__4830__auto___50257 = G__50258;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48537){
var map__48538 = p__48537;
var map__48538__$1 = cljs.core.__destructure_map(map__48538);
var opts = map__48538__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48534){
var G__48535 = cljs.core.first(seq48534);
var seq48534__$1 = cljs.core.next(seq48534);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48535,seq48534__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__48540 = arguments.length;
switch (G__48540) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48391__auto___50260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_48564){
var state_val_48565 = (state_48564[(1)]);
if((state_val_48565 === (7))){
var inst_48560 = (state_48564[(2)]);
var state_48564__$1 = state_48564;
var statearr_48568_50261 = state_48564__$1;
(statearr_48568_50261[(2)] = inst_48560);

(statearr_48568_50261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48565 === (1))){
var state_48564__$1 = state_48564;
var statearr_48569_50262 = state_48564__$1;
(statearr_48569_50262[(2)] = null);

(statearr_48569_50262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48565 === (4))){
var inst_48543 = (state_48564[(7)]);
var inst_48543__$1 = (state_48564[(2)]);
var inst_48544 = (inst_48543__$1 == null);
var state_48564__$1 = (function (){var statearr_48570 = state_48564;
(statearr_48570[(7)] = inst_48543__$1);

return statearr_48570;
})();
if(cljs.core.truth_(inst_48544)){
var statearr_48571_50263 = state_48564__$1;
(statearr_48571_50263[(1)] = (5));

} else {
var statearr_48572_50264 = state_48564__$1;
(statearr_48572_50264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48565 === (13))){
var state_48564__$1 = state_48564;
var statearr_48573_50266 = state_48564__$1;
(statearr_48573_50266[(2)] = null);

(statearr_48573_50266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48565 === (6))){
var inst_48543 = (state_48564[(7)]);
var state_48564__$1 = state_48564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48564__$1,(11),to,inst_48543);
} else {
if((state_val_48565 === (3))){
var inst_48562 = (state_48564[(2)]);
var state_48564__$1 = state_48564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48564__$1,inst_48562);
} else {
if((state_val_48565 === (12))){
var state_48564__$1 = state_48564;
var statearr_48578_50267 = state_48564__$1;
(statearr_48578_50267[(2)] = null);

(statearr_48578_50267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48565 === (2))){
var state_48564__$1 = state_48564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48564__$1,(4),from);
} else {
if((state_val_48565 === (11))){
var inst_48553 = (state_48564[(2)]);
var state_48564__$1 = state_48564;
if(cljs.core.truth_(inst_48553)){
var statearr_48583_50268 = state_48564__$1;
(statearr_48583_50268[(1)] = (12));

} else {
var statearr_48584_50269 = state_48564__$1;
(statearr_48584_50269[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48565 === (9))){
var state_48564__$1 = state_48564;
var statearr_48585_50270 = state_48564__$1;
(statearr_48585_50270[(2)] = null);

(statearr_48585_50270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48565 === (5))){
var state_48564__$1 = state_48564;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48590_50271 = state_48564__$1;
(statearr_48590_50271[(1)] = (8));

} else {
var statearr_48591_50273 = state_48564__$1;
(statearr_48591_50273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48565 === (14))){
var inst_48558 = (state_48564[(2)]);
var state_48564__$1 = state_48564;
var statearr_48594_50274 = state_48564__$1;
(statearr_48594_50274[(2)] = inst_48558);

(statearr_48594_50274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48565 === (10))){
var inst_48550 = (state_48564[(2)]);
var state_48564__$1 = state_48564;
var statearr_48597_50276 = state_48564__$1;
(statearr_48597_50276[(2)] = inst_48550);

(statearr_48597_50276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48565 === (8))){
var inst_48547 = cljs.core.async.close_BANG_(to);
var state_48564__$1 = state_48564;
var statearr_48599_50277 = state_48564__$1;
(statearr_48599_50277[(2)] = inst_48547);

(statearr_48599_50277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48204__auto__ = null;
var cljs$core$async$state_machine__48204__auto____0 = (function (){
var statearr_48602 = [null,null,null,null,null,null,null,null];
(statearr_48602[(0)] = cljs$core$async$state_machine__48204__auto__);

(statearr_48602[(1)] = (1));

return statearr_48602;
});
var cljs$core$async$state_machine__48204__auto____1 = (function (state_48564){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_48564);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e48603){var ex__48207__auto__ = e48603;
var statearr_48604_50278 = state_48564;
(statearr_48604_50278[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_48564[(4)]))){
var statearr_48605_50279 = state_48564;
(statearr_48605_50279[(1)] = cljs.core.first((state_48564[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50280 = state_48564;
state_48564 = G__50280;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$state_machine__48204__auto__ = function(state_48564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48204__auto____1.call(this,state_48564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48204__auto____0;
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48204__auto____1;
return cljs$core$async$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_48612 = f__48392__auto__();
(statearr_48612[(6)] = c__48391__auto___50260);

return statearr_48612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__48622){
var vec__48623 = p__48622;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48623,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48623,(1),null);
var job = vec__48623;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__48391__auto___50283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_48630){
var state_val_48631 = (state_48630[(1)]);
if((state_val_48631 === (1))){
var state_48630__$1 = state_48630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48630__$1,(2),res,v);
} else {
if((state_val_48631 === (2))){
var inst_48627 = (state_48630[(2)]);
var inst_48628 = cljs.core.async.close_BANG_(res);
var state_48630__$1 = (function (){var statearr_48636 = state_48630;
(statearr_48636[(7)] = inst_48627);

return statearr_48636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48630__$1,inst_48628);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0 = (function (){
var statearr_48640 = [null,null,null,null,null,null,null,null];
(statearr_48640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__);

(statearr_48640[(1)] = (1));

return statearr_48640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1 = (function (state_48630){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_48630);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e48641){var ex__48207__auto__ = e48641;
var statearr_48642_50284 = state_48630;
(statearr_48642_50284[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_48630[(4)]))){
var statearr_48643_50286 = state_48630;
(statearr_48643_50286[(1)] = cljs.core.first((state_48630[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50288 = state_48630;
state_48630 = G__50288;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__ = function(state_48630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1.call(this,state_48630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_48644 = f__48392__auto__();
(statearr_48644[(6)] = c__48391__auto___50283);

return statearr_48644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__48645){
var vec__48646 = p__48645;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48646,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48646,(1),null);
var job = vec__48646;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___50289 = n;
var __50290 = (0);
while(true){
if((__50290 < n__4706__auto___50289)){
var G__48649_50291 = type;
var G__48649_50292__$1 = (((G__48649_50291 instanceof cljs.core.Keyword))?G__48649_50291.fqn:null);
switch (G__48649_50292__$1) {
case "compute":
var c__48391__auto___50294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50290,c__48391__auto___50294,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async){
return (function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = ((function (__50290,c__48391__auto___50294,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async){
return (function (state_48662){
var state_val_48663 = (state_48662[(1)]);
if((state_val_48663 === (1))){
var state_48662__$1 = state_48662;
var statearr_48664_50295 = state_48662__$1;
(statearr_48664_50295[(2)] = null);

(statearr_48664_50295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (2))){
var state_48662__$1 = state_48662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48662__$1,(4),jobs);
} else {
if((state_val_48663 === (3))){
var inst_48660 = (state_48662[(2)]);
var state_48662__$1 = state_48662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48662__$1,inst_48660);
} else {
if((state_val_48663 === (4))){
var inst_48652 = (state_48662[(2)]);
var inst_48653 = process(inst_48652);
var state_48662__$1 = state_48662;
if(cljs.core.truth_(inst_48653)){
var statearr_48673_50298 = state_48662__$1;
(statearr_48673_50298[(1)] = (5));

} else {
var statearr_48674_50299 = state_48662__$1;
(statearr_48674_50299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (5))){
var state_48662__$1 = state_48662;
var statearr_48679_50300 = state_48662__$1;
(statearr_48679_50300[(2)] = null);

(statearr_48679_50300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (6))){
var state_48662__$1 = state_48662;
var statearr_48683_50301 = state_48662__$1;
(statearr_48683_50301[(2)] = null);

(statearr_48683_50301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (7))){
var inst_48658 = (state_48662[(2)]);
var state_48662__$1 = state_48662;
var statearr_48688_50302 = state_48662__$1;
(statearr_48688_50302[(2)] = inst_48658);

(statearr_48688_50302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50290,c__48391__auto___50294,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async))
;
return ((function (__50290,switch__48203__auto__,c__48391__auto___50294,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0 = (function (){
var statearr_48693 = [null,null,null,null,null,null,null];
(statearr_48693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__);

(statearr_48693[(1)] = (1));

return statearr_48693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1 = (function (state_48662){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_48662);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e48694){var ex__48207__auto__ = e48694;
var statearr_48695_50303 = state_48662;
(statearr_48695_50303[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_48662[(4)]))){
var statearr_48698_50304 = state_48662;
(statearr_48698_50304[(1)] = cljs.core.first((state_48662[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50305 = state_48662;
state_48662 = G__50305;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__ = function(state_48662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1.call(this,state_48662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__;
})()
;})(__50290,switch__48203__auto__,c__48391__auto___50294,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async))
})();
var state__48393__auto__ = (function (){var statearr_48700 = f__48392__auto__();
(statearr_48700[(6)] = c__48391__auto___50294);

return statearr_48700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
});})(__50290,c__48391__auto___50294,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async))
);


break;
case "async":
var c__48391__auto___50306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50290,c__48391__auto___50306,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async){
return (function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = ((function (__50290,c__48391__auto___50306,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async){
return (function (state_48717){
var state_val_48718 = (state_48717[(1)]);
if((state_val_48718 === (1))){
var state_48717__$1 = state_48717;
var statearr_48722_50307 = state_48717__$1;
(statearr_48722_50307[(2)] = null);

(statearr_48722_50307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48718 === (2))){
var state_48717__$1 = state_48717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48717__$1,(4),jobs);
} else {
if((state_val_48718 === (3))){
var inst_48714 = (state_48717[(2)]);
var state_48717__$1 = state_48717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48717__$1,inst_48714);
} else {
if((state_val_48718 === (4))){
var inst_48706 = (state_48717[(2)]);
var inst_48707 = async(inst_48706);
var state_48717__$1 = state_48717;
if(cljs.core.truth_(inst_48707)){
var statearr_48728_50310 = state_48717__$1;
(statearr_48728_50310[(1)] = (5));

} else {
var statearr_48729_50311 = state_48717__$1;
(statearr_48729_50311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48718 === (5))){
var state_48717__$1 = state_48717;
var statearr_48731_50312 = state_48717__$1;
(statearr_48731_50312[(2)] = null);

(statearr_48731_50312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48718 === (6))){
var state_48717__$1 = state_48717;
var statearr_48732_50313 = state_48717__$1;
(statearr_48732_50313[(2)] = null);

(statearr_48732_50313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48718 === (7))){
var inst_48712 = (state_48717[(2)]);
var state_48717__$1 = state_48717;
var statearr_48733_50314 = state_48717__$1;
(statearr_48733_50314[(2)] = inst_48712);

(statearr_48733_50314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50290,c__48391__auto___50306,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async))
;
return ((function (__50290,switch__48203__auto__,c__48391__auto___50306,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0 = (function (){
var statearr_48738 = [null,null,null,null,null,null,null];
(statearr_48738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__);

(statearr_48738[(1)] = (1));

return statearr_48738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1 = (function (state_48717){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_48717);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e48739){var ex__48207__auto__ = e48739;
var statearr_48741_50315 = state_48717;
(statearr_48741_50315[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_48717[(4)]))){
var statearr_48743_50316 = state_48717;
(statearr_48743_50316[(1)] = cljs.core.first((state_48717[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50317 = state_48717;
state_48717 = G__50317;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__ = function(state_48717){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1.call(this,state_48717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__;
})()
;})(__50290,switch__48203__auto__,c__48391__auto___50306,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async))
})();
var state__48393__auto__ = (function (){var statearr_48747 = f__48392__auto__();
(statearr_48747[(6)] = c__48391__auto___50306);

return statearr_48747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
});})(__50290,c__48391__auto___50306,G__48649_50291,G__48649_50292__$1,n__4706__auto___50289,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48649_50292__$1)].join('')));

}

var G__50318 = (__50290 + (1));
__50290 = G__50318;
continue;
} else {
}
break;
}

var c__48391__auto___50319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_48780){
var state_val_48781 = (state_48780[(1)]);
if((state_val_48781 === (7))){
var inst_48774 = (state_48780[(2)]);
var state_48780__$1 = state_48780;
var statearr_48791_50320 = state_48780__$1;
(statearr_48791_50320[(2)] = inst_48774);

(statearr_48791_50320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48781 === (1))){
var state_48780__$1 = state_48780;
var statearr_48794_50321 = state_48780__$1;
(statearr_48794_50321[(2)] = null);

(statearr_48794_50321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48781 === (4))){
var inst_48755 = (state_48780[(7)]);
var inst_48755__$1 = (state_48780[(2)]);
var inst_48756 = (inst_48755__$1 == null);
var state_48780__$1 = (function (){var statearr_48796 = state_48780;
(statearr_48796[(7)] = inst_48755__$1);

return statearr_48796;
})();
if(cljs.core.truth_(inst_48756)){
var statearr_48797_50322 = state_48780__$1;
(statearr_48797_50322[(1)] = (5));

} else {
var statearr_48798_50323 = state_48780__$1;
(statearr_48798_50323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48781 === (6))){
var inst_48755 = (state_48780[(7)]);
var inst_48762 = (state_48780[(8)]);
var inst_48762__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_48764 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48766 = [inst_48755,inst_48762__$1];
var inst_48767 = (new cljs.core.PersistentVector(null,2,(5),inst_48764,inst_48766,null));
var state_48780__$1 = (function (){var statearr_48803 = state_48780;
(statearr_48803[(8)] = inst_48762__$1);

return statearr_48803;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48780__$1,(8),jobs,inst_48767);
} else {
if((state_val_48781 === (3))){
var inst_48777 = (state_48780[(2)]);
var state_48780__$1 = state_48780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48780__$1,inst_48777);
} else {
if((state_val_48781 === (2))){
var state_48780__$1 = state_48780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48780__$1,(4),from);
} else {
if((state_val_48781 === (9))){
var inst_48771 = (state_48780[(2)]);
var state_48780__$1 = (function (){var statearr_48811 = state_48780;
(statearr_48811[(9)] = inst_48771);

return statearr_48811;
})();
var statearr_48813_50324 = state_48780__$1;
(statearr_48813_50324[(2)] = null);

(statearr_48813_50324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48781 === (5))){
var inst_48759 = cljs.core.async.close_BANG_(jobs);
var state_48780__$1 = state_48780;
var statearr_48815_50325 = state_48780__$1;
(statearr_48815_50325[(2)] = inst_48759);

(statearr_48815_50325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48781 === (8))){
var inst_48762 = (state_48780[(8)]);
var inst_48769 = (state_48780[(2)]);
var state_48780__$1 = (function (){var statearr_48816 = state_48780;
(statearr_48816[(10)] = inst_48769);

return statearr_48816;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48780__$1,(9),results,inst_48762);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0 = (function (){
var statearr_48827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__);

(statearr_48827[(1)] = (1));

return statearr_48827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1 = (function (state_48780){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_48780);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e48828){var ex__48207__auto__ = e48828;
var statearr_48829_50326 = state_48780;
(statearr_48829_50326[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_48780[(4)]))){
var statearr_48830_50327 = state_48780;
(statearr_48830_50327[(1)] = cljs.core.first((state_48780[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50328 = state_48780;
state_48780 = G__50328;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__ = function(state_48780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1.call(this,state_48780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_48837 = f__48392__auto__();
(statearr_48837[(6)] = c__48391__auto___50319);

return statearr_48837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


var c__48391__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_48882){
var state_val_48883 = (state_48882[(1)]);
if((state_val_48883 === (7))){
var inst_48878 = (state_48882[(2)]);
var state_48882__$1 = state_48882;
var statearr_48892_50329 = state_48882__$1;
(statearr_48892_50329[(2)] = inst_48878);

(statearr_48892_50329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (20))){
var state_48882__$1 = state_48882;
var statearr_48897_50330 = state_48882__$1;
(statearr_48897_50330[(2)] = null);

(statearr_48897_50330[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (1))){
var state_48882__$1 = state_48882;
var statearr_48898_50331 = state_48882__$1;
(statearr_48898_50331[(2)] = null);

(statearr_48898_50331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (4))){
var inst_48841 = (state_48882[(7)]);
var inst_48841__$1 = (state_48882[(2)]);
var inst_48842 = (inst_48841__$1 == null);
var state_48882__$1 = (function (){var statearr_48901 = state_48882;
(statearr_48901[(7)] = inst_48841__$1);

return statearr_48901;
})();
if(cljs.core.truth_(inst_48842)){
var statearr_48902_50332 = state_48882__$1;
(statearr_48902_50332[(1)] = (5));

} else {
var statearr_48903_50333 = state_48882__$1;
(statearr_48903_50333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (15))){
var inst_48858 = (state_48882[(8)]);
var state_48882__$1 = state_48882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48882__$1,(18),to,inst_48858);
} else {
if((state_val_48883 === (21))){
var inst_48873 = (state_48882[(2)]);
var state_48882__$1 = state_48882;
var statearr_48909_50335 = state_48882__$1;
(statearr_48909_50335[(2)] = inst_48873);

(statearr_48909_50335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (13))){
var inst_48875 = (state_48882[(2)]);
var state_48882__$1 = (function (){var statearr_48914 = state_48882;
(statearr_48914[(9)] = inst_48875);

return statearr_48914;
})();
var statearr_48919_50337 = state_48882__$1;
(statearr_48919_50337[(2)] = null);

(statearr_48919_50337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (6))){
var inst_48841 = (state_48882[(7)]);
var state_48882__$1 = state_48882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48882__$1,(11),inst_48841);
} else {
if((state_val_48883 === (17))){
var inst_48867 = (state_48882[(2)]);
var state_48882__$1 = state_48882;
if(cljs.core.truth_(inst_48867)){
var statearr_48920_50338 = state_48882__$1;
(statearr_48920_50338[(1)] = (19));

} else {
var statearr_48923_50339 = state_48882__$1;
(statearr_48923_50339[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (3))){
var inst_48880 = (state_48882[(2)]);
var state_48882__$1 = state_48882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48882__$1,inst_48880);
} else {
if((state_val_48883 === (12))){
var inst_48853 = (state_48882[(10)]);
var state_48882__$1 = state_48882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48882__$1,(14),inst_48853);
} else {
if((state_val_48883 === (2))){
var state_48882__$1 = state_48882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48882__$1,(4),results);
} else {
if((state_val_48883 === (19))){
var state_48882__$1 = state_48882;
var statearr_48924_50340 = state_48882__$1;
(statearr_48924_50340[(2)] = null);

(statearr_48924_50340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (11))){
var inst_48853 = (state_48882[(2)]);
var state_48882__$1 = (function (){var statearr_48926 = state_48882;
(statearr_48926[(10)] = inst_48853);

return statearr_48926;
})();
var statearr_48929_50341 = state_48882__$1;
(statearr_48929_50341[(2)] = null);

(statearr_48929_50341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (9))){
var state_48882__$1 = state_48882;
var statearr_48934_50342 = state_48882__$1;
(statearr_48934_50342[(2)] = null);

(statearr_48934_50342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (5))){
var state_48882__$1 = state_48882;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48937_50343 = state_48882__$1;
(statearr_48937_50343[(1)] = (8));

} else {
var statearr_48938_50344 = state_48882__$1;
(statearr_48938_50344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (14))){
var inst_48858 = (state_48882[(8)]);
var inst_48861 = (state_48882[(11)]);
var inst_48858__$1 = (state_48882[(2)]);
var inst_48860 = (inst_48858__$1 == null);
var inst_48861__$1 = cljs.core.not(inst_48860);
var state_48882__$1 = (function (){var statearr_48941 = state_48882;
(statearr_48941[(8)] = inst_48858__$1);

(statearr_48941[(11)] = inst_48861__$1);

return statearr_48941;
})();
if(inst_48861__$1){
var statearr_48942_50345 = state_48882__$1;
(statearr_48942_50345[(1)] = (15));

} else {
var statearr_48943_50346 = state_48882__$1;
(statearr_48943_50346[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (16))){
var inst_48861 = (state_48882[(11)]);
var state_48882__$1 = state_48882;
var statearr_48945_50348 = state_48882__$1;
(statearr_48945_50348[(2)] = inst_48861);

(statearr_48945_50348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (10))){
var inst_48850 = (state_48882[(2)]);
var state_48882__$1 = state_48882;
var statearr_48946_50349 = state_48882__$1;
(statearr_48946_50349[(2)] = inst_48850);

(statearr_48946_50349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (18))){
var inst_48864 = (state_48882[(2)]);
var state_48882__$1 = state_48882;
var statearr_48947_50350 = state_48882__$1;
(statearr_48947_50350[(2)] = inst_48864);

(statearr_48947_50350[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (8))){
var inst_48847 = cljs.core.async.close_BANG_(to);
var state_48882__$1 = state_48882;
var statearr_48948_50351 = state_48882__$1;
(statearr_48948_50351[(2)] = inst_48847);

(statearr_48948_50351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0 = (function (){
var statearr_48949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__);

(statearr_48949[(1)] = (1));

return statearr_48949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1 = (function (state_48882){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_48882);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e48950){var ex__48207__auto__ = e48950;
var statearr_48951_50352 = state_48882;
(statearr_48951_50352[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_48882[(4)]))){
var statearr_48952_50353 = state_48882;
(statearr_48952_50353[(1)] = cljs.core.first((state_48882[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50354 = state_48882;
state_48882 = G__50354;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__ = function(state_48882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1.call(this,state_48882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_48953 = f__48392__auto__();
(statearr_48953[(6)] = c__48391__auto__);

return statearr_48953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));

return c__48391__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__48955 = arguments.length;
switch (G__48955) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__48959 = arguments.length;
switch (G__48959) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__48973 = arguments.length;
switch (G__48973) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__48391__auto___50362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_48999){
var state_val_49000 = (state_48999[(1)]);
if((state_val_49000 === (7))){
var inst_48995 = (state_48999[(2)]);
var state_48999__$1 = state_48999;
var statearr_49001_50363 = state_48999__$1;
(statearr_49001_50363[(2)] = inst_48995);

(statearr_49001_50363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49000 === (1))){
var state_48999__$1 = state_48999;
var statearr_49002_50364 = state_48999__$1;
(statearr_49002_50364[(2)] = null);

(statearr_49002_50364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49000 === (4))){
var inst_48976 = (state_48999[(7)]);
var inst_48976__$1 = (state_48999[(2)]);
var inst_48977 = (inst_48976__$1 == null);
var state_48999__$1 = (function (){var statearr_49003 = state_48999;
(statearr_49003[(7)] = inst_48976__$1);

return statearr_49003;
})();
if(cljs.core.truth_(inst_48977)){
var statearr_49004_50365 = state_48999__$1;
(statearr_49004_50365[(1)] = (5));

} else {
var statearr_49005_50366 = state_48999__$1;
(statearr_49005_50366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49000 === (13))){
var state_48999__$1 = state_48999;
var statearr_49006_50367 = state_48999__$1;
(statearr_49006_50367[(2)] = null);

(statearr_49006_50367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49000 === (6))){
var inst_48976 = (state_48999[(7)]);
var inst_48982 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48976) : p.call(null,inst_48976));
var state_48999__$1 = state_48999;
if(cljs.core.truth_(inst_48982)){
var statearr_49007_50368 = state_48999__$1;
(statearr_49007_50368[(1)] = (9));

} else {
var statearr_49008_50370 = state_48999__$1;
(statearr_49008_50370[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49000 === (3))){
var inst_48997 = (state_48999[(2)]);
var state_48999__$1 = state_48999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48999__$1,inst_48997);
} else {
if((state_val_49000 === (12))){
var state_48999__$1 = state_48999;
var statearr_49009_50372 = state_48999__$1;
(statearr_49009_50372[(2)] = null);

(statearr_49009_50372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49000 === (2))){
var state_48999__$1 = state_48999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48999__$1,(4),ch);
} else {
if((state_val_49000 === (11))){
var inst_48976 = (state_48999[(7)]);
var inst_48986 = (state_48999[(2)]);
var state_48999__$1 = state_48999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48999__$1,(8),inst_48986,inst_48976);
} else {
if((state_val_49000 === (9))){
var state_48999__$1 = state_48999;
var statearr_49010_50373 = state_48999__$1;
(statearr_49010_50373[(2)] = tc);

(statearr_49010_50373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49000 === (5))){
var inst_48979 = cljs.core.async.close_BANG_(tc);
var inst_48980 = cljs.core.async.close_BANG_(fc);
var state_48999__$1 = (function (){var statearr_49011 = state_48999;
(statearr_49011[(8)] = inst_48979);

return statearr_49011;
})();
var statearr_49012_50374 = state_48999__$1;
(statearr_49012_50374[(2)] = inst_48980);

(statearr_49012_50374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49000 === (14))){
var inst_48993 = (state_48999[(2)]);
var state_48999__$1 = state_48999;
var statearr_49013_50375 = state_48999__$1;
(statearr_49013_50375[(2)] = inst_48993);

(statearr_49013_50375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49000 === (10))){
var state_48999__$1 = state_48999;
var statearr_49014_50376 = state_48999__$1;
(statearr_49014_50376[(2)] = fc);

(statearr_49014_50376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49000 === (8))){
var inst_48988 = (state_48999[(2)]);
var state_48999__$1 = state_48999;
if(cljs.core.truth_(inst_48988)){
var statearr_49015_50377 = state_48999__$1;
(statearr_49015_50377[(1)] = (12));

} else {
var statearr_49016_50378 = state_48999__$1;
(statearr_49016_50378[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48204__auto__ = null;
var cljs$core$async$state_machine__48204__auto____0 = (function (){
var statearr_49017 = [null,null,null,null,null,null,null,null,null];
(statearr_49017[(0)] = cljs$core$async$state_machine__48204__auto__);

(statearr_49017[(1)] = (1));

return statearr_49017;
});
var cljs$core$async$state_machine__48204__auto____1 = (function (state_48999){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_48999);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e49018){var ex__48207__auto__ = e49018;
var statearr_49019_50379 = state_48999;
(statearr_49019_50379[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_48999[(4)]))){
var statearr_49020_50380 = state_48999;
(statearr_49020_50380[(1)] = cljs.core.first((state_48999[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50381 = state_48999;
state_48999 = G__50381;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$state_machine__48204__auto__ = function(state_48999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48204__auto____1.call(this,state_48999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48204__auto____0;
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48204__auto____1;
return cljs$core$async$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_49021 = f__48392__auto__();
(statearr_49021[(6)] = c__48391__auto___50362);

return statearr_49021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48391__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_49043){
var state_val_49044 = (state_49043[(1)]);
if((state_val_49044 === (7))){
var inst_49039 = (state_49043[(2)]);
var state_49043__$1 = state_49043;
var statearr_49045_50389 = state_49043__$1;
(statearr_49045_50389[(2)] = inst_49039);

(statearr_49045_50389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49044 === (1))){
var inst_49022 = init;
var inst_49023 = inst_49022;
var state_49043__$1 = (function (){var statearr_49046 = state_49043;
(statearr_49046[(7)] = inst_49023);

return statearr_49046;
})();
var statearr_49047_50390 = state_49043__$1;
(statearr_49047_50390[(2)] = null);

(statearr_49047_50390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49044 === (4))){
var inst_49026 = (state_49043[(8)]);
var inst_49026__$1 = (state_49043[(2)]);
var inst_49027 = (inst_49026__$1 == null);
var state_49043__$1 = (function (){var statearr_49048 = state_49043;
(statearr_49048[(8)] = inst_49026__$1);

return statearr_49048;
})();
if(cljs.core.truth_(inst_49027)){
var statearr_49049_50391 = state_49043__$1;
(statearr_49049_50391[(1)] = (5));

} else {
var statearr_49050_50392 = state_49043__$1;
(statearr_49050_50392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49044 === (6))){
var inst_49023 = (state_49043[(7)]);
var inst_49026 = (state_49043[(8)]);
var inst_49030 = (state_49043[(9)]);
var inst_49030__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49023,inst_49026) : f.call(null,inst_49023,inst_49026));
var inst_49031 = cljs.core.reduced_QMARK_(inst_49030__$1);
var state_49043__$1 = (function (){var statearr_49051 = state_49043;
(statearr_49051[(9)] = inst_49030__$1);

return statearr_49051;
})();
if(inst_49031){
var statearr_49052_50396 = state_49043__$1;
(statearr_49052_50396[(1)] = (8));

} else {
var statearr_49053_50397 = state_49043__$1;
(statearr_49053_50397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49044 === (3))){
var inst_49041 = (state_49043[(2)]);
var state_49043__$1 = state_49043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49043__$1,inst_49041);
} else {
if((state_val_49044 === (2))){
var state_49043__$1 = state_49043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49043__$1,(4),ch);
} else {
if((state_val_49044 === (9))){
var inst_49030 = (state_49043[(9)]);
var inst_49023 = inst_49030;
var state_49043__$1 = (function (){var statearr_49054 = state_49043;
(statearr_49054[(7)] = inst_49023);

return statearr_49054;
})();
var statearr_49055_50401 = state_49043__$1;
(statearr_49055_50401[(2)] = null);

(statearr_49055_50401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49044 === (5))){
var inst_49023 = (state_49043[(7)]);
var state_49043__$1 = state_49043;
var statearr_49056_50402 = state_49043__$1;
(statearr_49056_50402[(2)] = inst_49023);

(statearr_49056_50402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49044 === (10))){
var inst_49037 = (state_49043[(2)]);
var state_49043__$1 = state_49043;
var statearr_49057_50403 = state_49043__$1;
(statearr_49057_50403[(2)] = inst_49037);

(statearr_49057_50403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49044 === (8))){
var inst_49030 = (state_49043[(9)]);
var inst_49033 = cljs.core.deref(inst_49030);
var state_49043__$1 = state_49043;
var statearr_49058_50407 = state_49043__$1;
(statearr_49058_50407[(2)] = inst_49033);

(statearr_49058_50407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__48204__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48204__auto____0 = (function (){
var statearr_49059 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49059[(0)] = cljs$core$async$reduce_$_state_machine__48204__auto__);

(statearr_49059[(1)] = (1));

return statearr_49059;
});
var cljs$core$async$reduce_$_state_machine__48204__auto____1 = (function (state_49043){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_49043);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e49060){var ex__48207__auto__ = e49060;
var statearr_49061_50408 = state_49043;
(statearr_49061_50408[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_49043[(4)]))){
var statearr_49062_50409 = state_49043;
(statearr_49062_50409[(1)] = cljs.core.first((state_49043[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50414 = state_49043;
state_49043 = G__50414;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48204__auto__ = function(state_49043){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48204__auto____1.call(this,state_49043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48204__auto____0;
cljs$core$async$reduce_$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48204__auto____1;
return cljs$core$async$reduce_$_state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_49063 = f__48392__auto__();
(statearr_49063[(6)] = c__48391__auto__);

return statearr_49063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));

return c__48391__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__48391__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_49069){
var state_val_49070 = (state_49069[(1)]);
if((state_val_49070 === (1))){
var inst_49064 = cljs.core.async.reduce(f__$1,init,ch);
var state_49069__$1 = state_49069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49069__$1,(2),inst_49064);
} else {
if((state_val_49070 === (2))){
var inst_49066 = (state_49069[(2)]);
var inst_49067 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_49066) : f__$1.call(null,inst_49066));
var state_49069__$1 = state_49069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49069__$1,inst_49067);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48204__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48204__auto____0 = (function (){
var statearr_49071 = [null,null,null,null,null,null,null];
(statearr_49071[(0)] = cljs$core$async$transduce_$_state_machine__48204__auto__);

(statearr_49071[(1)] = (1));

return statearr_49071;
});
var cljs$core$async$transduce_$_state_machine__48204__auto____1 = (function (state_49069){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_49069);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e49072){var ex__48207__auto__ = e49072;
var statearr_49073_50421 = state_49069;
(statearr_49073_50421[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_49069[(4)]))){
var statearr_49074_50422 = state_49069;
(statearr_49074_50422[(1)] = cljs.core.first((state_49069[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50423 = state_49069;
state_49069 = G__50423;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48204__auto__ = function(state_49069){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48204__auto____1.call(this,state_49069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48204__auto____0;
cljs$core$async$transduce_$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48204__auto____1;
return cljs$core$async$transduce_$_state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_49075 = f__48392__auto__();
(statearr_49075[(6)] = c__48391__auto__);

return statearr_49075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));

return c__48391__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__49077 = arguments.length;
switch (G__49077) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48391__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_49102){
var state_val_49103 = (state_49102[(1)]);
if((state_val_49103 === (7))){
var inst_49084 = (state_49102[(2)]);
var state_49102__$1 = state_49102;
var statearr_49104_50428 = state_49102__$1;
(statearr_49104_50428[(2)] = inst_49084);

(statearr_49104_50428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49103 === (1))){
var inst_49078 = cljs.core.seq(coll);
var inst_49079 = inst_49078;
var state_49102__$1 = (function (){var statearr_49105 = state_49102;
(statearr_49105[(7)] = inst_49079);

return statearr_49105;
})();
var statearr_49106_50432 = state_49102__$1;
(statearr_49106_50432[(2)] = null);

(statearr_49106_50432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49103 === (4))){
var inst_49079 = (state_49102[(7)]);
var inst_49082 = cljs.core.first(inst_49079);
var state_49102__$1 = state_49102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49102__$1,(7),ch,inst_49082);
} else {
if((state_val_49103 === (13))){
var inst_49096 = (state_49102[(2)]);
var state_49102__$1 = state_49102;
var statearr_49107_50433 = state_49102__$1;
(statearr_49107_50433[(2)] = inst_49096);

(statearr_49107_50433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49103 === (6))){
var inst_49087 = (state_49102[(2)]);
var state_49102__$1 = state_49102;
if(cljs.core.truth_(inst_49087)){
var statearr_49108_50434 = state_49102__$1;
(statearr_49108_50434[(1)] = (8));

} else {
var statearr_49109_50435 = state_49102__$1;
(statearr_49109_50435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49103 === (3))){
var inst_49100 = (state_49102[(2)]);
var state_49102__$1 = state_49102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49102__$1,inst_49100);
} else {
if((state_val_49103 === (12))){
var state_49102__$1 = state_49102;
var statearr_49110_50436 = state_49102__$1;
(statearr_49110_50436[(2)] = null);

(statearr_49110_50436[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49103 === (2))){
var inst_49079 = (state_49102[(7)]);
var state_49102__$1 = state_49102;
if(cljs.core.truth_(inst_49079)){
var statearr_49111_50437 = state_49102__$1;
(statearr_49111_50437[(1)] = (4));

} else {
var statearr_49112_50439 = state_49102__$1;
(statearr_49112_50439[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49103 === (11))){
var inst_49093 = cljs.core.async.close_BANG_(ch);
var state_49102__$1 = state_49102;
var statearr_49113_50440 = state_49102__$1;
(statearr_49113_50440[(2)] = inst_49093);

(statearr_49113_50440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49103 === (9))){
var state_49102__$1 = state_49102;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49114_50441 = state_49102__$1;
(statearr_49114_50441[(1)] = (11));

} else {
var statearr_49115_50442 = state_49102__$1;
(statearr_49115_50442[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49103 === (5))){
var inst_49079 = (state_49102[(7)]);
var state_49102__$1 = state_49102;
var statearr_49116_50443 = state_49102__$1;
(statearr_49116_50443[(2)] = inst_49079);

(statearr_49116_50443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49103 === (10))){
var inst_49098 = (state_49102[(2)]);
var state_49102__$1 = state_49102;
var statearr_49117_50444 = state_49102__$1;
(statearr_49117_50444[(2)] = inst_49098);

(statearr_49117_50444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49103 === (8))){
var inst_49079 = (state_49102[(7)]);
var inst_49089 = cljs.core.next(inst_49079);
var inst_49079__$1 = inst_49089;
var state_49102__$1 = (function (){var statearr_49118 = state_49102;
(statearr_49118[(7)] = inst_49079__$1);

return statearr_49118;
})();
var statearr_49119_50445 = state_49102__$1;
(statearr_49119_50445[(2)] = null);

(statearr_49119_50445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48204__auto__ = null;
var cljs$core$async$state_machine__48204__auto____0 = (function (){
var statearr_49120 = [null,null,null,null,null,null,null,null];
(statearr_49120[(0)] = cljs$core$async$state_machine__48204__auto__);

(statearr_49120[(1)] = (1));

return statearr_49120;
});
var cljs$core$async$state_machine__48204__auto____1 = (function (state_49102){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_49102);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e49121){var ex__48207__auto__ = e49121;
var statearr_49122_50446 = state_49102;
(statearr_49122_50446[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_49102[(4)]))){
var statearr_49123_50447 = state_49102;
(statearr_49123_50447[(1)] = cljs.core.first((state_49102[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50448 = state_49102;
state_49102 = G__50448;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$state_machine__48204__auto__ = function(state_49102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48204__auto____1.call(this,state_49102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48204__auto____0;
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48204__auto____1;
return cljs$core$async$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_49124 = f__48392__auto__();
(statearr_49124[(6)] = c__48391__auto__);

return statearr_49124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));

return c__48391__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__49126 = arguments.length;
switch (G__49126) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_50450 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_50450(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50451 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_50451(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50452 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_50452(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50453 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_50453(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49127 = (function (ch,cs,meta49128){
this.ch = ch;
this.cs = cs;
this.meta49128 = meta49128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49129,meta49128__$1){
var self__ = this;
var _49129__$1 = this;
return (new cljs.core.async.t_cljs$core$async49127(self__.ch,self__.cs,meta49128__$1));
}));

(cljs.core.async.t_cljs$core$async49127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49129){
var self__ = this;
var _49129__$1 = this;
return self__.meta49128;
}));

(cljs.core.async.t_cljs$core$async49127.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49127.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49127.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async49127.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async49127.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async49127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49128","meta49128",1789487536,null)], null);
}));

(cljs.core.async.t_cljs$core$async49127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49127");

(cljs.core.async.t_cljs$core$async49127.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49127.
 */
cljs.core.async.__GT_t_cljs$core$async49127 = (function cljs$core$async$mult_$___GT_t_cljs$core$async49127(ch__$1,cs__$1,meta49128){
return (new cljs.core.async.t_cljs$core$async49127(ch__$1,cs__$1,meta49128));
});

}

return (new cljs.core.async.t_cljs$core$async49127(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__48391__auto___50460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_49262){
var state_val_49263 = (state_49262[(1)]);
if((state_val_49263 === (7))){
var inst_49258 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49264_50463 = state_49262__$1;
(statearr_49264_50463[(2)] = inst_49258);

(statearr_49264_50463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (20))){
var inst_49163 = (state_49262[(7)]);
var inst_49175 = cljs.core.first(inst_49163);
var inst_49176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49175,(0),null);
var inst_49177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49175,(1),null);
var state_49262__$1 = (function (){var statearr_49265 = state_49262;
(statearr_49265[(8)] = inst_49176);

return statearr_49265;
})();
if(cljs.core.truth_(inst_49177)){
var statearr_49266_50464 = state_49262__$1;
(statearr_49266_50464[(1)] = (22));

} else {
var statearr_49267_50465 = state_49262__$1;
(statearr_49267_50465[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (27))){
var inst_49205 = (state_49262[(9)]);
var inst_49212 = (state_49262[(10)]);
var inst_49207 = (state_49262[(11)]);
var inst_49132 = (state_49262[(12)]);
var inst_49212__$1 = cljs.core._nth(inst_49205,inst_49207);
var inst_49213 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49212__$1,inst_49132,done);
var state_49262__$1 = (function (){var statearr_49268 = state_49262;
(statearr_49268[(10)] = inst_49212__$1);

return statearr_49268;
})();
if(cljs.core.truth_(inst_49213)){
var statearr_49269_50466 = state_49262__$1;
(statearr_49269_50466[(1)] = (30));

} else {
var statearr_49270_50467 = state_49262__$1;
(statearr_49270_50467[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (1))){
var state_49262__$1 = state_49262;
var statearr_49271_50468 = state_49262__$1;
(statearr_49271_50468[(2)] = null);

(statearr_49271_50468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (24))){
var inst_49163 = (state_49262[(7)]);
var inst_49182 = (state_49262[(2)]);
var inst_49183 = cljs.core.next(inst_49163);
var inst_49141 = inst_49183;
var inst_49142 = null;
var inst_49143 = (0);
var inst_49144 = (0);
var state_49262__$1 = (function (){var statearr_49272 = state_49262;
(statearr_49272[(13)] = inst_49143);

(statearr_49272[(14)] = inst_49182);

(statearr_49272[(15)] = inst_49141);

(statearr_49272[(16)] = inst_49144);

(statearr_49272[(17)] = inst_49142);

return statearr_49272;
})();
var statearr_49273_50469 = state_49262__$1;
(statearr_49273_50469[(2)] = null);

(statearr_49273_50469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (39))){
var state_49262__$1 = state_49262;
var statearr_49277_50470 = state_49262__$1;
(statearr_49277_50470[(2)] = null);

(statearr_49277_50470[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (4))){
var inst_49132 = (state_49262[(12)]);
var inst_49132__$1 = (state_49262[(2)]);
var inst_49133 = (inst_49132__$1 == null);
var state_49262__$1 = (function (){var statearr_49278 = state_49262;
(statearr_49278[(12)] = inst_49132__$1);

return statearr_49278;
})();
if(cljs.core.truth_(inst_49133)){
var statearr_49279_50472 = state_49262__$1;
(statearr_49279_50472[(1)] = (5));

} else {
var statearr_49280_50473 = state_49262__$1;
(statearr_49280_50473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (15))){
var inst_49143 = (state_49262[(13)]);
var inst_49141 = (state_49262[(15)]);
var inst_49144 = (state_49262[(16)]);
var inst_49142 = (state_49262[(17)]);
var inst_49159 = (state_49262[(2)]);
var inst_49160 = (inst_49144 + (1));
var tmp49274 = inst_49143;
var tmp49275 = inst_49141;
var tmp49276 = inst_49142;
var inst_49141__$1 = tmp49275;
var inst_49142__$1 = tmp49276;
var inst_49143__$1 = tmp49274;
var inst_49144__$1 = inst_49160;
var state_49262__$1 = (function (){var statearr_49281 = state_49262;
(statearr_49281[(13)] = inst_49143__$1);

(statearr_49281[(15)] = inst_49141__$1);

(statearr_49281[(16)] = inst_49144__$1);

(statearr_49281[(17)] = inst_49142__$1);

(statearr_49281[(18)] = inst_49159);

return statearr_49281;
})();
var statearr_49282_50477 = state_49262__$1;
(statearr_49282_50477[(2)] = null);

(statearr_49282_50477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (21))){
var inst_49186 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49286_50480 = state_49262__$1;
(statearr_49286_50480[(2)] = inst_49186);

(statearr_49286_50480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (31))){
var inst_49212 = (state_49262[(10)]);
var inst_49216 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49212);
var state_49262__$1 = state_49262;
var statearr_49287_50481 = state_49262__$1;
(statearr_49287_50481[(2)] = inst_49216);

(statearr_49287_50481[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (32))){
var inst_49205 = (state_49262[(9)]);
var inst_49206 = (state_49262[(19)]);
var inst_49207 = (state_49262[(11)]);
var inst_49204 = (state_49262[(20)]);
var inst_49218 = (state_49262[(2)]);
var inst_49219 = (inst_49207 + (1));
var tmp49283 = inst_49205;
var tmp49284 = inst_49206;
var tmp49285 = inst_49204;
var inst_49204__$1 = tmp49285;
var inst_49205__$1 = tmp49283;
var inst_49206__$1 = tmp49284;
var inst_49207__$1 = inst_49219;
var state_49262__$1 = (function (){var statearr_49288 = state_49262;
(statearr_49288[(9)] = inst_49205__$1);

(statearr_49288[(21)] = inst_49218);

(statearr_49288[(19)] = inst_49206__$1);

(statearr_49288[(11)] = inst_49207__$1);

(statearr_49288[(20)] = inst_49204__$1);

return statearr_49288;
})();
var statearr_49289_50484 = state_49262__$1;
(statearr_49289_50484[(2)] = null);

(statearr_49289_50484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (40))){
var inst_49231 = (state_49262[(22)]);
var inst_49235 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49231);
var state_49262__$1 = state_49262;
var statearr_49290_50485 = state_49262__$1;
(statearr_49290_50485[(2)] = inst_49235);

(statearr_49290_50485[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (33))){
var inst_49222 = (state_49262[(23)]);
var inst_49224 = cljs.core.chunked_seq_QMARK_(inst_49222);
var state_49262__$1 = state_49262;
if(inst_49224){
var statearr_49291_50489 = state_49262__$1;
(statearr_49291_50489[(1)] = (36));

} else {
var statearr_49292_50490 = state_49262__$1;
(statearr_49292_50490[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (13))){
var inst_49153 = (state_49262[(24)]);
var inst_49156 = cljs.core.async.close_BANG_(inst_49153);
var state_49262__$1 = state_49262;
var statearr_49293_50495 = state_49262__$1;
(statearr_49293_50495[(2)] = inst_49156);

(statearr_49293_50495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (22))){
var inst_49176 = (state_49262[(8)]);
var inst_49179 = cljs.core.async.close_BANG_(inst_49176);
var state_49262__$1 = state_49262;
var statearr_49294_50496 = state_49262__$1;
(statearr_49294_50496[(2)] = inst_49179);

(statearr_49294_50496[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (36))){
var inst_49222 = (state_49262[(23)]);
var inst_49226 = cljs.core.chunk_first(inst_49222);
var inst_49227 = cljs.core.chunk_rest(inst_49222);
var inst_49228 = cljs.core.count(inst_49226);
var inst_49204 = inst_49227;
var inst_49205 = inst_49226;
var inst_49206 = inst_49228;
var inst_49207 = (0);
var state_49262__$1 = (function (){var statearr_49295 = state_49262;
(statearr_49295[(9)] = inst_49205);

(statearr_49295[(19)] = inst_49206);

(statearr_49295[(11)] = inst_49207);

(statearr_49295[(20)] = inst_49204);

return statearr_49295;
})();
var statearr_49296_50503 = state_49262__$1;
(statearr_49296_50503[(2)] = null);

(statearr_49296_50503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (41))){
var inst_49222 = (state_49262[(23)]);
var inst_49237 = (state_49262[(2)]);
var inst_49238 = cljs.core.next(inst_49222);
var inst_49204 = inst_49238;
var inst_49205 = null;
var inst_49206 = (0);
var inst_49207 = (0);
var state_49262__$1 = (function (){var statearr_49297 = state_49262;
(statearr_49297[(9)] = inst_49205);

(statearr_49297[(25)] = inst_49237);

(statearr_49297[(19)] = inst_49206);

(statearr_49297[(11)] = inst_49207);

(statearr_49297[(20)] = inst_49204);

return statearr_49297;
})();
var statearr_49298_50504 = state_49262__$1;
(statearr_49298_50504[(2)] = null);

(statearr_49298_50504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (43))){
var state_49262__$1 = state_49262;
var statearr_49299_50505 = state_49262__$1;
(statearr_49299_50505[(2)] = null);

(statearr_49299_50505[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (29))){
var inst_49246 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49300_50506 = state_49262__$1;
(statearr_49300_50506[(2)] = inst_49246);

(statearr_49300_50506[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (44))){
var inst_49255 = (state_49262[(2)]);
var state_49262__$1 = (function (){var statearr_49301 = state_49262;
(statearr_49301[(26)] = inst_49255);

return statearr_49301;
})();
var statearr_49302_50507 = state_49262__$1;
(statearr_49302_50507[(2)] = null);

(statearr_49302_50507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (6))){
var inst_49196 = (state_49262[(27)]);
var inst_49195 = cljs.core.deref(cs);
var inst_49196__$1 = cljs.core.keys(inst_49195);
var inst_49197 = cljs.core.count(inst_49196__$1);
var inst_49198 = cljs.core.reset_BANG_(dctr,inst_49197);
var inst_49203 = cljs.core.seq(inst_49196__$1);
var inst_49204 = inst_49203;
var inst_49205 = null;
var inst_49206 = (0);
var inst_49207 = (0);
var state_49262__$1 = (function (){var statearr_49303 = state_49262;
(statearr_49303[(9)] = inst_49205);

(statearr_49303[(19)] = inst_49206);

(statearr_49303[(11)] = inst_49207);

(statearr_49303[(28)] = inst_49198);

(statearr_49303[(20)] = inst_49204);

(statearr_49303[(27)] = inst_49196__$1);

return statearr_49303;
})();
var statearr_49304_50508 = state_49262__$1;
(statearr_49304_50508[(2)] = null);

(statearr_49304_50508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (28))){
var inst_49204 = (state_49262[(20)]);
var inst_49222 = (state_49262[(23)]);
var inst_49222__$1 = cljs.core.seq(inst_49204);
var state_49262__$1 = (function (){var statearr_49305 = state_49262;
(statearr_49305[(23)] = inst_49222__$1);

return statearr_49305;
})();
if(inst_49222__$1){
var statearr_49306_50509 = state_49262__$1;
(statearr_49306_50509[(1)] = (33));

} else {
var statearr_49307_50510 = state_49262__$1;
(statearr_49307_50510[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (25))){
var inst_49206 = (state_49262[(19)]);
var inst_49207 = (state_49262[(11)]);
var inst_49209 = (inst_49207 < inst_49206);
var inst_49210 = inst_49209;
var state_49262__$1 = state_49262;
if(cljs.core.truth_(inst_49210)){
var statearr_49308_50511 = state_49262__$1;
(statearr_49308_50511[(1)] = (27));

} else {
var statearr_49309_50512 = state_49262__$1;
(statearr_49309_50512[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (34))){
var state_49262__$1 = state_49262;
var statearr_49310_50513 = state_49262__$1;
(statearr_49310_50513[(2)] = null);

(statearr_49310_50513[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (17))){
var state_49262__$1 = state_49262;
var statearr_49311_50514 = state_49262__$1;
(statearr_49311_50514[(2)] = null);

(statearr_49311_50514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (3))){
var inst_49260 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49262__$1,inst_49260);
} else {
if((state_val_49263 === (12))){
var inst_49191 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49312_50515 = state_49262__$1;
(statearr_49312_50515[(2)] = inst_49191);

(statearr_49312_50515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (2))){
var state_49262__$1 = state_49262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49262__$1,(4),ch);
} else {
if((state_val_49263 === (23))){
var state_49262__$1 = state_49262;
var statearr_49313_50516 = state_49262__$1;
(statearr_49313_50516[(2)] = null);

(statearr_49313_50516[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (35))){
var inst_49244 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49314_50517 = state_49262__$1;
(statearr_49314_50517[(2)] = inst_49244);

(statearr_49314_50517[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (19))){
var inst_49163 = (state_49262[(7)]);
var inst_49167 = cljs.core.chunk_first(inst_49163);
var inst_49168 = cljs.core.chunk_rest(inst_49163);
var inst_49169 = cljs.core.count(inst_49167);
var inst_49141 = inst_49168;
var inst_49142 = inst_49167;
var inst_49143 = inst_49169;
var inst_49144 = (0);
var state_49262__$1 = (function (){var statearr_49315 = state_49262;
(statearr_49315[(13)] = inst_49143);

(statearr_49315[(15)] = inst_49141);

(statearr_49315[(16)] = inst_49144);

(statearr_49315[(17)] = inst_49142);

return statearr_49315;
})();
var statearr_49316_50518 = state_49262__$1;
(statearr_49316_50518[(2)] = null);

(statearr_49316_50518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (11))){
var inst_49141 = (state_49262[(15)]);
var inst_49163 = (state_49262[(7)]);
var inst_49163__$1 = cljs.core.seq(inst_49141);
var state_49262__$1 = (function (){var statearr_49317 = state_49262;
(statearr_49317[(7)] = inst_49163__$1);

return statearr_49317;
})();
if(inst_49163__$1){
var statearr_49318_50519 = state_49262__$1;
(statearr_49318_50519[(1)] = (16));

} else {
var statearr_49319_50520 = state_49262__$1;
(statearr_49319_50520[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (9))){
var inst_49193 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49320_50521 = state_49262__$1;
(statearr_49320_50521[(2)] = inst_49193);

(statearr_49320_50521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (5))){
var inst_49139 = cljs.core.deref(cs);
var inst_49140 = cljs.core.seq(inst_49139);
var inst_49141 = inst_49140;
var inst_49142 = null;
var inst_49143 = (0);
var inst_49144 = (0);
var state_49262__$1 = (function (){var statearr_49321 = state_49262;
(statearr_49321[(13)] = inst_49143);

(statearr_49321[(15)] = inst_49141);

(statearr_49321[(16)] = inst_49144);

(statearr_49321[(17)] = inst_49142);

return statearr_49321;
})();
var statearr_49322_50522 = state_49262__$1;
(statearr_49322_50522[(2)] = null);

(statearr_49322_50522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (14))){
var state_49262__$1 = state_49262;
var statearr_49323_50523 = state_49262__$1;
(statearr_49323_50523[(2)] = null);

(statearr_49323_50523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (45))){
var inst_49252 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49324_50524 = state_49262__$1;
(statearr_49324_50524[(2)] = inst_49252);

(statearr_49324_50524[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (26))){
var inst_49196 = (state_49262[(27)]);
var inst_49248 = (state_49262[(2)]);
var inst_49249 = cljs.core.seq(inst_49196);
var state_49262__$1 = (function (){var statearr_49325 = state_49262;
(statearr_49325[(29)] = inst_49248);

return statearr_49325;
})();
if(inst_49249){
var statearr_49326_50525 = state_49262__$1;
(statearr_49326_50525[(1)] = (42));

} else {
var statearr_49327_50526 = state_49262__$1;
(statearr_49327_50526[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (16))){
var inst_49163 = (state_49262[(7)]);
var inst_49165 = cljs.core.chunked_seq_QMARK_(inst_49163);
var state_49262__$1 = state_49262;
if(inst_49165){
var statearr_49328_50533 = state_49262__$1;
(statearr_49328_50533[(1)] = (19));

} else {
var statearr_49329_50534 = state_49262__$1;
(statearr_49329_50534[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (38))){
var inst_49241 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49330_50535 = state_49262__$1;
(statearr_49330_50535[(2)] = inst_49241);

(statearr_49330_50535[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (30))){
var state_49262__$1 = state_49262;
var statearr_49331_50536 = state_49262__$1;
(statearr_49331_50536[(2)] = null);

(statearr_49331_50536[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (10))){
var inst_49144 = (state_49262[(16)]);
var inst_49142 = (state_49262[(17)]);
var inst_49152 = cljs.core._nth(inst_49142,inst_49144);
var inst_49153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49152,(0),null);
var inst_49154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49152,(1),null);
var state_49262__$1 = (function (){var statearr_49332 = state_49262;
(statearr_49332[(24)] = inst_49153);

return statearr_49332;
})();
if(cljs.core.truth_(inst_49154)){
var statearr_49333_50537 = state_49262__$1;
(statearr_49333_50537[(1)] = (13));

} else {
var statearr_49334_50538 = state_49262__$1;
(statearr_49334_50538[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (18))){
var inst_49189 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49335_50539 = state_49262__$1;
(statearr_49335_50539[(2)] = inst_49189);

(statearr_49335_50539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (42))){
var state_49262__$1 = state_49262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49262__$1,(45),dchan);
} else {
if((state_val_49263 === (37))){
var inst_49231 = (state_49262[(22)]);
var inst_49222 = (state_49262[(23)]);
var inst_49132 = (state_49262[(12)]);
var inst_49231__$1 = cljs.core.first(inst_49222);
var inst_49232 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49231__$1,inst_49132,done);
var state_49262__$1 = (function (){var statearr_49336 = state_49262;
(statearr_49336[(22)] = inst_49231__$1);

return statearr_49336;
})();
if(cljs.core.truth_(inst_49232)){
var statearr_49337_50540 = state_49262__$1;
(statearr_49337_50540[(1)] = (39));

} else {
var statearr_49338_50541 = state_49262__$1;
(statearr_49338_50541[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (8))){
var inst_49143 = (state_49262[(13)]);
var inst_49144 = (state_49262[(16)]);
var inst_49146 = (inst_49144 < inst_49143);
var inst_49147 = inst_49146;
var state_49262__$1 = state_49262;
if(cljs.core.truth_(inst_49147)){
var statearr_49339_50542 = state_49262__$1;
(statearr_49339_50542[(1)] = (10));

} else {
var statearr_49340_50543 = state_49262__$1;
(statearr_49340_50543[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__48204__auto__ = null;
var cljs$core$async$mult_$_state_machine__48204__auto____0 = (function (){
var statearr_49341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49341[(0)] = cljs$core$async$mult_$_state_machine__48204__auto__);

(statearr_49341[(1)] = (1));

return statearr_49341;
});
var cljs$core$async$mult_$_state_machine__48204__auto____1 = (function (state_49262){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_49262);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e49342){var ex__48207__auto__ = e49342;
var statearr_49343_50544 = state_49262;
(statearr_49343_50544[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_49262[(4)]))){
var statearr_49344_50545 = state_49262;
(statearr_49344_50545[(1)] = cljs.core.first((state_49262[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50546 = state_49262;
state_49262 = G__50546;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48204__auto__ = function(state_49262){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48204__auto____1.call(this,state_49262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48204__auto____0;
cljs$core$async$mult_$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48204__auto____1;
return cljs$core$async$mult_$_state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_49345 = f__48392__auto__();
(statearr_49345[(6)] = c__48391__auto___50460);

return statearr_49345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__49347 = arguments.length;
switch (G__49347) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_50548 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_50548(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50549 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_50549(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50550 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50550(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50551 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_50551(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50552 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50552(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50553 = arguments.length;
var i__4830__auto___50554 = (0);
while(true){
if((i__4830__auto___50554 < len__4829__auto___50553)){
args__4835__auto__.push((arguments[i__4830__auto___50554]));

var G__50555 = (i__4830__auto___50554 + (1));
i__4830__auto___50554 = G__50555;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49352){
var map__49353 = p__49352;
var map__49353__$1 = cljs.core.__destructure_map(map__49353);
var opts = map__49353__$1;
var statearr_49354_50556 = state;
(statearr_49354_50556[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_49355_50557 = state;
(statearr_49355_50557[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_49356_50558 = state;
(statearr_49356_50558[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49348){
var G__49349 = cljs.core.first(seq49348);
var seq49348__$1 = cljs.core.next(seq49348);
var G__49350 = cljs.core.first(seq49348__$1);
var seq49348__$2 = cljs.core.next(seq49348__$1);
var G__49351 = cljs.core.first(seq49348__$2);
var seq49348__$3 = cljs.core.next(seq49348__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49349,G__49350,G__49351,seq49348__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49357 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49358){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49358 = meta49358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49359,meta49358__$1){
var self__ = this;
var _49359__$1 = this;
return (new cljs.core.async.t_cljs$core$async49357(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49358__$1));
}));

(cljs.core.async.t_cljs$core$async49357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49359){
var self__ = this;
var _49359__$1 = this;
return self__.meta49358;
}));

(cljs.core.async.t_cljs$core$async49357.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async49357.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49357.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49357.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49357.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49357.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49357.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49358","meta49358",-554558800,null)], null);
}));

(cljs.core.async.t_cljs$core$async49357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49357");

(cljs.core.async.t_cljs$core$async49357.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49357.
 */
cljs.core.async.__GT_t_cljs$core$async49357 = (function cljs$core$async$mix_$___GT_t_cljs$core$async49357(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49358){
return (new cljs.core.async.t_cljs$core$async49357(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49358));
});

}

return (new cljs.core.async.t_cljs$core$async49357(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48391__auto___50565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_49427){
var state_val_49428 = (state_49427[(1)]);
if((state_val_49428 === (7))){
var inst_49387 = (state_49427[(2)]);
var state_49427__$1 = state_49427;
if(cljs.core.truth_(inst_49387)){
var statearr_49429_50566 = state_49427__$1;
(statearr_49429_50566[(1)] = (8));

} else {
var statearr_49430_50567 = state_49427__$1;
(statearr_49430_50567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (20))){
var inst_49380 = (state_49427[(7)]);
var state_49427__$1 = state_49427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49427__$1,(23),out,inst_49380);
} else {
if((state_val_49428 === (1))){
var inst_49363 = calc_state();
var inst_49364 = cljs.core.__destructure_map(inst_49363);
var inst_49365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49364,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49364,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49364,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49368 = inst_49363;
var state_49427__$1 = (function (){var statearr_49431 = state_49427;
(statearr_49431[(8)] = inst_49365);

(statearr_49431[(9)] = inst_49366);

(statearr_49431[(10)] = inst_49367);

(statearr_49431[(11)] = inst_49368);

return statearr_49431;
})();
var statearr_49432_50568 = state_49427__$1;
(statearr_49432_50568[(2)] = null);

(statearr_49432_50568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (24))){
var inst_49371 = (state_49427[(12)]);
var inst_49368 = inst_49371;
var state_49427__$1 = (function (){var statearr_49433 = state_49427;
(statearr_49433[(11)] = inst_49368);

return statearr_49433;
})();
var statearr_49434_50569 = state_49427__$1;
(statearr_49434_50569[(2)] = null);

(statearr_49434_50569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (4))){
var inst_49382 = (state_49427[(13)]);
var inst_49380 = (state_49427[(7)]);
var inst_49379 = (state_49427[(2)]);
var inst_49380__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49379,(0),null);
var inst_49381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49379,(1),null);
var inst_49382__$1 = (inst_49380__$1 == null);
var state_49427__$1 = (function (){var statearr_49435 = state_49427;
(statearr_49435[(13)] = inst_49382__$1);

(statearr_49435[(14)] = inst_49381);

(statearr_49435[(7)] = inst_49380__$1);

return statearr_49435;
})();
if(cljs.core.truth_(inst_49382__$1)){
var statearr_49436_50570 = state_49427__$1;
(statearr_49436_50570[(1)] = (5));

} else {
var statearr_49437_50571 = state_49427__$1;
(statearr_49437_50571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (15))){
var inst_49372 = (state_49427[(15)]);
var inst_49401 = (state_49427[(16)]);
var inst_49401__$1 = cljs.core.empty_QMARK_(inst_49372);
var state_49427__$1 = (function (){var statearr_49438 = state_49427;
(statearr_49438[(16)] = inst_49401__$1);

return statearr_49438;
})();
if(inst_49401__$1){
var statearr_49439_50572 = state_49427__$1;
(statearr_49439_50572[(1)] = (17));

} else {
var statearr_49440_50573 = state_49427__$1;
(statearr_49440_50573[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (21))){
var inst_49371 = (state_49427[(12)]);
var inst_49368 = inst_49371;
var state_49427__$1 = (function (){var statearr_49441 = state_49427;
(statearr_49441[(11)] = inst_49368);

return statearr_49441;
})();
var statearr_49442_50574 = state_49427__$1;
(statearr_49442_50574[(2)] = null);

(statearr_49442_50574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (13))){
var inst_49394 = (state_49427[(2)]);
var inst_49395 = calc_state();
var inst_49368 = inst_49395;
var state_49427__$1 = (function (){var statearr_49443 = state_49427;
(statearr_49443[(17)] = inst_49394);

(statearr_49443[(11)] = inst_49368);

return statearr_49443;
})();
var statearr_49444_50575 = state_49427__$1;
(statearr_49444_50575[(2)] = null);

(statearr_49444_50575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (22))){
var inst_49421 = (state_49427[(2)]);
var state_49427__$1 = state_49427;
var statearr_49445_50576 = state_49427__$1;
(statearr_49445_50576[(2)] = inst_49421);

(statearr_49445_50576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (6))){
var inst_49381 = (state_49427[(14)]);
var inst_49385 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49381,change);
var state_49427__$1 = state_49427;
var statearr_49446_50577 = state_49427__$1;
(statearr_49446_50577[(2)] = inst_49385);

(statearr_49446_50577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (25))){
var state_49427__$1 = state_49427;
var statearr_49447_50578 = state_49427__$1;
(statearr_49447_50578[(2)] = null);

(statearr_49447_50578[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (17))){
var inst_49373 = (state_49427[(18)]);
var inst_49381 = (state_49427[(14)]);
var inst_49403 = (inst_49373.cljs$core$IFn$_invoke$arity$1 ? inst_49373.cljs$core$IFn$_invoke$arity$1(inst_49381) : inst_49373.call(null,inst_49381));
var inst_49404 = cljs.core.not(inst_49403);
var state_49427__$1 = state_49427;
var statearr_49448_50579 = state_49427__$1;
(statearr_49448_50579[(2)] = inst_49404);

(statearr_49448_50579[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (3))){
var inst_49425 = (state_49427[(2)]);
var state_49427__$1 = state_49427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49427__$1,inst_49425);
} else {
if((state_val_49428 === (12))){
var state_49427__$1 = state_49427;
var statearr_49449_50580 = state_49427__$1;
(statearr_49449_50580[(2)] = null);

(statearr_49449_50580[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (2))){
var inst_49371 = (state_49427[(12)]);
var inst_49368 = (state_49427[(11)]);
var inst_49371__$1 = cljs.core.__destructure_map(inst_49368);
var inst_49372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49371__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49371__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49371__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49427__$1 = (function (){var statearr_49450 = state_49427;
(statearr_49450[(12)] = inst_49371__$1);

(statearr_49450[(18)] = inst_49373);

(statearr_49450[(15)] = inst_49372);

return statearr_49450;
})();
return cljs.core.async.ioc_alts_BANG_(state_49427__$1,(4),inst_49374);
} else {
if((state_val_49428 === (23))){
var inst_49412 = (state_49427[(2)]);
var state_49427__$1 = state_49427;
if(cljs.core.truth_(inst_49412)){
var statearr_49451_50587 = state_49427__$1;
(statearr_49451_50587[(1)] = (24));

} else {
var statearr_49452_50588 = state_49427__$1;
(statearr_49452_50588[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (19))){
var inst_49407 = (state_49427[(2)]);
var state_49427__$1 = state_49427;
var statearr_49453_50589 = state_49427__$1;
(statearr_49453_50589[(2)] = inst_49407);

(statearr_49453_50589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (11))){
var inst_49381 = (state_49427[(14)]);
var inst_49391 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_49381);
var state_49427__$1 = state_49427;
var statearr_49454_50590 = state_49427__$1;
(statearr_49454_50590[(2)] = inst_49391);

(statearr_49454_50590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (9))){
var inst_49398 = (state_49427[(19)]);
var inst_49381 = (state_49427[(14)]);
var inst_49372 = (state_49427[(15)]);
var inst_49398__$1 = (inst_49372.cljs$core$IFn$_invoke$arity$1 ? inst_49372.cljs$core$IFn$_invoke$arity$1(inst_49381) : inst_49372.call(null,inst_49381));
var state_49427__$1 = (function (){var statearr_49455 = state_49427;
(statearr_49455[(19)] = inst_49398__$1);

return statearr_49455;
})();
if(cljs.core.truth_(inst_49398__$1)){
var statearr_49456_50591 = state_49427__$1;
(statearr_49456_50591[(1)] = (14));

} else {
var statearr_49457_50592 = state_49427__$1;
(statearr_49457_50592[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (5))){
var inst_49382 = (state_49427[(13)]);
var state_49427__$1 = state_49427;
var statearr_49458_50593 = state_49427__$1;
(statearr_49458_50593[(2)] = inst_49382);

(statearr_49458_50593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (14))){
var inst_49398 = (state_49427[(19)]);
var state_49427__$1 = state_49427;
var statearr_49459_50594 = state_49427__$1;
(statearr_49459_50594[(2)] = inst_49398);

(statearr_49459_50594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (26))){
var inst_49417 = (state_49427[(2)]);
var state_49427__$1 = state_49427;
var statearr_49460_50595 = state_49427__$1;
(statearr_49460_50595[(2)] = inst_49417);

(statearr_49460_50595[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (16))){
var inst_49409 = (state_49427[(2)]);
var state_49427__$1 = state_49427;
if(cljs.core.truth_(inst_49409)){
var statearr_49461_50596 = state_49427__$1;
(statearr_49461_50596[(1)] = (20));

} else {
var statearr_49462_50597 = state_49427__$1;
(statearr_49462_50597[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (10))){
var inst_49423 = (state_49427[(2)]);
var state_49427__$1 = state_49427;
var statearr_49463_50598 = state_49427__$1;
(statearr_49463_50598[(2)] = inst_49423);

(statearr_49463_50598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (18))){
var inst_49401 = (state_49427[(16)]);
var state_49427__$1 = state_49427;
var statearr_49464_50599 = state_49427__$1;
(statearr_49464_50599[(2)] = inst_49401);

(statearr_49464_50599[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49428 === (8))){
var inst_49380 = (state_49427[(7)]);
var inst_49389 = (inst_49380 == null);
var state_49427__$1 = state_49427;
if(cljs.core.truth_(inst_49389)){
var statearr_49465_50600 = state_49427__$1;
(statearr_49465_50600[(1)] = (11));

} else {
var statearr_49466_50601 = state_49427__$1;
(statearr_49466_50601[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__48204__auto__ = null;
var cljs$core$async$mix_$_state_machine__48204__auto____0 = (function (){
var statearr_49467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49467[(0)] = cljs$core$async$mix_$_state_machine__48204__auto__);

(statearr_49467[(1)] = (1));

return statearr_49467;
});
var cljs$core$async$mix_$_state_machine__48204__auto____1 = (function (state_49427){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_49427);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e49468){var ex__48207__auto__ = e49468;
var statearr_49469_50602 = state_49427;
(statearr_49469_50602[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_49427[(4)]))){
var statearr_49470_50603 = state_49427;
(statearr_49470_50603[(1)] = cljs.core.first((state_49427[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50604 = state_49427;
state_49427 = G__50604;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48204__auto__ = function(state_49427){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48204__auto____1.call(this,state_49427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48204__auto____0;
cljs$core$async$mix_$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48204__auto____1;
return cljs$core$async$mix_$_state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_49471 = f__48392__auto__();
(statearr_49471[(6)] = c__48391__auto___50565);

return statearr_49471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_50605 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50605(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50606 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50606(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50607 = (function() {
var G__50608 = null;
var G__50608__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50608__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50608 = function(p,v){
switch(arguments.length){
case 1:
return G__50608__1.call(this,p);
case 2:
return G__50608__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50608.cljs$core$IFn$_invoke$arity$1 = G__50608__1;
G__50608.cljs$core$IFn$_invoke$arity$2 = G__50608__2;
return G__50608;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49473 = arguments.length;
switch (G__49473) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50607(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50607(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__49476 = arguments.length;
switch (G__49476) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__49474_SHARP_){
if(cljs.core.truth_((p1__49474_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49474_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49474_SHARP_.call(null,topic)))){
return p1__49474_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49474_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49477 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49478){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49478 = meta49478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49479,meta49478__$1){
var self__ = this;
var _49479__$1 = this;
return (new cljs.core.async.t_cljs$core$async49477(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49478__$1));
}));

(cljs.core.async.t_cljs$core$async49477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49479){
var self__ = this;
var _49479__$1 = this;
return self__.meta49478;
}));

(cljs.core.async.t_cljs$core$async49477.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49477.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49477.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49477.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49477.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async49477.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49477.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49478","meta49478",-1678347430,null)], null);
}));

(cljs.core.async.t_cljs$core$async49477.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49477");

(cljs.core.async.t_cljs$core$async49477.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49477");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49477.
 */
cljs.core.async.__GT_t_cljs$core$async49477 = (function cljs$core$async$__GT_t_cljs$core$async49477(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49478){
return (new cljs.core.async.t_cljs$core$async49477(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49478));
});

}

return (new cljs.core.async.t_cljs$core$async49477(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48391__auto___50616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_49551){
var state_val_49552 = (state_49551[(1)]);
if((state_val_49552 === (7))){
var inst_49547 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
var statearr_49553_50617 = state_49551__$1;
(statearr_49553_50617[(2)] = inst_49547);

(statearr_49553_50617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (20))){
var state_49551__$1 = state_49551;
var statearr_49554_50618 = state_49551__$1;
(statearr_49554_50618[(2)] = null);

(statearr_49554_50618[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (1))){
var state_49551__$1 = state_49551;
var statearr_49555_50619 = state_49551__$1;
(statearr_49555_50619[(2)] = null);

(statearr_49555_50619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (24))){
var inst_49530 = (state_49551[(7)]);
var inst_49539 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49530);
var state_49551__$1 = state_49551;
var statearr_49556_50620 = state_49551__$1;
(statearr_49556_50620[(2)] = inst_49539);

(statearr_49556_50620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (4))){
var inst_49482 = (state_49551[(8)]);
var inst_49482__$1 = (state_49551[(2)]);
var inst_49483 = (inst_49482__$1 == null);
var state_49551__$1 = (function (){var statearr_49557 = state_49551;
(statearr_49557[(8)] = inst_49482__$1);

return statearr_49557;
})();
if(cljs.core.truth_(inst_49483)){
var statearr_49558_50621 = state_49551__$1;
(statearr_49558_50621[(1)] = (5));

} else {
var statearr_49559_50622 = state_49551__$1;
(statearr_49559_50622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (15))){
var inst_49524 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
var statearr_49560_50623 = state_49551__$1;
(statearr_49560_50623[(2)] = inst_49524);

(statearr_49560_50623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (21))){
var inst_49544 = (state_49551[(2)]);
var state_49551__$1 = (function (){var statearr_49561 = state_49551;
(statearr_49561[(9)] = inst_49544);

return statearr_49561;
})();
var statearr_49562_50624 = state_49551__$1;
(statearr_49562_50624[(2)] = null);

(statearr_49562_50624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (13))){
var inst_49506 = (state_49551[(10)]);
var inst_49508 = cljs.core.chunked_seq_QMARK_(inst_49506);
var state_49551__$1 = state_49551;
if(inst_49508){
var statearr_49563_50625 = state_49551__$1;
(statearr_49563_50625[(1)] = (16));

} else {
var statearr_49564_50626 = state_49551__$1;
(statearr_49564_50626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (22))){
var inst_49536 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
if(cljs.core.truth_(inst_49536)){
var statearr_49565_50627 = state_49551__$1;
(statearr_49565_50627[(1)] = (23));

} else {
var statearr_49566_50628 = state_49551__$1;
(statearr_49566_50628[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (6))){
var inst_49530 = (state_49551[(7)]);
var inst_49532 = (state_49551[(11)]);
var inst_49482 = (state_49551[(8)]);
var inst_49530__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49482) : topic_fn.call(null,inst_49482));
var inst_49531 = cljs.core.deref(mults);
var inst_49532__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49531,inst_49530__$1);
var state_49551__$1 = (function (){var statearr_49567 = state_49551;
(statearr_49567[(7)] = inst_49530__$1);

(statearr_49567[(11)] = inst_49532__$1);

return statearr_49567;
})();
if(cljs.core.truth_(inst_49532__$1)){
var statearr_49568_50629 = state_49551__$1;
(statearr_49568_50629[(1)] = (19));

} else {
var statearr_49569_50630 = state_49551__$1;
(statearr_49569_50630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (25))){
var inst_49541 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
var statearr_49570_50631 = state_49551__$1;
(statearr_49570_50631[(2)] = inst_49541);

(statearr_49570_50631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (17))){
var inst_49506 = (state_49551[(10)]);
var inst_49515 = cljs.core.first(inst_49506);
var inst_49516 = cljs.core.async.muxch_STAR_(inst_49515);
var inst_49517 = cljs.core.async.close_BANG_(inst_49516);
var inst_49518 = cljs.core.next(inst_49506);
var inst_49492 = inst_49518;
var inst_49493 = null;
var inst_49494 = (0);
var inst_49495 = (0);
var state_49551__$1 = (function (){var statearr_49571 = state_49551;
(statearr_49571[(12)] = inst_49494);

(statearr_49571[(13)] = inst_49517);

(statearr_49571[(14)] = inst_49495);

(statearr_49571[(15)] = inst_49492);

(statearr_49571[(16)] = inst_49493);

return statearr_49571;
})();
var statearr_49572_50632 = state_49551__$1;
(statearr_49572_50632[(2)] = null);

(statearr_49572_50632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (3))){
var inst_49549 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49551__$1,inst_49549);
} else {
if((state_val_49552 === (12))){
var inst_49526 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
var statearr_49573_50633 = state_49551__$1;
(statearr_49573_50633[(2)] = inst_49526);

(statearr_49573_50633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (2))){
var state_49551__$1 = state_49551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49551__$1,(4),ch);
} else {
if((state_val_49552 === (23))){
var state_49551__$1 = state_49551;
var statearr_49574_50634 = state_49551__$1;
(statearr_49574_50634[(2)] = null);

(statearr_49574_50634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (19))){
var inst_49532 = (state_49551[(11)]);
var inst_49482 = (state_49551[(8)]);
var inst_49534 = cljs.core.async.muxch_STAR_(inst_49532);
var state_49551__$1 = state_49551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49551__$1,(22),inst_49534,inst_49482);
} else {
if((state_val_49552 === (11))){
var inst_49506 = (state_49551[(10)]);
var inst_49492 = (state_49551[(15)]);
var inst_49506__$1 = cljs.core.seq(inst_49492);
var state_49551__$1 = (function (){var statearr_49575 = state_49551;
(statearr_49575[(10)] = inst_49506__$1);

return statearr_49575;
})();
if(inst_49506__$1){
var statearr_49576_50635 = state_49551__$1;
(statearr_49576_50635[(1)] = (13));

} else {
var statearr_49577_50636 = state_49551__$1;
(statearr_49577_50636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (9))){
var inst_49528 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
var statearr_49578_50638 = state_49551__$1;
(statearr_49578_50638[(2)] = inst_49528);

(statearr_49578_50638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (5))){
var inst_49489 = cljs.core.deref(mults);
var inst_49490 = cljs.core.vals(inst_49489);
var inst_49491 = cljs.core.seq(inst_49490);
var inst_49492 = inst_49491;
var inst_49493 = null;
var inst_49494 = (0);
var inst_49495 = (0);
var state_49551__$1 = (function (){var statearr_49579 = state_49551;
(statearr_49579[(12)] = inst_49494);

(statearr_49579[(14)] = inst_49495);

(statearr_49579[(15)] = inst_49492);

(statearr_49579[(16)] = inst_49493);

return statearr_49579;
})();
var statearr_49580_50640 = state_49551__$1;
(statearr_49580_50640[(2)] = null);

(statearr_49580_50640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (14))){
var state_49551__$1 = state_49551;
var statearr_49584_50641 = state_49551__$1;
(statearr_49584_50641[(2)] = null);

(statearr_49584_50641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (16))){
var inst_49506 = (state_49551[(10)]);
var inst_49510 = cljs.core.chunk_first(inst_49506);
var inst_49511 = cljs.core.chunk_rest(inst_49506);
var inst_49512 = cljs.core.count(inst_49510);
var inst_49492 = inst_49511;
var inst_49493 = inst_49510;
var inst_49494 = inst_49512;
var inst_49495 = (0);
var state_49551__$1 = (function (){var statearr_49585 = state_49551;
(statearr_49585[(12)] = inst_49494);

(statearr_49585[(14)] = inst_49495);

(statearr_49585[(15)] = inst_49492);

(statearr_49585[(16)] = inst_49493);

return statearr_49585;
})();
var statearr_49586_50642 = state_49551__$1;
(statearr_49586_50642[(2)] = null);

(statearr_49586_50642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (10))){
var inst_49494 = (state_49551[(12)]);
var inst_49495 = (state_49551[(14)]);
var inst_49492 = (state_49551[(15)]);
var inst_49493 = (state_49551[(16)]);
var inst_49500 = cljs.core._nth(inst_49493,inst_49495);
var inst_49501 = cljs.core.async.muxch_STAR_(inst_49500);
var inst_49502 = cljs.core.async.close_BANG_(inst_49501);
var inst_49503 = (inst_49495 + (1));
var tmp49581 = inst_49494;
var tmp49582 = inst_49492;
var tmp49583 = inst_49493;
var inst_49492__$1 = tmp49582;
var inst_49493__$1 = tmp49583;
var inst_49494__$1 = tmp49581;
var inst_49495__$1 = inst_49503;
var state_49551__$1 = (function (){var statearr_49587 = state_49551;
(statearr_49587[(12)] = inst_49494__$1);

(statearr_49587[(17)] = inst_49502);

(statearr_49587[(14)] = inst_49495__$1);

(statearr_49587[(15)] = inst_49492__$1);

(statearr_49587[(16)] = inst_49493__$1);

return statearr_49587;
})();
var statearr_49588_50645 = state_49551__$1;
(statearr_49588_50645[(2)] = null);

(statearr_49588_50645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (18))){
var inst_49521 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
var statearr_49589_50646 = state_49551__$1;
(statearr_49589_50646[(2)] = inst_49521);

(statearr_49589_50646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (8))){
var inst_49494 = (state_49551[(12)]);
var inst_49495 = (state_49551[(14)]);
var inst_49497 = (inst_49495 < inst_49494);
var inst_49498 = inst_49497;
var state_49551__$1 = state_49551;
if(cljs.core.truth_(inst_49498)){
var statearr_49590_50647 = state_49551__$1;
(statearr_49590_50647[(1)] = (10));

} else {
var statearr_49591_50648 = state_49551__$1;
(statearr_49591_50648[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48204__auto__ = null;
var cljs$core$async$state_machine__48204__auto____0 = (function (){
var statearr_49592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49592[(0)] = cljs$core$async$state_machine__48204__auto__);

(statearr_49592[(1)] = (1));

return statearr_49592;
});
var cljs$core$async$state_machine__48204__auto____1 = (function (state_49551){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_49551);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e49593){var ex__48207__auto__ = e49593;
var statearr_49594_50649 = state_49551;
(statearr_49594_50649[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_49551[(4)]))){
var statearr_49595_50650 = state_49551;
(statearr_49595_50650[(1)] = cljs.core.first((state_49551[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50651 = state_49551;
state_49551 = G__50651;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$state_machine__48204__auto__ = function(state_49551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48204__auto____1.call(this,state_49551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48204__auto____0;
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48204__auto____1;
return cljs$core$async$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_49596 = f__48392__auto__();
(statearr_49596[(6)] = c__48391__auto___50616);

return statearr_49596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49598 = arguments.length;
switch (G__49598) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49600 = arguments.length;
switch (G__49600) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49602 = arguments.length;
switch (G__49602) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__48391__auto___50655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_49649){
var state_val_49650 = (state_49649[(1)]);
if((state_val_49650 === (7))){
var state_49649__$1 = state_49649;
var statearr_49651_50656 = state_49649__$1;
(statearr_49651_50656[(2)] = null);

(statearr_49651_50656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (1))){
var state_49649__$1 = state_49649;
var statearr_49652_50657 = state_49649__$1;
(statearr_49652_50657[(2)] = null);

(statearr_49652_50657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (4))){
var inst_49606 = (state_49649[(7)]);
var inst_49605 = (state_49649[(8)]);
var inst_49608 = (inst_49606 < inst_49605);
var state_49649__$1 = state_49649;
if(cljs.core.truth_(inst_49608)){
var statearr_49656_50658 = state_49649__$1;
(statearr_49656_50658[(1)] = (6));

} else {
var statearr_49657_50659 = state_49649__$1;
(statearr_49657_50659[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (15))){
var inst_49631 = (state_49649[(9)]);
var inst_49637 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49631);
var state_49649__$1 = state_49649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49649__$1,(17),out,inst_49637);
} else {
if((state_val_49650 === (13))){
var inst_49631 = (state_49649[(9)]);
var inst_49631__$1 = (state_49649[(2)]);
var inst_49632 = cljs.core.some(cljs.core.nil_QMARK_,inst_49631__$1);
var state_49649__$1 = (function (){var statearr_49658 = state_49649;
(statearr_49658[(9)] = inst_49631__$1);

return statearr_49658;
})();
if(cljs.core.truth_(inst_49632)){
var statearr_49659_50660 = state_49649__$1;
(statearr_49659_50660[(1)] = (14));

} else {
var statearr_49660_50661 = state_49649__$1;
(statearr_49660_50661[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (6))){
var state_49649__$1 = state_49649;
var statearr_49661_50662 = state_49649__$1;
(statearr_49661_50662[(2)] = null);

(statearr_49661_50662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (17))){
var inst_49639 = (state_49649[(2)]);
var state_49649__$1 = (function (){var statearr_49665 = state_49649;
(statearr_49665[(10)] = inst_49639);

return statearr_49665;
})();
var statearr_49666_50663 = state_49649__$1;
(statearr_49666_50663[(2)] = null);

(statearr_49666_50663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (3))){
var inst_49647 = (state_49649[(2)]);
var state_49649__$1 = state_49649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49649__$1,inst_49647);
} else {
if((state_val_49650 === (12))){
var _ = (function (){var statearr_49667 = state_49649;
(statearr_49667[(4)] = cljs.core.rest((state_49649[(4)])));

return statearr_49667;
})();
var state_49649__$1 = state_49649;
var ex49664 = (state_49649__$1[(2)]);
var statearr_49668_50664 = state_49649__$1;
(statearr_49668_50664[(5)] = ex49664);


if((ex49664 instanceof Object)){
var statearr_49669_50665 = state_49649__$1;
(statearr_49669_50665[(1)] = (11));

(statearr_49669_50665[(5)] = null);

} else {
throw ex49664;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (2))){
var inst_49604 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49605 = cnt;
var inst_49606 = (0);
var state_49649__$1 = (function (){var statearr_49670 = state_49649;
(statearr_49670[(7)] = inst_49606);

(statearr_49670[(8)] = inst_49605);

(statearr_49670[(11)] = inst_49604);

return statearr_49670;
})();
var statearr_49671_50666 = state_49649__$1;
(statearr_49671_50666[(2)] = null);

(statearr_49671_50666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (11))){
var inst_49610 = (state_49649[(2)]);
var inst_49611 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49649__$1 = (function (){var statearr_49672 = state_49649;
(statearr_49672[(12)] = inst_49610);

return statearr_49672;
})();
var statearr_49673_50667 = state_49649__$1;
(statearr_49673_50667[(2)] = inst_49611);

(statearr_49673_50667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (9))){
var inst_49606 = (state_49649[(7)]);
var _ = (function (){var statearr_49674 = state_49649;
(statearr_49674[(4)] = cljs.core.cons((12),(state_49649[(4)])));

return statearr_49674;
})();
var inst_49617 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49606) : chs__$1.call(null,inst_49606));
var inst_49618 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49606) : done.call(null,inst_49606));
var inst_49619 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49617,inst_49618);
var ___$1 = (function (){var statearr_49675 = state_49649;
(statearr_49675[(4)] = cljs.core.rest((state_49649[(4)])));

return statearr_49675;
})();
var state_49649__$1 = state_49649;
var statearr_49676_50668 = state_49649__$1;
(statearr_49676_50668[(2)] = inst_49619);

(statearr_49676_50668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (5))){
var inst_49629 = (state_49649[(2)]);
var state_49649__$1 = (function (){var statearr_49677 = state_49649;
(statearr_49677[(13)] = inst_49629);

return statearr_49677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49649__$1,(13),dchan);
} else {
if((state_val_49650 === (14))){
var inst_49635 = cljs.core.async.close_BANG_(out);
var state_49649__$1 = state_49649;
var statearr_49678_50669 = state_49649__$1;
(statearr_49678_50669[(2)] = inst_49635);

(statearr_49678_50669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (16))){
var inst_49642 = (state_49649[(2)]);
var state_49649__$1 = state_49649;
var statearr_49679_50670 = state_49649__$1;
(statearr_49679_50670[(2)] = inst_49642);

(statearr_49679_50670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (10))){
var inst_49606 = (state_49649[(7)]);
var inst_49622 = (state_49649[(2)]);
var inst_49623 = (inst_49606 + (1));
var inst_49606__$1 = inst_49623;
var state_49649__$1 = (function (){var statearr_49680 = state_49649;
(statearr_49680[(7)] = inst_49606__$1);

(statearr_49680[(14)] = inst_49622);

return statearr_49680;
})();
var statearr_49681_50673 = state_49649__$1;
(statearr_49681_50673[(2)] = null);

(statearr_49681_50673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49650 === (8))){
var inst_49627 = (state_49649[(2)]);
var state_49649__$1 = state_49649;
var statearr_49682_50674 = state_49649__$1;
(statearr_49682_50674[(2)] = inst_49627);

(statearr_49682_50674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48204__auto__ = null;
var cljs$core$async$state_machine__48204__auto____0 = (function (){
var statearr_49683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49683[(0)] = cljs$core$async$state_machine__48204__auto__);

(statearr_49683[(1)] = (1));

return statearr_49683;
});
var cljs$core$async$state_machine__48204__auto____1 = (function (state_49649){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_49649);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e49684){var ex__48207__auto__ = e49684;
var statearr_49685_50675 = state_49649;
(statearr_49685_50675[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_49649[(4)]))){
var statearr_49686_50676 = state_49649;
(statearr_49686_50676[(1)] = cljs.core.first((state_49649[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50677 = state_49649;
state_49649 = G__50677;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$state_machine__48204__auto__ = function(state_49649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48204__auto____1.call(this,state_49649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48204__auto____0;
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48204__auto____1;
return cljs$core$async$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_49687 = f__48392__auto__();
(statearr_49687[(6)] = c__48391__auto___50655);

return statearr_49687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49690 = arguments.length;
switch (G__49690) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48391__auto___50679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_49725){
var state_val_49726 = (state_49725[(1)]);
if((state_val_49726 === (7))){
var inst_49702 = (state_49725[(7)]);
var inst_49704 = (state_49725[(8)]);
var inst_49702__$1 = (state_49725[(2)]);
var inst_49704__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49702__$1,(0),null);
var inst_49705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49702__$1,(1),null);
var inst_49706 = (inst_49704__$1 == null);
var state_49725__$1 = (function (){var statearr_49727 = state_49725;
(statearr_49727[(7)] = inst_49702__$1);

(statearr_49727[(9)] = inst_49705);

(statearr_49727[(8)] = inst_49704__$1);

return statearr_49727;
})();
if(cljs.core.truth_(inst_49706)){
var statearr_49728_50680 = state_49725__$1;
(statearr_49728_50680[(1)] = (8));

} else {
var statearr_49729_50681 = state_49725__$1;
(statearr_49729_50681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (1))){
var inst_49692 = cljs.core.vec(chs);
var inst_49693 = inst_49692;
var state_49725__$1 = (function (){var statearr_49730 = state_49725;
(statearr_49730[(10)] = inst_49693);

return statearr_49730;
})();
var statearr_49731_50682 = state_49725__$1;
(statearr_49731_50682[(2)] = null);

(statearr_49731_50682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (4))){
var inst_49693 = (state_49725[(10)]);
var state_49725__$1 = state_49725;
return cljs.core.async.ioc_alts_BANG_(state_49725__$1,(7),inst_49693);
} else {
if((state_val_49726 === (6))){
var inst_49721 = (state_49725[(2)]);
var state_49725__$1 = state_49725;
var statearr_49732_50683 = state_49725__$1;
(statearr_49732_50683[(2)] = inst_49721);

(statearr_49732_50683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (3))){
var inst_49723 = (state_49725[(2)]);
var state_49725__$1 = state_49725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49725__$1,inst_49723);
} else {
if((state_val_49726 === (2))){
var inst_49693 = (state_49725[(10)]);
var inst_49695 = cljs.core.count(inst_49693);
var inst_49696 = (inst_49695 > (0));
var state_49725__$1 = state_49725;
if(cljs.core.truth_(inst_49696)){
var statearr_49735_50684 = state_49725__$1;
(statearr_49735_50684[(1)] = (4));

} else {
var statearr_49736_50685 = state_49725__$1;
(statearr_49736_50685[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (11))){
var inst_49693 = (state_49725[(10)]);
var inst_49713 = (state_49725[(2)]);
var tmp49733 = inst_49693;
var inst_49693__$1 = tmp49733;
var state_49725__$1 = (function (){var statearr_49739 = state_49725;
(statearr_49739[(11)] = inst_49713);

(statearr_49739[(10)] = inst_49693__$1);

return statearr_49739;
})();
var statearr_49740_50686 = state_49725__$1;
(statearr_49740_50686[(2)] = null);

(statearr_49740_50686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (9))){
var inst_49704 = (state_49725[(8)]);
var state_49725__$1 = state_49725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49725__$1,(11),out,inst_49704);
} else {
if((state_val_49726 === (5))){
var inst_49718 = cljs.core.async.close_BANG_(out);
var state_49725__$1 = state_49725;
var statearr_49741_50687 = state_49725__$1;
(statearr_49741_50687[(2)] = inst_49718);

(statearr_49741_50687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (10))){
var inst_49716 = (state_49725[(2)]);
var state_49725__$1 = state_49725;
var statearr_49742_50688 = state_49725__$1;
(statearr_49742_50688[(2)] = inst_49716);

(statearr_49742_50688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (8))){
var inst_49702 = (state_49725[(7)]);
var inst_49693 = (state_49725[(10)]);
var inst_49705 = (state_49725[(9)]);
var inst_49704 = (state_49725[(8)]);
var inst_49708 = (function (){var cs = inst_49693;
var vec__49698 = inst_49702;
var v = inst_49704;
var c = inst_49705;
return (function (p1__49688_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49688_SHARP_);
});
})();
var inst_49709 = cljs.core.filterv(inst_49708,inst_49693);
var inst_49693__$1 = inst_49709;
var state_49725__$1 = (function (){var statearr_49743 = state_49725;
(statearr_49743[(10)] = inst_49693__$1);

return statearr_49743;
})();
var statearr_49744_50689 = state_49725__$1;
(statearr_49744_50689[(2)] = null);

(statearr_49744_50689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48204__auto__ = null;
var cljs$core$async$state_machine__48204__auto____0 = (function (){
var statearr_49745 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49745[(0)] = cljs$core$async$state_machine__48204__auto__);

(statearr_49745[(1)] = (1));

return statearr_49745;
});
var cljs$core$async$state_machine__48204__auto____1 = (function (state_49725){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_49725);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e49746){var ex__48207__auto__ = e49746;
var statearr_49747_50690 = state_49725;
(statearr_49747_50690[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_49725[(4)]))){
var statearr_49748_50691 = state_49725;
(statearr_49748_50691[(1)] = cljs.core.first((state_49725[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50692 = state_49725;
state_49725 = G__50692;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$state_machine__48204__auto__ = function(state_49725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48204__auto____1.call(this,state_49725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48204__auto____0;
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48204__auto____1;
return cljs$core$async$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_49750 = f__48392__auto__();
(statearr_49750[(6)] = c__48391__auto___50679);

return statearr_49750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49753 = arguments.length;
switch (G__49753) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48391__auto___50694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_49778){
var state_val_49779 = (state_49778[(1)]);
if((state_val_49779 === (7))){
var inst_49760 = (state_49778[(7)]);
var inst_49760__$1 = (state_49778[(2)]);
var inst_49761 = (inst_49760__$1 == null);
var inst_49762 = cljs.core.not(inst_49761);
var state_49778__$1 = (function (){var statearr_49780 = state_49778;
(statearr_49780[(7)] = inst_49760__$1);

return statearr_49780;
})();
if(inst_49762){
var statearr_49781_50695 = state_49778__$1;
(statearr_49781_50695[(1)] = (8));

} else {
var statearr_49782_50696 = state_49778__$1;
(statearr_49782_50696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (1))){
var inst_49755 = (0);
var state_49778__$1 = (function (){var statearr_49783 = state_49778;
(statearr_49783[(8)] = inst_49755);

return statearr_49783;
})();
var statearr_49784_50697 = state_49778__$1;
(statearr_49784_50697[(2)] = null);

(statearr_49784_50697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (4))){
var state_49778__$1 = state_49778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49778__$1,(7),ch);
} else {
if((state_val_49779 === (6))){
var inst_49773 = (state_49778[(2)]);
var state_49778__$1 = state_49778;
var statearr_49786_50698 = state_49778__$1;
(statearr_49786_50698[(2)] = inst_49773);

(statearr_49786_50698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (3))){
var inst_49775 = (state_49778[(2)]);
var inst_49776 = cljs.core.async.close_BANG_(out);
var state_49778__$1 = (function (){var statearr_49787 = state_49778;
(statearr_49787[(9)] = inst_49775);

return statearr_49787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49778__$1,inst_49776);
} else {
if((state_val_49779 === (2))){
var inst_49755 = (state_49778[(8)]);
var inst_49757 = (inst_49755 < n);
var state_49778__$1 = state_49778;
if(cljs.core.truth_(inst_49757)){
var statearr_49788_50699 = state_49778__$1;
(statearr_49788_50699[(1)] = (4));

} else {
var statearr_49789_50700 = state_49778__$1;
(statearr_49789_50700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (11))){
var inst_49755 = (state_49778[(8)]);
var inst_49765 = (state_49778[(2)]);
var inst_49766 = (inst_49755 + (1));
var inst_49755__$1 = inst_49766;
var state_49778__$1 = (function (){var statearr_49790 = state_49778;
(statearr_49790[(8)] = inst_49755__$1);

(statearr_49790[(10)] = inst_49765);

return statearr_49790;
})();
var statearr_49791_50701 = state_49778__$1;
(statearr_49791_50701[(2)] = null);

(statearr_49791_50701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (9))){
var state_49778__$1 = state_49778;
var statearr_49792_50702 = state_49778__$1;
(statearr_49792_50702[(2)] = null);

(statearr_49792_50702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (5))){
var state_49778__$1 = state_49778;
var statearr_49793_50703 = state_49778__$1;
(statearr_49793_50703[(2)] = null);

(statearr_49793_50703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (10))){
var inst_49770 = (state_49778[(2)]);
var state_49778__$1 = state_49778;
var statearr_49794_50704 = state_49778__$1;
(statearr_49794_50704[(2)] = inst_49770);

(statearr_49794_50704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49779 === (8))){
var inst_49760 = (state_49778[(7)]);
var state_49778__$1 = state_49778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49778__$1,(11),out,inst_49760);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48204__auto__ = null;
var cljs$core$async$state_machine__48204__auto____0 = (function (){
var statearr_49795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49795[(0)] = cljs$core$async$state_machine__48204__auto__);

(statearr_49795[(1)] = (1));

return statearr_49795;
});
var cljs$core$async$state_machine__48204__auto____1 = (function (state_49778){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_49778);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e49796){var ex__48207__auto__ = e49796;
var statearr_49797_50706 = state_49778;
(statearr_49797_50706[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_49778[(4)]))){
var statearr_49798_50707 = state_49778;
(statearr_49798_50707[(1)] = cljs.core.first((state_49778[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50708 = state_49778;
state_49778 = G__50708;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$state_machine__48204__auto__ = function(state_49778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48204__auto____1.call(this,state_49778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48204__auto____0;
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48204__auto____1;
return cljs$core$async$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_49799 = f__48392__auto__();
(statearr_49799[(6)] = c__48391__auto___50694);

return statearr_49799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49801 = (function (f,ch,meta49802){
this.f = f;
this.ch = ch;
this.meta49802 = meta49802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49803,meta49802__$1){
var self__ = this;
var _49803__$1 = this;
return (new cljs.core.async.t_cljs$core$async49801(self__.f,self__.ch,meta49802__$1));
}));

(cljs.core.async.t_cljs$core$async49801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49803){
var self__ = this;
var _49803__$1 = this;
return self__.meta49802;
}));

(cljs.core.async.t_cljs$core$async49801.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49801.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49801.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49804 = (function (f,ch,meta49802,_,fn1,meta49805){
this.f = f;
this.ch = ch;
this.meta49802 = meta49802;
this._ = _;
this.fn1 = fn1;
this.meta49805 = meta49805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49806,meta49805__$1){
var self__ = this;
var _49806__$1 = this;
return (new cljs.core.async.t_cljs$core$async49804(self__.f,self__.ch,self__.meta49802,self__._,self__.fn1,meta49805__$1));
}));

(cljs.core.async.t_cljs$core$async49804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49806){
var self__ = this;
var _49806__$1 = this;
return self__.meta49805;
}));

(cljs.core.async.t_cljs$core$async49804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49800_SHARP_){
var G__49807 = (((p1__49800_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49800_SHARP_) : self__.f.call(null,p1__49800_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49807) : f1.call(null,G__49807));
});
}));

(cljs.core.async.t_cljs$core$async49804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49802","meta49802",-1002260027,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49801","cljs.core.async/t_cljs$core$async49801",-1809375873,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49805","meta49805",-685502703,null)], null);
}));

(cljs.core.async.t_cljs$core$async49804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49804");

(cljs.core.async.t_cljs$core$async49804.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49804.
 */
cljs.core.async.__GT_t_cljs$core$async49804 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49804(f__$1,ch__$1,meta49802__$1,___$2,fn1__$1,meta49805){
return (new cljs.core.async.t_cljs$core$async49804(f__$1,ch__$1,meta49802__$1,___$2,fn1__$1,meta49805));
});

}

return (new cljs.core.async.t_cljs$core$async49804(self__.f,self__.ch,self__.meta49802,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49808 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49808) : self__.f.call(null,G__49808));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49801.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49802","meta49802",-1002260027,null)], null);
}));

(cljs.core.async.t_cljs$core$async49801.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49801");

(cljs.core.async.t_cljs$core$async49801.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49801");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49801.
 */
cljs.core.async.__GT_t_cljs$core$async49801 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49801(f__$1,ch__$1,meta49802){
return (new cljs.core.async.t_cljs$core$async49801(f__$1,ch__$1,meta49802));
});

}

return (new cljs.core.async.t_cljs$core$async49801(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49815 = (function (f,ch,meta49816){
this.f = f;
this.ch = ch;
this.meta49816 = meta49816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49817,meta49816__$1){
var self__ = this;
var _49817__$1 = this;
return (new cljs.core.async.t_cljs$core$async49815(self__.f,self__.ch,meta49816__$1));
}));

(cljs.core.async.t_cljs$core$async49815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49817){
var self__ = this;
var _49817__$1 = this;
return self__.meta49816;
}));

(cljs.core.async.t_cljs$core$async49815.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49815.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49815.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49816","meta49816",-1687062654,null)], null);
}));

(cljs.core.async.t_cljs$core$async49815.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49815");

(cljs.core.async.t_cljs$core$async49815.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49815");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49815.
 */
cljs.core.async.__GT_t_cljs$core$async49815 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49815(f__$1,ch__$1,meta49816){
return (new cljs.core.async.t_cljs$core$async49815(f__$1,ch__$1,meta49816));
});

}

return (new cljs.core.async.t_cljs$core$async49815(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49835 = (function (p,ch,meta49836){
this.p = p;
this.ch = ch;
this.meta49836 = meta49836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49837,meta49836__$1){
var self__ = this;
var _49837__$1 = this;
return (new cljs.core.async.t_cljs$core$async49835(self__.p,self__.ch,meta49836__$1));
}));

(cljs.core.async.t_cljs$core$async49835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49837){
var self__ = this;
var _49837__$1 = this;
return self__.meta49836;
}));

(cljs.core.async.t_cljs$core$async49835.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49835.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49835.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49835.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49835.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49835.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49835.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49836","meta49836",521187799,null)], null);
}));

(cljs.core.async.t_cljs$core$async49835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49835");

(cljs.core.async.t_cljs$core$async49835.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49835.
 */
cljs.core.async.__GT_t_cljs$core$async49835 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49835(p__$1,ch__$1,meta49836){
return (new cljs.core.async.t_cljs$core$async49835(p__$1,ch__$1,meta49836));
});

}

return (new cljs.core.async.t_cljs$core$async49835(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49854 = arguments.length;
switch (G__49854) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48391__auto___50714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_49876){
var state_val_49877 = (state_49876[(1)]);
if((state_val_49877 === (7))){
var inst_49872 = (state_49876[(2)]);
var state_49876__$1 = state_49876;
var statearr_49878_50719 = state_49876__$1;
(statearr_49878_50719[(2)] = inst_49872);

(statearr_49878_50719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49877 === (1))){
var state_49876__$1 = state_49876;
var statearr_49879_50723 = state_49876__$1;
(statearr_49879_50723[(2)] = null);

(statearr_49879_50723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49877 === (4))){
var inst_49858 = (state_49876[(7)]);
var inst_49858__$1 = (state_49876[(2)]);
var inst_49859 = (inst_49858__$1 == null);
var state_49876__$1 = (function (){var statearr_49884 = state_49876;
(statearr_49884[(7)] = inst_49858__$1);

return statearr_49884;
})();
if(cljs.core.truth_(inst_49859)){
var statearr_49885_50724 = state_49876__$1;
(statearr_49885_50724[(1)] = (5));

} else {
var statearr_49886_50725 = state_49876__$1;
(statearr_49886_50725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49877 === (6))){
var inst_49858 = (state_49876[(7)]);
var inst_49863 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49858) : p.call(null,inst_49858));
var state_49876__$1 = state_49876;
if(cljs.core.truth_(inst_49863)){
var statearr_49889_50729 = state_49876__$1;
(statearr_49889_50729[(1)] = (8));

} else {
var statearr_49890_50730 = state_49876__$1;
(statearr_49890_50730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49877 === (3))){
var inst_49874 = (state_49876[(2)]);
var state_49876__$1 = state_49876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49876__$1,inst_49874);
} else {
if((state_val_49877 === (2))){
var state_49876__$1 = state_49876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49876__$1,(4),ch);
} else {
if((state_val_49877 === (11))){
var inst_49866 = (state_49876[(2)]);
var state_49876__$1 = state_49876;
var statearr_49893_50734 = state_49876__$1;
(statearr_49893_50734[(2)] = inst_49866);

(statearr_49893_50734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49877 === (9))){
var state_49876__$1 = state_49876;
var statearr_49894_50735 = state_49876__$1;
(statearr_49894_50735[(2)] = null);

(statearr_49894_50735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49877 === (5))){
var inst_49861 = cljs.core.async.close_BANG_(out);
var state_49876__$1 = state_49876;
var statearr_49895_50736 = state_49876__$1;
(statearr_49895_50736[(2)] = inst_49861);

(statearr_49895_50736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49877 === (10))){
var inst_49869 = (state_49876[(2)]);
var state_49876__$1 = (function (){var statearr_49896 = state_49876;
(statearr_49896[(8)] = inst_49869);

return statearr_49896;
})();
var statearr_49897_50737 = state_49876__$1;
(statearr_49897_50737[(2)] = null);

(statearr_49897_50737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49877 === (8))){
var inst_49858 = (state_49876[(7)]);
var state_49876__$1 = state_49876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49876__$1,(11),out,inst_49858);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48204__auto__ = null;
var cljs$core$async$state_machine__48204__auto____0 = (function (){
var statearr_49898 = [null,null,null,null,null,null,null,null,null];
(statearr_49898[(0)] = cljs$core$async$state_machine__48204__auto__);

(statearr_49898[(1)] = (1));

return statearr_49898;
});
var cljs$core$async$state_machine__48204__auto____1 = (function (state_49876){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_49876);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e49899){var ex__48207__auto__ = e49899;
var statearr_49900_50741 = state_49876;
(statearr_49900_50741[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_49876[(4)]))){
var statearr_49901_50742 = state_49876;
(statearr_49901_50742[(1)] = cljs.core.first((state_49876[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50743 = state_49876;
state_49876 = G__50743;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$state_machine__48204__auto__ = function(state_49876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48204__auto____1.call(this,state_49876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48204__auto____0;
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48204__auto____1;
return cljs$core$async$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_49903 = f__48392__auto__();
(statearr_49903[(6)] = c__48391__auto___50714);

return statearr_49903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49905 = arguments.length;
switch (G__49905) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48391__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_49976){
var state_val_49977 = (state_49976[(1)]);
if((state_val_49977 === (7))){
var inst_49972 = (state_49976[(2)]);
var state_49976__$1 = state_49976;
var statearr_49978_50745 = state_49976__$1;
(statearr_49978_50745[(2)] = inst_49972);

(statearr_49978_50745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (20))){
var inst_49942 = (state_49976[(7)]);
var inst_49953 = (state_49976[(2)]);
var inst_49954 = cljs.core.next(inst_49942);
var inst_49928 = inst_49954;
var inst_49929 = null;
var inst_49930 = (0);
var inst_49931 = (0);
var state_49976__$1 = (function (){var statearr_49979 = state_49976;
(statearr_49979[(8)] = inst_49953);

(statearr_49979[(9)] = inst_49930);

(statearr_49979[(10)] = inst_49929);

(statearr_49979[(11)] = inst_49928);

(statearr_49979[(12)] = inst_49931);

return statearr_49979;
})();
var statearr_49980_50746 = state_49976__$1;
(statearr_49980_50746[(2)] = null);

(statearr_49980_50746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (1))){
var state_49976__$1 = state_49976;
var statearr_49981_50747 = state_49976__$1;
(statearr_49981_50747[(2)] = null);

(statearr_49981_50747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (4))){
var inst_49914 = (state_49976[(13)]);
var inst_49914__$1 = (state_49976[(2)]);
var inst_49917 = (inst_49914__$1 == null);
var state_49976__$1 = (function (){var statearr_49982 = state_49976;
(statearr_49982[(13)] = inst_49914__$1);

return statearr_49982;
})();
if(cljs.core.truth_(inst_49917)){
var statearr_49983_50748 = state_49976__$1;
(statearr_49983_50748[(1)] = (5));

} else {
var statearr_49984_50749 = state_49976__$1;
(statearr_49984_50749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (15))){
var state_49976__$1 = state_49976;
var statearr_49988_50750 = state_49976__$1;
(statearr_49988_50750[(2)] = null);

(statearr_49988_50750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (21))){
var state_49976__$1 = state_49976;
var statearr_49989_50751 = state_49976__$1;
(statearr_49989_50751[(2)] = null);

(statearr_49989_50751[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (13))){
var inst_49930 = (state_49976[(9)]);
var inst_49929 = (state_49976[(10)]);
var inst_49928 = (state_49976[(11)]);
var inst_49931 = (state_49976[(12)]);
var inst_49938 = (state_49976[(2)]);
var inst_49939 = (inst_49931 + (1));
var tmp49985 = inst_49930;
var tmp49986 = inst_49929;
var tmp49987 = inst_49928;
var inst_49928__$1 = tmp49987;
var inst_49929__$1 = tmp49986;
var inst_49930__$1 = tmp49985;
var inst_49931__$1 = inst_49939;
var state_49976__$1 = (function (){var statearr_49990 = state_49976;
(statearr_49990[(14)] = inst_49938);

(statearr_49990[(9)] = inst_49930__$1);

(statearr_49990[(10)] = inst_49929__$1);

(statearr_49990[(11)] = inst_49928__$1);

(statearr_49990[(12)] = inst_49931__$1);

return statearr_49990;
})();
var statearr_49991_50752 = state_49976__$1;
(statearr_49991_50752[(2)] = null);

(statearr_49991_50752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (22))){
var state_49976__$1 = state_49976;
var statearr_49992_50753 = state_49976__$1;
(statearr_49992_50753[(2)] = null);

(statearr_49992_50753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (6))){
var inst_49914 = (state_49976[(13)]);
var inst_49926 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49914) : f.call(null,inst_49914));
var inst_49927 = cljs.core.seq(inst_49926);
var inst_49928 = inst_49927;
var inst_49929 = null;
var inst_49930 = (0);
var inst_49931 = (0);
var state_49976__$1 = (function (){var statearr_49993 = state_49976;
(statearr_49993[(9)] = inst_49930);

(statearr_49993[(10)] = inst_49929);

(statearr_49993[(11)] = inst_49928);

(statearr_49993[(12)] = inst_49931);

return statearr_49993;
})();
var statearr_49994_50758 = state_49976__$1;
(statearr_49994_50758[(2)] = null);

(statearr_49994_50758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (17))){
var inst_49942 = (state_49976[(7)]);
var inst_49946 = cljs.core.chunk_first(inst_49942);
var inst_49947 = cljs.core.chunk_rest(inst_49942);
var inst_49948 = cljs.core.count(inst_49946);
var inst_49928 = inst_49947;
var inst_49929 = inst_49946;
var inst_49930 = inst_49948;
var inst_49931 = (0);
var state_49976__$1 = (function (){var statearr_49995 = state_49976;
(statearr_49995[(9)] = inst_49930);

(statearr_49995[(10)] = inst_49929);

(statearr_49995[(11)] = inst_49928);

(statearr_49995[(12)] = inst_49931);

return statearr_49995;
})();
var statearr_49996_50759 = state_49976__$1;
(statearr_49996_50759[(2)] = null);

(statearr_49996_50759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (3))){
var inst_49974 = (state_49976[(2)]);
var state_49976__$1 = state_49976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49976__$1,inst_49974);
} else {
if((state_val_49977 === (12))){
var inst_49962 = (state_49976[(2)]);
var state_49976__$1 = state_49976;
var statearr_49997_50760 = state_49976__$1;
(statearr_49997_50760[(2)] = inst_49962);

(statearr_49997_50760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (2))){
var state_49976__$1 = state_49976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49976__$1,(4),in$);
} else {
if((state_val_49977 === (23))){
var inst_49970 = (state_49976[(2)]);
var state_49976__$1 = state_49976;
var statearr_50002_50761 = state_49976__$1;
(statearr_50002_50761[(2)] = inst_49970);

(statearr_50002_50761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (19))){
var inst_49957 = (state_49976[(2)]);
var state_49976__$1 = state_49976;
var statearr_50003_50762 = state_49976__$1;
(statearr_50003_50762[(2)] = inst_49957);

(statearr_50003_50762[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (11))){
var inst_49942 = (state_49976[(7)]);
var inst_49928 = (state_49976[(11)]);
var inst_49942__$1 = cljs.core.seq(inst_49928);
var state_49976__$1 = (function (){var statearr_50005 = state_49976;
(statearr_50005[(7)] = inst_49942__$1);

return statearr_50005;
})();
if(inst_49942__$1){
var statearr_50006_50763 = state_49976__$1;
(statearr_50006_50763[(1)] = (14));

} else {
var statearr_50007_50764 = state_49976__$1;
(statearr_50007_50764[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (9))){
var inst_49964 = (state_49976[(2)]);
var inst_49965 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49976__$1 = (function (){var statearr_50009 = state_49976;
(statearr_50009[(15)] = inst_49964);

return statearr_50009;
})();
if(cljs.core.truth_(inst_49965)){
var statearr_50010_50767 = state_49976__$1;
(statearr_50010_50767[(1)] = (21));

} else {
var statearr_50011_50768 = state_49976__$1;
(statearr_50011_50768[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (5))){
var inst_49919 = cljs.core.async.close_BANG_(out);
var state_49976__$1 = state_49976;
var statearr_50013_50769 = state_49976__$1;
(statearr_50013_50769[(2)] = inst_49919);

(statearr_50013_50769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (14))){
var inst_49942 = (state_49976[(7)]);
var inst_49944 = cljs.core.chunked_seq_QMARK_(inst_49942);
var state_49976__$1 = state_49976;
if(inst_49944){
var statearr_50014_50770 = state_49976__$1;
(statearr_50014_50770[(1)] = (17));

} else {
var statearr_50015_50771 = state_49976__$1;
(statearr_50015_50771[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (16))){
var inst_49960 = (state_49976[(2)]);
var state_49976__$1 = state_49976;
var statearr_50016_50772 = state_49976__$1;
(statearr_50016_50772[(2)] = inst_49960);

(statearr_50016_50772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (10))){
var inst_49929 = (state_49976[(10)]);
var inst_49931 = (state_49976[(12)]);
var inst_49936 = cljs.core._nth(inst_49929,inst_49931);
var state_49976__$1 = state_49976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49976__$1,(13),out,inst_49936);
} else {
if((state_val_49977 === (18))){
var inst_49942 = (state_49976[(7)]);
var inst_49951 = cljs.core.first(inst_49942);
var state_49976__$1 = state_49976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49976__$1,(20),out,inst_49951);
} else {
if((state_val_49977 === (8))){
var inst_49930 = (state_49976[(9)]);
var inst_49931 = (state_49976[(12)]);
var inst_49933 = (inst_49931 < inst_49930);
var inst_49934 = inst_49933;
var state_49976__$1 = state_49976;
if(cljs.core.truth_(inst_49934)){
var statearr_50017_50773 = state_49976__$1;
(statearr_50017_50773[(1)] = (10));

} else {
var statearr_50018_50774 = state_49976__$1;
(statearr_50018_50774[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48204__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48204__auto____0 = (function (){
var statearr_50019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50019[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48204__auto__);

(statearr_50019[(1)] = (1));

return statearr_50019;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48204__auto____1 = (function (state_49976){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_49976);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e50020){var ex__48207__auto__ = e50020;
var statearr_50021_50775 = state_49976;
(statearr_50021_50775[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_49976[(4)]))){
var statearr_50022_50776 = state_49976;
(statearr_50022_50776[(1)] = cljs.core.first((state_49976[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50777 = state_49976;
state_49976 = G__50777;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48204__auto__ = function(state_49976){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48204__auto____1.call(this,state_49976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48204__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48204__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_50024 = f__48392__auto__();
(statearr_50024[(6)] = c__48391__auto__);

return statearr_50024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));

return c__48391__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50029 = arguments.length;
switch (G__50029) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50031 = arguments.length;
switch (G__50031) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50033 = arguments.length;
switch (G__50033) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48391__auto___50781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_50057){
var state_val_50058 = (state_50057[(1)]);
if((state_val_50058 === (7))){
var inst_50052 = (state_50057[(2)]);
var state_50057__$1 = state_50057;
var statearr_50059_50782 = state_50057__$1;
(statearr_50059_50782[(2)] = inst_50052);

(statearr_50059_50782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50058 === (1))){
var inst_50034 = null;
var state_50057__$1 = (function (){var statearr_50060 = state_50057;
(statearr_50060[(7)] = inst_50034);

return statearr_50060;
})();
var statearr_50061_50783 = state_50057__$1;
(statearr_50061_50783[(2)] = null);

(statearr_50061_50783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50058 === (4))){
var inst_50037 = (state_50057[(8)]);
var inst_50037__$1 = (state_50057[(2)]);
var inst_50038 = (inst_50037__$1 == null);
var inst_50039 = cljs.core.not(inst_50038);
var state_50057__$1 = (function (){var statearr_50062 = state_50057;
(statearr_50062[(8)] = inst_50037__$1);

return statearr_50062;
})();
if(inst_50039){
var statearr_50063_50784 = state_50057__$1;
(statearr_50063_50784[(1)] = (5));

} else {
var statearr_50064_50785 = state_50057__$1;
(statearr_50064_50785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50058 === (6))){
var state_50057__$1 = state_50057;
var statearr_50065_50786 = state_50057__$1;
(statearr_50065_50786[(2)] = null);

(statearr_50065_50786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50058 === (3))){
var inst_50054 = (state_50057[(2)]);
var inst_50055 = cljs.core.async.close_BANG_(out);
var state_50057__$1 = (function (){var statearr_50066 = state_50057;
(statearr_50066[(9)] = inst_50054);

return statearr_50066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50057__$1,inst_50055);
} else {
if((state_val_50058 === (2))){
var state_50057__$1 = state_50057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50057__$1,(4),ch);
} else {
if((state_val_50058 === (11))){
var inst_50037 = (state_50057[(8)]);
var inst_50046 = (state_50057[(2)]);
var inst_50034 = inst_50037;
var state_50057__$1 = (function (){var statearr_50067 = state_50057;
(statearr_50067[(10)] = inst_50046);

(statearr_50067[(7)] = inst_50034);

return statearr_50067;
})();
var statearr_50068_50787 = state_50057__$1;
(statearr_50068_50787[(2)] = null);

(statearr_50068_50787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50058 === (9))){
var inst_50037 = (state_50057[(8)]);
var state_50057__$1 = state_50057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50057__$1,(11),out,inst_50037);
} else {
if((state_val_50058 === (5))){
var inst_50037 = (state_50057[(8)]);
var inst_50034 = (state_50057[(7)]);
var inst_50041 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50037,inst_50034);
var state_50057__$1 = state_50057;
if(inst_50041){
var statearr_50070_50788 = state_50057__$1;
(statearr_50070_50788[(1)] = (8));

} else {
var statearr_50071_50789 = state_50057__$1;
(statearr_50071_50789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50058 === (10))){
var inst_50049 = (state_50057[(2)]);
var state_50057__$1 = state_50057;
var statearr_50072_50790 = state_50057__$1;
(statearr_50072_50790[(2)] = inst_50049);

(statearr_50072_50790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50058 === (8))){
var inst_50034 = (state_50057[(7)]);
var tmp50069 = inst_50034;
var inst_50034__$1 = tmp50069;
var state_50057__$1 = (function (){var statearr_50073 = state_50057;
(statearr_50073[(7)] = inst_50034__$1);

return statearr_50073;
})();
var statearr_50074_50791 = state_50057__$1;
(statearr_50074_50791[(2)] = null);

(statearr_50074_50791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48204__auto__ = null;
var cljs$core$async$state_machine__48204__auto____0 = (function (){
var statearr_50075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50075[(0)] = cljs$core$async$state_machine__48204__auto__);

(statearr_50075[(1)] = (1));

return statearr_50075;
});
var cljs$core$async$state_machine__48204__auto____1 = (function (state_50057){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_50057);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e50076){var ex__48207__auto__ = e50076;
var statearr_50077_50792 = state_50057;
(statearr_50077_50792[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_50057[(4)]))){
var statearr_50078_50793 = state_50057;
(statearr_50078_50793[(1)] = cljs.core.first((state_50057[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50794 = state_50057;
state_50057 = G__50794;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$state_machine__48204__auto__ = function(state_50057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48204__auto____1.call(this,state_50057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48204__auto____0;
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48204__auto____1;
return cljs$core$async$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_50079 = f__48392__auto__();
(statearr_50079[(6)] = c__48391__auto___50781);

return statearr_50079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50081 = arguments.length;
switch (G__50081) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48391__auto___50796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_50119){
var state_val_50120 = (state_50119[(1)]);
if((state_val_50120 === (7))){
var inst_50115 = (state_50119[(2)]);
var state_50119__$1 = state_50119;
var statearr_50121_50797 = state_50119__$1;
(statearr_50121_50797[(2)] = inst_50115);

(statearr_50121_50797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50120 === (1))){
var inst_50082 = (new Array(n));
var inst_50083 = inst_50082;
var inst_50084 = (0);
var state_50119__$1 = (function (){var statearr_50122 = state_50119;
(statearr_50122[(7)] = inst_50084);

(statearr_50122[(8)] = inst_50083);

return statearr_50122;
})();
var statearr_50123_50798 = state_50119__$1;
(statearr_50123_50798[(2)] = null);

(statearr_50123_50798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50120 === (4))){
var inst_50087 = (state_50119[(9)]);
var inst_50087__$1 = (state_50119[(2)]);
var inst_50088 = (inst_50087__$1 == null);
var inst_50089 = cljs.core.not(inst_50088);
var state_50119__$1 = (function (){var statearr_50124 = state_50119;
(statearr_50124[(9)] = inst_50087__$1);

return statearr_50124;
})();
if(inst_50089){
var statearr_50125_50799 = state_50119__$1;
(statearr_50125_50799[(1)] = (5));

} else {
var statearr_50126_50800 = state_50119__$1;
(statearr_50126_50800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50120 === (15))){
var inst_50109 = (state_50119[(2)]);
var state_50119__$1 = state_50119;
var statearr_50127_50801 = state_50119__$1;
(statearr_50127_50801[(2)] = inst_50109);

(statearr_50127_50801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50120 === (13))){
var state_50119__$1 = state_50119;
var statearr_50128_50802 = state_50119__$1;
(statearr_50128_50802[(2)] = null);

(statearr_50128_50802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50120 === (6))){
var inst_50084 = (state_50119[(7)]);
var inst_50105 = (inst_50084 > (0));
var state_50119__$1 = state_50119;
if(cljs.core.truth_(inst_50105)){
var statearr_50129_50803 = state_50119__$1;
(statearr_50129_50803[(1)] = (12));

} else {
var statearr_50130_50804 = state_50119__$1;
(statearr_50130_50804[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50120 === (3))){
var inst_50117 = (state_50119[(2)]);
var state_50119__$1 = state_50119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50119__$1,inst_50117);
} else {
if((state_val_50120 === (12))){
var inst_50083 = (state_50119[(8)]);
var inst_50107 = cljs.core.vec(inst_50083);
var state_50119__$1 = state_50119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50119__$1,(15),out,inst_50107);
} else {
if((state_val_50120 === (2))){
var state_50119__$1 = state_50119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50119__$1,(4),ch);
} else {
if((state_val_50120 === (11))){
var inst_50099 = (state_50119[(2)]);
var inst_50100 = (new Array(n));
var inst_50083 = inst_50100;
var inst_50084 = (0);
var state_50119__$1 = (function (){var statearr_50131 = state_50119;
(statearr_50131[(7)] = inst_50084);

(statearr_50131[(8)] = inst_50083);

(statearr_50131[(10)] = inst_50099);

return statearr_50131;
})();
var statearr_50132_50805 = state_50119__$1;
(statearr_50132_50805[(2)] = null);

(statearr_50132_50805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50120 === (9))){
var inst_50083 = (state_50119[(8)]);
var inst_50097 = cljs.core.vec(inst_50083);
var state_50119__$1 = state_50119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50119__$1,(11),out,inst_50097);
} else {
if((state_val_50120 === (5))){
var inst_50084 = (state_50119[(7)]);
var inst_50087 = (state_50119[(9)]);
var inst_50092 = (state_50119[(11)]);
var inst_50083 = (state_50119[(8)]);
var inst_50091 = (inst_50083[inst_50084] = inst_50087);
var inst_50092__$1 = (inst_50084 + (1));
var inst_50093 = (inst_50092__$1 < n);
var state_50119__$1 = (function (){var statearr_50133 = state_50119;
(statearr_50133[(12)] = inst_50091);

(statearr_50133[(11)] = inst_50092__$1);

return statearr_50133;
})();
if(cljs.core.truth_(inst_50093)){
var statearr_50134_50806 = state_50119__$1;
(statearr_50134_50806[(1)] = (8));

} else {
var statearr_50135_50807 = state_50119__$1;
(statearr_50135_50807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50120 === (14))){
var inst_50112 = (state_50119[(2)]);
var inst_50113 = cljs.core.async.close_BANG_(out);
var state_50119__$1 = (function (){var statearr_50137 = state_50119;
(statearr_50137[(13)] = inst_50112);

return statearr_50137;
})();
var statearr_50138_50812 = state_50119__$1;
(statearr_50138_50812[(2)] = inst_50113);

(statearr_50138_50812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50120 === (10))){
var inst_50103 = (state_50119[(2)]);
var state_50119__$1 = state_50119;
var statearr_50139_50813 = state_50119__$1;
(statearr_50139_50813[(2)] = inst_50103);

(statearr_50139_50813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50120 === (8))){
var inst_50092 = (state_50119[(11)]);
var inst_50083 = (state_50119[(8)]);
var tmp50136 = inst_50083;
var inst_50083__$1 = tmp50136;
var inst_50084 = inst_50092;
var state_50119__$1 = (function (){var statearr_50140 = state_50119;
(statearr_50140[(7)] = inst_50084);

(statearr_50140[(8)] = inst_50083__$1);

return statearr_50140;
})();
var statearr_50141_50814 = state_50119__$1;
(statearr_50141_50814[(2)] = null);

(statearr_50141_50814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48204__auto__ = null;
var cljs$core$async$state_machine__48204__auto____0 = (function (){
var statearr_50142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50142[(0)] = cljs$core$async$state_machine__48204__auto__);

(statearr_50142[(1)] = (1));

return statearr_50142;
});
var cljs$core$async$state_machine__48204__auto____1 = (function (state_50119){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_50119);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e50143){var ex__48207__auto__ = e50143;
var statearr_50144_50815 = state_50119;
(statearr_50144_50815[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_50119[(4)]))){
var statearr_50145_50816 = state_50119;
(statearr_50145_50816[(1)] = cljs.core.first((state_50119[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50817 = state_50119;
state_50119 = G__50817;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$state_machine__48204__auto__ = function(state_50119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48204__auto____1.call(this,state_50119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48204__auto____0;
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48204__auto____1;
return cljs$core$async$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_50146 = f__48392__auto__();
(statearr_50146[(6)] = c__48391__auto___50796);

return statearr_50146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50148 = arguments.length;
switch (G__50148) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48391__auto___50819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_50193){
var state_val_50194 = (state_50193[(1)]);
if((state_val_50194 === (7))){
var inst_50189 = (state_50193[(2)]);
var state_50193__$1 = state_50193;
var statearr_50195_50820 = state_50193__$1;
(statearr_50195_50820[(2)] = inst_50189);

(statearr_50195_50820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (1))){
var inst_50149 = [];
var inst_50150 = inst_50149;
var inst_50151 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50193__$1 = (function (){var statearr_50196 = state_50193;
(statearr_50196[(7)] = inst_50151);

(statearr_50196[(8)] = inst_50150);

return statearr_50196;
})();
var statearr_50197_50821 = state_50193__$1;
(statearr_50197_50821[(2)] = null);

(statearr_50197_50821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (4))){
var inst_50154 = (state_50193[(9)]);
var inst_50154__$1 = (state_50193[(2)]);
var inst_50155 = (inst_50154__$1 == null);
var inst_50156 = cljs.core.not(inst_50155);
var state_50193__$1 = (function (){var statearr_50198 = state_50193;
(statearr_50198[(9)] = inst_50154__$1);

return statearr_50198;
})();
if(inst_50156){
var statearr_50199_50822 = state_50193__$1;
(statearr_50199_50822[(1)] = (5));

} else {
var statearr_50200_50823 = state_50193__$1;
(statearr_50200_50823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (15))){
var inst_50150 = (state_50193[(8)]);
var inst_50181 = cljs.core.vec(inst_50150);
var state_50193__$1 = state_50193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50193__$1,(18),out,inst_50181);
} else {
if((state_val_50194 === (13))){
var inst_50176 = (state_50193[(2)]);
var state_50193__$1 = state_50193;
var statearr_50201_50824 = state_50193__$1;
(statearr_50201_50824[(2)] = inst_50176);

(statearr_50201_50824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (6))){
var inst_50150 = (state_50193[(8)]);
var inst_50178 = inst_50150.length;
var inst_50179 = (inst_50178 > (0));
var state_50193__$1 = state_50193;
if(cljs.core.truth_(inst_50179)){
var statearr_50202_50825 = state_50193__$1;
(statearr_50202_50825[(1)] = (15));

} else {
var statearr_50203_50826 = state_50193__$1;
(statearr_50203_50826[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (17))){
var inst_50186 = (state_50193[(2)]);
var inst_50187 = cljs.core.async.close_BANG_(out);
var state_50193__$1 = (function (){var statearr_50204 = state_50193;
(statearr_50204[(10)] = inst_50186);

return statearr_50204;
})();
var statearr_50205_50827 = state_50193__$1;
(statearr_50205_50827[(2)] = inst_50187);

(statearr_50205_50827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (3))){
var inst_50191 = (state_50193[(2)]);
var state_50193__$1 = state_50193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50193__$1,inst_50191);
} else {
if((state_val_50194 === (12))){
var inst_50150 = (state_50193[(8)]);
var inst_50169 = cljs.core.vec(inst_50150);
var state_50193__$1 = state_50193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50193__$1,(14),out,inst_50169);
} else {
if((state_val_50194 === (2))){
var state_50193__$1 = state_50193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50193__$1,(4),ch);
} else {
if((state_val_50194 === (11))){
var inst_50154 = (state_50193[(9)]);
var inst_50150 = (state_50193[(8)]);
var inst_50158 = (state_50193[(11)]);
var inst_50166 = inst_50150.push(inst_50154);
var tmp50206 = inst_50150;
var inst_50150__$1 = tmp50206;
var inst_50151 = inst_50158;
var state_50193__$1 = (function (){var statearr_50207 = state_50193;
(statearr_50207[(12)] = inst_50166);

(statearr_50207[(7)] = inst_50151);

(statearr_50207[(8)] = inst_50150__$1);

return statearr_50207;
})();
var statearr_50208_50828 = state_50193__$1;
(statearr_50208_50828[(2)] = null);

(statearr_50208_50828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (9))){
var inst_50151 = (state_50193[(7)]);
var inst_50162 = cljs.core.keyword_identical_QMARK_(inst_50151,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_50193__$1 = state_50193;
var statearr_50209_50829 = state_50193__$1;
(statearr_50209_50829[(2)] = inst_50162);

(statearr_50209_50829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (5))){
var inst_50154 = (state_50193[(9)]);
var inst_50159 = (state_50193[(13)]);
var inst_50151 = (state_50193[(7)]);
var inst_50158 = (state_50193[(11)]);
var inst_50158__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50154) : f.call(null,inst_50154));
var inst_50159__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50158__$1,inst_50151);
var state_50193__$1 = (function (){var statearr_50210 = state_50193;
(statearr_50210[(13)] = inst_50159__$1);

(statearr_50210[(11)] = inst_50158__$1);

return statearr_50210;
})();
if(inst_50159__$1){
var statearr_50211_50830 = state_50193__$1;
(statearr_50211_50830[(1)] = (8));

} else {
var statearr_50212_50831 = state_50193__$1;
(statearr_50212_50831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (14))){
var inst_50154 = (state_50193[(9)]);
var inst_50158 = (state_50193[(11)]);
var inst_50171 = (state_50193[(2)]);
var inst_50172 = [];
var inst_50173 = inst_50172.push(inst_50154);
var inst_50150 = inst_50172;
var inst_50151 = inst_50158;
var state_50193__$1 = (function (){var statearr_50213 = state_50193;
(statearr_50213[(14)] = inst_50173);

(statearr_50213[(15)] = inst_50171);

(statearr_50213[(7)] = inst_50151);

(statearr_50213[(8)] = inst_50150);

return statearr_50213;
})();
var statearr_50214_50832 = state_50193__$1;
(statearr_50214_50832[(2)] = null);

(statearr_50214_50832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (16))){
var state_50193__$1 = state_50193;
var statearr_50215_50833 = state_50193__$1;
(statearr_50215_50833[(2)] = null);

(statearr_50215_50833[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (10))){
var inst_50164 = (state_50193[(2)]);
var state_50193__$1 = state_50193;
if(cljs.core.truth_(inst_50164)){
var statearr_50216_50834 = state_50193__$1;
(statearr_50216_50834[(1)] = (11));

} else {
var statearr_50217_50835 = state_50193__$1;
(statearr_50217_50835[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (18))){
var inst_50183 = (state_50193[(2)]);
var state_50193__$1 = state_50193;
var statearr_50218_50836 = state_50193__$1;
(statearr_50218_50836[(2)] = inst_50183);

(statearr_50218_50836[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50194 === (8))){
var inst_50159 = (state_50193[(13)]);
var state_50193__$1 = state_50193;
var statearr_50219_50837 = state_50193__$1;
(statearr_50219_50837[(2)] = inst_50159);

(statearr_50219_50837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48204__auto__ = null;
var cljs$core$async$state_machine__48204__auto____0 = (function (){
var statearr_50220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50220[(0)] = cljs$core$async$state_machine__48204__auto__);

(statearr_50220[(1)] = (1));

return statearr_50220;
});
var cljs$core$async$state_machine__48204__auto____1 = (function (state_50193){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_50193);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e50221){var ex__48207__auto__ = e50221;
var statearr_50222_50843 = state_50193;
(statearr_50222_50843[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_50193[(4)]))){
var statearr_50223_50844 = state_50193;
(statearr_50223_50844[(1)] = cljs.core.first((state_50193[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50845 = state_50193;
state_50193 = G__50845;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
cljs$core$async$state_machine__48204__auto__ = function(state_50193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48204__auto____1.call(this,state_50193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48204__auto____0;
cljs$core$async$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48204__auto____1;
return cljs$core$async$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_50224 = f__48392__auto__();
(statearr_50224[(6)] = c__48391__auto___50819);

return statearr_50224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

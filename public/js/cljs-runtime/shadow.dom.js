goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50970 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_50970(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50971 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_50971(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50253 = coll;
var G__50254 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50253,G__50254) : shadow.dom.lazy_native_coll_seq.call(null,G__50253,G__50254));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__50275 = arguments.length;
switch (G__50275) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__50282 = arguments.length;
switch (G__50282) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__50287 = arguments.length;
switch (G__50287) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__50297 = arguments.length;
switch (G__50297) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__50309 = arguments.length;
switch (G__50309) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__50336 = arguments.length;
switch (G__50336) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e50347){if((e50347 instanceof Object)){
var e = e50347;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50347;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__50356 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50357 = null;
var count__50358 = (0);
var i__50359 = (0);
while(true){
if((i__50359 < count__50358)){
var el = chunk__50357.cljs$core$IIndexed$_nth$arity$2(null,i__50359);
var handler_51003__$1 = ((function (seq__50356,chunk__50357,count__50358,i__50359,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50356,chunk__50357,count__50358,i__50359,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51003__$1);


var G__51004 = seq__50356;
var G__51005 = chunk__50357;
var G__51006 = count__50358;
var G__51007 = (i__50359 + (1));
seq__50356 = G__51004;
chunk__50357 = G__51005;
count__50358 = G__51006;
i__50359 = G__51007;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50356);
if(temp__5753__auto__){
var seq__50356__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50356__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50356__$1);
var G__51008 = cljs.core.chunk_rest(seq__50356__$1);
var G__51009 = c__4649__auto__;
var G__51010 = cljs.core.count(c__4649__auto__);
var G__51011 = (0);
seq__50356 = G__51008;
chunk__50357 = G__51009;
count__50358 = G__51010;
i__50359 = G__51011;
continue;
} else {
var el = cljs.core.first(seq__50356__$1);
var handler_51012__$1 = ((function (seq__50356,chunk__50357,count__50358,i__50359,el,seq__50356__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50356,chunk__50357,count__50358,i__50359,el,seq__50356__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51012__$1);


var G__51013 = cljs.core.next(seq__50356__$1);
var G__51014 = null;
var G__51015 = (0);
var G__51016 = (0);
seq__50356 = G__51013;
chunk__50357 = G__51014;
count__50358 = G__51015;
i__50359 = G__51016;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__50371 = arguments.length;
switch (G__50371) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__50382 = cljs.core.seq(events);
var chunk__50383 = null;
var count__50384 = (0);
var i__50385 = (0);
while(true){
if((i__50385 < count__50384)){
var vec__50398 = chunk__50383.cljs$core$IIndexed$_nth$arity$2(null,i__50385);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50398,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50398,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51022 = seq__50382;
var G__51023 = chunk__50383;
var G__51024 = count__50384;
var G__51025 = (i__50385 + (1));
seq__50382 = G__51022;
chunk__50383 = G__51023;
count__50384 = G__51024;
i__50385 = G__51025;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50382);
if(temp__5753__auto__){
var seq__50382__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50382__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50382__$1);
var G__51026 = cljs.core.chunk_rest(seq__50382__$1);
var G__51027 = c__4649__auto__;
var G__51028 = cljs.core.count(c__4649__auto__);
var G__51029 = (0);
seq__50382 = G__51026;
chunk__50383 = G__51027;
count__50384 = G__51028;
i__50385 = G__51029;
continue;
} else {
var vec__50404 = cljs.core.first(seq__50382__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50404,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50404,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51030 = cljs.core.next(seq__50382__$1);
var G__51031 = null;
var G__51032 = (0);
var G__51033 = (0);
seq__50382 = G__51030;
chunk__50383 = G__51031;
count__50384 = G__51032;
i__50385 = G__51033;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__50410 = cljs.core.seq(styles);
var chunk__50411 = null;
var count__50412 = (0);
var i__50413 = (0);
while(true){
if((i__50413 < count__50412)){
var vec__50424 = chunk__50411.cljs$core$IIndexed$_nth$arity$2(null,i__50413);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50424,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51034 = seq__50410;
var G__51035 = chunk__50411;
var G__51036 = count__50412;
var G__51037 = (i__50413 + (1));
seq__50410 = G__51034;
chunk__50411 = G__51035;
count__50412 = G__51036;
i__50413 = G__51037;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50410);
if(temp__5753__auto__){
var seq__50410__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50410__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50410__$1);
var G__51038 = cljs.core.chunk_rest(seq__50410__$1);
var G__51039 = c__4649__auto__;
var G__51040 = cljs.core.count(c__4649__auto__);
var G__51041 = (0);
seq__50410 = G__51038;
chunk__50411 = G__51039;
count__50412 = G__51040;
i__50413 = G__51041;
continue;
} else {
var vec__50429 = cljs.core.first(seq__50410__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50429,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51042 = cljs.core.next(seq__50410__$1);
var G__51043 = null;
var G__51044 = (0);
var G__51045 = (0);
seq__50410 = G__51042;
chunk__50411 = G__51043;
count__50412 = G__51044;
i__50413 = G__51045;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__50438_51046 = key;
var G__50438_51047__$1 = (((G__50438_51046 instanceof cljs.core.Keyword))?G__50438_51046.fqn:null);
switch (G__50438_51047__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_51061 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_51061,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_51061,"aria-");
}
})())){
el.setAttribute(ks_51061,value);
} else {
(el[ks_51061] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50454){
var map__50455 = p__50454;
var map__50455__$1 = cljs.core.__destructure_map(map__50455);
var props = map__50455__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50455__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50456 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50456,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50456,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50456,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50459 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50459,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50459;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50462 = arguments.length;
switch (G__50462) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50471){
var vec__50474 = p__50471;
var seq__50475 = cljs.core.seq(vec__50474);
var first__50476 = cljs.core.first(seq__50475);
var seq__50475__$1 = cljs.core.next(seq__50475);
var nn = first__50476;
var first__50476__$1 = cljs.core.first(seq__50475__$1);
var seq__50475__$2 = cljs.core.next(seq__50475__$1);
var np = first__50476__$1;
var nc = seq__50475__$2;
var node = vec__50474;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50478 = nn;
var G__50479 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50478,G__50479) : create_fn.call(null,G__50478,G__50479));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50482 = nn;
var G__50483 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50482,G__50483) : create_fn.call(null,G__50482,G__50483));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50486 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486,(1),null);
var seq__50491_51086 = cljs.core.seq(node_children);
var chunk__50492_51087 = null;
var count__50493_51088 = (0);
var i__50494_51089 = (0);
while(true){
if((i__50494_51089 < count__50493_51088)){
var child_struct_51090 = chunk__50492_51087.cljs$core$IIndexed$_nth$arity$2(null,i__50494_51089);
var children_51091 = shadow.dom.dom_node(child_struct_51090);
if(cljs.core.seq_QMARK_(children_51091)){
var seq__50559_51092 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51091));
var chunk__50561_51093 = null;
var count__50562_51094 = (0);
var i__50563_51095 = (0);
while(true){
if((i__50563_51095 < count__50562_51094)){
var child_51100 = chunk__50561_51093.cljs$core$IIndexed$_nth$arity$2(null,i__50563_51095);
if(cljs.core.truth_(child_51100)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51100);


var G__51106 = seq__50559_51092;
var G__51107 = chunk__50561_51093;
var G__51108 = count__50562_51094;
var G__51109 = (i__50563_51095 + (1));
seq__50559_51092 = G__51106;
chunk__50561_51093 = G__51107;
count__50562_51094 = G__51108;
i__50563_51095 = G__51109;
continue;
} else {
var G__51110 = seq__50559_51092;
var G__51111 = chunk__50561_51093;
var G__51112 = count__50562_51094;
var G__51113 = (i__50563_51095 + (1));
seq__50559_51092 = G__51110;
chunk__50561_51093 = G__51111;
count__50562_51094 = G__51112;
i__50563_51095 = G__51113;
continue;
}
} else {
var temp__5753__auto___51116 = cljs.core.seq(seq__50559_51092);
if(temp__5753__auto___51116){
var seq__50559_51118__$1 = temp__5753__auto___51116;
if(cljs.core.chunked_seq_QMARK_(seq__50559_51118__$1)){
var c__4649__auto___51123 = cljs.core.chunk_first(seq__50559_51118__$1);
var G__51125 = cljs.core.chunk_rest(seq__50559_51118__$1);
var G__51126 = c__4649__auto___51123;
var G__51127 = cljs.core.count(c__4649__auto___51123);
var G__51128 = (0);
seq__50559_51092 = G__51125;
chunk__50561_51093 = G__51126;
count__50562_51094 = G__51127;
i__50563_51095 = G__51128;
continue;
} else {
var child_51133 = cljs.core.first(seq__50559_51118__$1);
if(cljs.core.truth_(child_51133)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51133);


var G__51134 = cljs.core.next(seq__50559_51118__$1);
var G__51135 = null;
var G__51136 = (0);
var G__51137 = (0);
seq__50559_51092 = G__51134;
chunk__50561_51093 = G__51135;
count__50562_51094 = G__51136;
i__50563_51095 = G__51137;
continue;
} else {
var G__51138 = cljs.core.next(seq__50559_51118__$1);
var G__51139 = null;
var G__51140 = (0);
var G__51141 = (0);
seq__50559_51092 = G__51138;
chunk__50561_51093 = G__51139;
count__50562_51094 = G__51140;
i__50563_51095 = G__51141;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51091);
}


var G__51142 = seq__50491_51086;
var G__51143 = chunk__50492_51087;
var G__51144 = count__50493_51088;
var G__51145 = (i__50494_51089 + (1));
seq__50491_51086 = G__51142;
chunk__50492_51087 = G__51143;
count__50493_51088 = G__51144;
i__50494_51089 = G__51145;
continue;
} else {
var temp__5753__auto___51146 = cljs.core.seq(seq__50491_51086);
if(temp__5753__auto___51146){
var seq__50491_51147__$1 = temp__5753__auto___51146;
if(cljs.core.chunked_seq_QMARK_(seq__50491_51147__$1)){
var c__4649__auto___51148 = cljs.core.chunk_first(seq__50491_51147__$1);
var G__51149 = cljs.core.chunk_rest(seq__50491_51147__$1);
var G__51150 = c__4649__auto___51148;
var G__51151 = cljs.core.count(c__4649__auto___51148);
var G__51152 = (0);
seq__50491_51086 = G__51149;
chunk__50492_51087 = G__51150;
count__50493_51088 = G__51151;
i__50494_51089 = G__51152;
continue;
} else {
var child_struct_51153 = cljs.core.first(seq__50491_51147__$1);
var children_51154 = shadow.dom.dom_node(child_struct_51153);
if(cljs.core.seq_QMARK_(children_51154)){
var seq__50581_51155 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51154));
var chunk__50583_51156 = null;
var count__50584_51157 = (0);
var i__50585_51158 = (0);
while(true){
if((i__50585_51158 < count__50584_51157)){
var child_51159 = chunk__50583_51156.cljs$core$IIndexed$_nth$arity$2(null,i__50585_51158);
if(cljs.core.truth_(child_51159)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51159);


var G__51160 = seq__50581_51155;
var G__51161 = chunk__50583_51156;
var G__51162 = count__50584_51157;
var G__51163 = (i__50585_51158 + (1));
seq__50581_51155 = G__51160;
chunk__50583_51156 = G__51161;
count__50584_51157 = G__51162;
i__50585_51158 = G__51163;
continue;
} else {
var G__51164 = seq__50581_51155;
var G__51165 = chunk__50583_51156;
var G__51166 = count__50584_51157;
var G__51167 = (i__50585_51158 + (1));
seq__50581_51155 = G__51164;
chunk__50583_51156 = G__51165;
count__50584_51157 = G__51166;
i__50585_51158 = G__51167;
continue;
}
} else {
var temp__5753__auto___51168__$1 = cljs.core.seq(seq__50581_51155);
if(temp__5753__auto___51168__$1){
var seq__50581_51169__$1 = temp__5753__auto___51168__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50581_51169__$1)){
var c__4649__auto___51170 = cljs.core.chunk_first(seq__50581_51169__$1);
var G__51175 = cljs.core.chunk_rest(seq__50581_51169__$1);
var G__51176 = c__4649__auto___51170;
var G__51177 = cljs.core.count(c__4649__auto___51170);
var G__51178 = (0);
seq__50581_51155 = G__51175;
chunk__50583_51156 = G__51176;
count__50584_51157 = G__51177;
i__50585_51158 = G__51178;
continue;
} else {
var child_51179 = cljs.core.first(seq__50581_51169__$1);
if(cljs.core.truth_(child_51179)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51179);


var G__51181 = cljs.core.next(seq__50581_51169__$1);
var G__51183 = null;
var G__51186 = (0);
var G__51188 = (0);
seq__50581_51155 = G__51181;
chunk__50583_51156 = G__51183;
count__50584_51157 = G__51186;
i__50585_51158 = G__51188;
continue;
} else {
var G__51190 = cljs.core.next(seq__50581_51169__$1);
var G__51191 = null;
var G__51192 = (0);
var G__51193 = (0);
seq__50581_51155 = G__51190;
chunk__50583_51156 = G__51191;
count__50584_51157 = G__51192;
i__50585_51158 = G__51193;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51154);
}


var G__51198 = cljs.core.next(seq__50491_51147__$1);
var G__51199 = null;
var G__51200 = (0);
var G__51201 = (0);
seq__50491_51086 = G__51198;
chunk__50492_51087 = G__51199;
count__50493_51088 = G__51200;
i__50494_51089 = G__51201;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__50612 = cljs.core.seq(node);
var chunk__50613 = null;
var count__50614 = (0);
var i__50615 = (0);
while(true){
if((i__50615 < count__50614)){
var n = chunk__50613.cljs$core$IIndexed$_nth$arity$2(null,i__50615);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51227 = seq__50612;
var G__51228 = chunk__50613;
var G__51229 = count__50614;
var G__51230 = (i__50615 + (1));
seq__50612 = G__51227;
chunk__50613 = G__51228;
count__50614 = G__51229;
i__50615 = G__51230;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50612);
if(temp__5753__auto__){
var seq__50612__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50612__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50612__$1);
var G__51241 = cljs.core.chunk_rest(seq__50612__$1);
var G__51242 = c__4649__auto__;
var G__51243 = cljs.core.count(c__4649__auto__);
var G__51244 = (0);
seq__50612 = G__51241;
chunk__50613 = G__51242;
count__50614 = G__51243;
i__50615 = G__51244;
continue;
} else {
var n = cljs.core.first(seq__50612__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51245 = cljs.core.next(seq__50612__$1);
var G__51246 = null;
var G__51247 = (0);
var G__51248 = (0);
seq__50612 = G__51245;
chunk__50613 = G__51246;
count__50614 = G__51247;
i__50615 = G__51248;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__50639 = arguments.length;
switch (G__50639) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__50644 = arguments.length;
switch (G__50644) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__50672 = arguments.length;
switch (G__50672) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51257 = arguments.length;
var i__4830__auto___51258 = (0);
while(true){
if((i__4830__auto___51258 < len__4829__auto___51257)){
args__4835__auto__.push((arguments[i__4830__auto___51258]));

var G__51259 = (i__4830__auto___51258 + (1));
i__4830__auto___51258 = G__51259;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__50709_51260 = cljs.core.seq(nodes);
var chunk__50710_51261 = null;
var count__50711_51262 = (0);
var i__50712_51263 = (0);
while(true){
if((i__50712_51263 < count__50711_51262)){
var node_51264 = chunk__50710_51261.cljs$core$IIndexed$_nth$arity$2(null,i__50712_51263);
fragment.appendChild(shadow.dom._to_dom(node_51264));


var G__51265 = seq__50709_51260;
var G__51266 = chunk__50710_51261;
var G__51267 = count__50711_51262;
var G__51268 = (i__50712_51263 + (1));
seq__50709_51260 = G__51265;
chunk__50710_51261 = G__51266;
count__50711_51262 = G__51267;
i__50712_51263 = G__51268;
continue;
} else {
var temp__5753__auto___51269 = cljs.core.seq(seq__50709_51260);
if(temp__5753__auto___51269){
var seq__50709_51270__$1 = temp__5753__auto___51269;
if(cljs.core.chunked_seq_QMARK_(seq__50709_51270__$1)){
var c__4649__auto___51271 = cljs.core.chunk_first(seq__50709_51270__$1);
var G__51272 = cljs.core.chunk_rest(seq__50709_51270__$1);
var G__51273 = c__4649__auto___51271;
var G__51274 = cljs.core.count(c__4649__auto___51271);
var G__51275 = (0);
seq__50709_51260 = G__51272;
chunk__50710_51261 = G__51273;
count__50711_51262 = G__51274;
i__50712_51263 = G__51275;
continue;
} else {
var node_51276 = cljs.core.first(seq__50709_51270__$1);
fragment.appendChild(shadow.dom._to_dom(node_51276));


var G__51277 = cljs.core.next(seq__50709_51270__$1);
var G__51278 = null;
var G__51279 = (0);
var G__51280 = (0);
seq__50709_51260 = G__51277;
chunk__50710_51261 = G__51278;
count__50711_51262 = G__51279;
i__50712_51263 = G__51280;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50705){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50705));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50715_51281 = cljs.core.seq(scripts);
var chunk__50716_51282 = null;
var count__50717_51283 = (0);
var i__50718_51284 = (0);
while(true){
if((i__50718_51284 < count__50717_51283)){
var vec__50731_51285 = chunk__50716_51282.cljs$core$IIndexed$_nth$arity$2(null,i__50718_51284);
var script_tag_51286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50731_51285,(0),null);
var script_body_51287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50731_51285,(1),null);
eval(script_body_51287);


var G__51291 = seq__50715_51281;
var G__51292 = chunk__50716_51282;
var G__51293 = count__50717_51283;
var G__51294 = (i__50718_51284 + (1));
seq__50715_51281 = G__51291;
chunk__50716_51282 = G__51292;
count__50717_51283 = G__51293;
i__50718_51284 = G__51294;
continue;
} else {
var temp__5753__auto___51295 = cljs.core.seq(seq__50715_51281);
if(temp__5753__auto___51295){
var seq__50715_51296__$1 = temp__5753__auto___51295;
if(cljs.core.chunked_seq_QMARK_(seq__50715_51296__$1)){
var c__4649__auto___51297 = cljs.core.chunk_first(seq__50715_51296__$1);
var G__51298 = cljs.core.chunk_rest(seq__50715_51296__$1);
var G__51299 = c__4649__auto___51297;
var G__51300 = cljs.core.count(c__4649__auto___51297);
var G__51301 = (0);
seq__50715_51281 = G__51298;
chunk__50716_51282 = G__51299;
count__50717_51283 = G__51300;
i__50718_51284 = G__51301;
continue;
} else {
var vec__50738_51302 = cljs.core.first(seq__50715_51296__$1);
var script_tag_51303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50738_51302,(0),null);
var script_body_51304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50738_51302,(1),null);
eval(script_body_51304);


var G__51305 = cljs.core.next(seq__50715_51296__$1);
var G__51306 = null;
var G__51307 = (0);
var G__51308 = (0);
seq__50715_51281 = G__51305;
chunk__50716_51282 = G__51306;
count__50717_51283 = G__51307;
i__50718_51284 = G__51308;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50754){
var vec__50755 = p__50754;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50755,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50755,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50766 = arguments.length;
switch (G__50766) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50808 = cljs.core.seq(style_keys);
var chunk__50809 = null;
var count__50810 = (0);
var i__50811 = (0);
while(true){
if((i__50811 < count__50810)){
var it = chunk__50809.cljs$core$IIndexed$_nth$arity$2(null,i__50811);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51326 = seq__50808;
var G__51327 = chunk__50809;
var G__51328 = count__50810;
var G__51329 = (i__50811 + (1));
seq__50808 = G__51326;
chunk__50809 = G__51327;
count__50810 = G__51328;
i__50811 = G__51329;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50808);
if(temp__5753__auto__){
var seq__50808__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50808__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50808__$1);
var G__51330 = cljs.core.chunk_rest(seq__50808__$1);
var G__51331 = c__4649__auto__;
var G__51332 = cljs.core.count(c__4649__auto__);
var G__51333 = (0);
seq__50808 = G__51330;
chunk__50809 = G__51331;
count__50810 = G__51332;
i__50811 = G__51333;
continue;
} else {
var it = cljs.core.first(seq__50808__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51334 = cljs.core.next(seq__50808__$1);
var G__51335 = null;
var G__51336 = (0);
var G__51337 = (0);
seq__50808 = G__51334;
chunk__50809 = G__51335;
count__50810 = G__51336;
i__50811 = G__51337;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50839,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50846 = k50839;
var G__50846__$1 = (((G__50846 instanceof cljs.core.Keyword))?G__50846.fqn:null);
switch (G__50846__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50839,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50847){
var vec__50848 = p__50847;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50848,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50848,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50838){
var self__ = this;
var G__50838__$1 = this;
return (new cljs.core.RecordIter((0),G__50838__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50840,other50841){
var self__ = this;
var this50840__$1 = this;
return (((!((other50841 == null)))) && ((((this50840__$1.constructor === other50841.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50840__$1.x,other50841.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50840__$1.y,other50841.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50840__$1.__extmap,other50841.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50839){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50851 = k50839;
var G__50851__$1 = (((G__50851 instanceof cljs.core.Keyword))?G__50851.fqn:null);
switch (G__50851__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50839);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50838){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50852 = cljs.core.keyword_identical_QMARK_;
var expr__50853 = k__4481__auto__;
if(cljs.core.truth_((pred__50852.cljs$core$IFn$_invoke$arity$2 ? pred__50852.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50853) : pred__50852.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50853)))){
return (new shadow.dom.Coordinate(G__50838,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50852.cljs$core$IFn$_invoke$arity$2 ? pred__50852.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50853) : pred__50852.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50853)))){
return (new shadow.dom.Coordinate(self__.x,G__50838,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50838),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50838){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50838,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50842){
var extmap__4512__auto__ = (function (){var G__50855 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50842,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50842)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50855);
} else {
return G__50855;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50842),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50842),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50857,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50861 = k50857;
var G__50861__$1 = (((G__50861 instanceof cljs.core.Keyword))?G__50861.fqn:null);
switch (G__50861__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50857,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50862){
var vec__50863 = p__50862;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50863,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50863,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50856){
var self__ = this;
var G__50856__$1 = this;
return (new cljs.core.RecordIter((0),G__50856__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50858,other50859){
var self__ = this;
var this50858__$1 = this;
return (((!((other50859 == null)))) && ((((this50858__$1.constructor === other50859.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50858__$1.w,other50859.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50858__$1.h,other50859.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50858__$1.__extmap,other50859.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50857){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50866 = k50857;
var G__50866__$1 = (((G__50866 instanceof cljs.core.Keyword))?G__50866.fqn:null);
switch (G__50866__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50857);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50856){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50867 = cljs.core.keyword_identical_QMARK_;
var expr__50868 = k__4481__auto__;
if(cljs.core.truth_((pred__50867.cljs$core$IFn$_invoke$arity$2 ? pred__50867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50868) : pred__50867.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50868)))){
return (new shadow.dom.Size(G__50856,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50867.cljs$core$IFn$_invoke$arity$2 ? pred__50867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50868) : pred__50867.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50868)))){
return (new shadow.dom.Size(self__.w,G__50856,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50856),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50856){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50856,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50860){
var extmap__4512__auto__ = (function (){var G__50870 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50860,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50860)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50870);
} else {
return G__50870;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50860),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50860),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__51356 = (i + (1));
var G__51357 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51356;
ret = G__51357;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50875){
var vec__50876 = p__50875;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50876,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50880 = arguments.length;
switch (G__50880) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__51362 = ps;
var G__51363 = (i + (1));
el__$1 = G__51362;
i = G__51363;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__50881 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50881,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50881,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50881,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50884_51367 = cljs.core.seq(props);
var chunk__50885_51368 = null;
var count__50886_51369 = (0);
var i__50887_51370 = (0);
while(true){
if((i__50887_51370 < count__50886_51369)){
var vec__50894_51371 = chunk__50885_51368.cljs$core$IIndexed$_nth$arity$2(null,i__50887_51370);
var k_51372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50894_51371,(0),null);
var v_51373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50894_51371,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_51372);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51372),v_51373);


var G__51374 = seq__50884_51367;
var G__51375 = chunk__50885_51368;
var G__51376 = count__50886_51369;
var G__51377 = (i__50887_51370 + (1));
seq__50884_51367 = G__51374;
chunk__50885_51368 = G__51375;
count__50886_51369 = G__51376;
i__50887_51370 = G__51377;
continue;
} else {
var temp__5753__auto___51378 = cljs.core.seq(seq__50884_51367);
if(temp__5753__auto___51378){
var seq__50884_51379__$1 = temp__5753__auto___51378;
if(cljs.core.chunked_seq_QMARK_(seq__50884_51379__$1)){
var c__4649__auto___51380 = cljs.core.chunk_first(seq__50884_51379__$1);
var G__51381 = cljs.core.chunk_rest(seq__50884_51379__$1);
var G__51382 = c__4649__auto___51380;
var G__51383 = cljs.core.count(c__4649__auto___51380);
var G__51384 = (0);
seq__50884_51367 = G__51381;
chunk__50885_51368 = G__51382;
count__50886_51369 = G__51383;
i__50887_51370 = G__51384;
continue;
} else {
var vec__50897_51385 = cljs.core.first(seq__50884_51379__$1);
var k_51386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50897_51385,(0),null);
var v_51387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50897_51385,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_51386);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51386),v_51387);


var G__51391 = cljs.core.next(seq__50884_51379__$1);
var G__51392 = null;
var G__51393 = (0);
var G__51394 = (0);
seq__50884_51367 = G__51391;
chunk__50885_51368 = G__51392;
count__50886_51369 = G__51393;
i__50887_51370 = G__51394;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__50901 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50901,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50901,(1),null);
var seq__50904_51395 = cljs.core.seq(node_children);
var chunk__50906_51396 = null;
var count__50907_51397 = (0);
var i__50908_51398 = (0);
while(true){
if((i__50908_51398 < count__50907_51397)){
var child_struct_51399 = chunk__50906_51396.cljs$core$IIndexed$_nth$arity$2(null,i__50908_51398);
if((!((child_struct_51399 == null)))){
if(typeof child_struct_51399 === 'string'){
var text_51400 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51400),child_struct_51399].join(''));
} else {
var children_51401 = shadow.dom.svg_node(child_struct_51399);
if(cljs.core.seq_QMARK_(children_51401)){
var seq__50926_51402 = cljs.core.seq(children_51401);
var chunk__50928_51403 = null;
var count__50929_51404 = (0);
var i__50930_51405 = (0);
while(true){
if((i__50930_51405 < count__50929_51404)){
var child_51406 = chunk__50928_51403.cljs$core$IIndexed$_nth$arity$2(null,i__50930_51405);
if(cljs.core.truth_(child_51406)){
node.appendChild(child_51406);


var G__51407 = seq__50926_51402;
var G__51408 = chunk__50928_51403;
var G__51409 = count__50929_51404;
var G__51410 = (i__50930_51405 + (1));
seq__50926_51402 = G__51407;
chunk__50928_51403 = G__51408;
count__50929_51404 = G__51409;
i__50930_51405 = G__51410;
continue;
} else {
var G__51411 = seq__50926_51402;
var G__51412 = chunk__50928_51403;
var G__51413 = count__50929_51404;
var G__51414 = (i__50930_51405 + (1));
seq__50926_51402 = G__51411;
chunk__50928_51403 = G__51412;
count__50929_51404 = G__51413;
i__50930_51405 = G__51414;
continue;
}
} else {
var temp__5753__auto___51415 = cljs.core.seq(seq__50926_51402);
if(temp__5753__auto___51415){
var seq__50926_51416__$1 = temp__5753__auto___51415;
if(cljs.core.chunked_seq_QMARK_(seq__50926_51416__$1)){
var c__4649__auto___51417 = cljs.core.chunk_first(seq__50926_51416__$1);
var G__51418 = cljs.core.chunk_rest(seq__50926_51416__$1);
var G__51419 = c__4649__auto___51417;
var G__51420 = cljs.core.count(c__4649__auto___51417);
var G__51421 = (0);
seq__50926_51402 = G__51418;
chunk__50928_51403 = G__51419;
count__50929_51404 = G__51420;
i__50930_51405 = G__51421;
continue;
} else {
var child_51422 = cljs.core.first(seq__50926_51416__$1);
if(cljs.core.truth_(child_51422)){
node.appendChild(child_51422);


var G__51423 = cljs.core.next(seq__50926_51416__$1);
var G__51424 = null;
var G__51425 = (0);
var G__51426 = (0);
seq__50926_51402 = G__51423;
chunk__50928_51403 = G__51424;
count__50929_51404 = G__51425;
i__50930_51405 = G__51426;
continue;
} else {
var G__51427 = cljs.core.next(seq__50926_51416__$1);
var G__51428 = null;
var G__51429 = (0);
var G__51430 = (0);
seq__50926_51402 = G__51427;
chunk__50928_51403 = G__51428;
count__50929_51404 = G__51429;
i__50930_51405 = G__51430;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51401);
}
}


var G__51431 = seq__50904_51395;
var G__51432 = chunk__50906_51396;
var G__51433 = count__50907_51397;
var G__51434 = (i__50908_51398 + (1));
seq__50904_51395 = G__51431;
chunk__50906_51396 = G__51432;
count__50907_51397 = G__51433;
i__50908_51398 = G__51434;
continue;
} else {
var G__51435 = seq__50904_51395;
var G__51436 = chunk__50906_51396;
var G__51437 = count__50907_51397;
var G__51438 = (i__50908_51398 + (1));
seq__50904_51395 = G__51435;
chunk__50906_51396 = G__51436;
count__50907_51397 = G__51437;
i__50908_51398 = G__51438;
continue;
}
} else {
var temp__5753__auto___51439 = cljs.core.seq(seq__50904_51395);
if(temp__5753__auto___51439){
var seq__50904_51440__$1 = temp__5753__auto___51439;
if(cljs.core.chunked_seq_QMARK_(seq__50904_51440__$1)){
var c__4649__auto___51441 = cljs.core.chunk_first(seq__50904_51440__$1);
var G__51442 = cljs.core.chunk_rest(seq__50904_51440__$1);
var G__51443 = c__4649__auto___51441;
var G__51444 = cljs.core.count(c__4649__auto___51441);
var G__51445 = (0);
seq__50904_51395 = G__51442;
chunk__50906_51396 = G__51443;
count__50907_51397 = G__51444;
i__50908_51398 = G__51445;
continue;
} else {
var child_struct_51446 = cljs.core.first(seq__50904_51440__$1);
if((!((child_struct_51446 == null)))){
if(typeof child_struct_51446 === 'string'){
var text_51447 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51447),child_struct_51446].join(''));
} else {
var children_51448 = shadow.dom.svg_node(child_struct_51446);
if(cljs.core.seq_QMARK_(children_51448)){
var seq__50934_51449 = cljs.core.seq(children_51448);
var chunk__50936_51450 = null;
var count__50937_51451 = (0);
var i__50938_51452 = (0);
while(true){
if((i__50938_51452 < count__50937_51451)){
var child_51453 = chunk__50936_51450.cljs$core$IIndexed$_nth$arity$2(null,i__50938_51452);
if(cljs.core.truth_(child_51453)){
node.appendChild(child_51453);


var G__51454 = seq__50934_51449;
var G__51455 = chunk__50936_51450;
var G__51456 = count__50937_51451;
var G__51457 = (i__50938_51452 + (1));
seq__50934_51449 = G__51454;
chunk__50936_51450 = G__51455;
count__50937_51451 = G__51456;
i__50938_51452 = G__51457;
continue;
} else {
var G__51458 = seq__50934_51449;
var G__51459 = chunk__50936_51450;
var G__51460 = count__50937_51451;
var G__51461 = (i__50938_51452 + (1));
seq__50934_51449 = G__51458;
chunk__50936_51450 = G__51459;
count__50937_51451 = G__51460;
i__50938_51452 = G__51461;
continue;
}
} else {
var temp__5753__auto___51463__$1 = cljs.core.seq(seq__50934_51449);
if(temp__5753__auto___51463__$1){
var seq__50934_51464__$1 = temp__5753__auto___51463__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50934_51464__$1)){
var c__4649__auto___51468 = cljs.core.chunk_first(seq__50934_51464__$1);
var G__51469 = cljs.core.chunk_rest(seq__50934_51464__$1);
var G__51470 = c__4649__auto___51468;
var G__51471 = cljs.core.count(c__4649__auto___51468);
var G__51472 = (0);
seq__50934_51449 = G__51469;
chunk__50936_51450 = G__51470;
count__50937_51451 = G__51471;
i__50938_51452 = G__51472;
continue;
} else {
var child_51473 = cljs.core.first(seq__50934_51464__$1);
if(cljs.core.truth_(child_51473)){
node.appendChild(child_51473);


var G__51474 = cljs.core.next(seq__50934_51464__$1);
var G__51475 = null;
var G__51476 = (0);
var G__51477 = (0);
seq__50934_51449 = G__51474;
chunk__50936_51450 = G__51475;
count__50937_51451 = G__51476;
i__50938_51452 = G__51477;
continue;
} else {
var G__51478 = cljs.core.next(seq__50934_51464__$1);
var G__51479 = null;
var G__51480 = (0);
var G__51481 = (0);
seq__50934_51449 = G__51478;
chunk__50936_51450 = G__51479;
count__50937_51451 = G__51480;
i__50938_51452 = G__51481;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51448);
}
}


var G__51482 = cljs.core.next(seq__50904_51440__$1);
var G__51483 = null;
var G__51484 = (0);
var G__51485 = (0);
seq__50904_51395 = G__51482;
chunk__50906_51396 = G__51483;
count__50907_51397 = G__51484;
i__50908_51398 = G__51485;
continue;
} else {
var G__51486 = cljs.core.next(seq__50904_51440__$1);
var G__51487 = null;
var G__51488 = (0);
var G__51489 = (0);
seq__50904_51395 = G__51486;
chunk__50906_51396 = G__51487;
count__50907_51397 = G__51488;
i__50908_51398 = G__51489;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51490 = arguments.length;
var i__4830__auto___51491 = (0);
while(true){
if((i__4830__auto___51491 < len__4829__auto___51490)){
args__4835__auto__.push((arguments[i__4830__auto___51491]));

var G__51492 = (i__4830__auto___51491 + (1));
i__4830__auto___51491 = G__51492;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50940){
var G__50941 = cljs.core.first(seq50940);
var seq50940__$1 = cljs.core.next(seq50940);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50941,seq50940__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__50947 = arguments.length;
switch (G__50947) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__48391__auto___51494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48392__auto__ = (function (){var switch__48203__auto__ = (function (state_50952){
var state_val_50953 = (state_50952[(1)]);
if((state_val_50953 === (1))){
var state_50952__$1 = state_50952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50952__$1,(2),once_or_cleanup);
} else {
if((state_val_50953 === (2))){
var inst_50949 = (state_50952[(2)]);
var inst_50950 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50952__$1 = (function (){var statearr_50954 = state_50952;
(statearr_50954[(7)] = inst_50949);

return statearr_50954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50952__$1,inst_50950);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48204__auto__ = null;
var shadow$dom$state_machine__48204__auto____0 = (function (){
var statearr_50955 = [null,null,null,null,null,null,null,null];
(statearr_50955[(0)] = shadow$dom$state_machine__48204__auto__);

(statearr_50955[(1)] = (1));

return statearr_50955;
});
var shadow$dom$state_machine__48204__auto____1 = (function (state_50952){
while(true){
var ret_value__48205__auto__ = (function (){try{while(true){
var result__48206__auto__ = switch__48203__auto__(state_50952);
if(cljs.core.keyword_identical_QMARK_(result__48206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48206__auto__;
}
break;
}
}catch (e50960){var ex__48207__auto__ = e50960;
var statearr_50961_51497 = state_50952;
(statearr_50961_51497[(2)] = ex__48207__auto__);


if(cljs.core.seq((state_50952[(4)]))){
var statearr_50962_51498 = state_50952;
(statearr_50962_51498[(1)] = cljs.core.first((state_50952[(4)])));

} else {
throw ex__48207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51499 = state_50952;
state_50952 = G__51499;
continue;
} else {
return ret_value__48205__auto__;
}
break;
}
});
shadow$dom$state_machine__48204__auto__ = function(state_50952){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48204__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48204__auto____1.call(this,state_50952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48204__auto____0;
shadow$dom$state_machine__48204__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48204__auto____1;
return shadow$dom$state_machine__48204__auto__;
})()
})();
var state__48393__auto__ = (function (){var statearr_50963 = f__48392__auto__();
(statearr_50963[(6)] = c__48391__auto___51494);

return statearr_50963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48393__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

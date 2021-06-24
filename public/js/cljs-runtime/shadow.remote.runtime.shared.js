goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__51633,res){
var map__51634 = p__51633;
var map__51634__$1 = cljs.core.__destructure_map(map__51634);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51634__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51634__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__51635 = res;
var G__51635__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51635,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__51635);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51635__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__51635__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__51637 = arguments.length;
switch (G__51637) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__51642,msg,handlers,timeout_after_ms){
var map__51643 = p__51642;
var map__51643__$1 = cljs.core.__destructure_map(map__51643);
var runtime = map__51643__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51643__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51842 = arguments.length;
var i__4830__auto___51843 = (0);
while(true){
if((i__4830__auto___51843 < len__4829__auto___51842)){
args__4835__auto__.push((arguments[i__4830__auto___51843]));

var G__51844 = (i__4830__auto___51843 + (1));
i__4830__auto___51843 = G__51844;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__51647,ev,args){
var map__51648 = p__51647;
var map__51648__$1 = cljs.core.__destructure_map(map__51648);
var runtime = map__51648__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51648__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__51649 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__51652 = null;
var count__51653 = (0);
var i__51654 = (0);
while(true){
if((i__51654 < count__51653)){
var ext = chunk__51652.cljs$core$IIndexed$_nth$arity$2(null,i__51654);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__51848 = seq__51649;
var G__51849 = chunk__51652;
var G__51850 = count__51653;
var G__51851 = (i__51654 + (1));
seq__51649 = G__51848;
chunk__51652 = G__51849;
count__51653 = G__51850;
i__51654 = G__51851;
continue;
} else {
var G__51852 = seq__51649;
var G__51853 = chunk__51652;
var G__51854 = count__51653;
var G__51855 = (i__51654 + (1));
seq__51649 = G__51852;
chunk__51652 = G__51853;
count__51653 = G__51854;
i__51654 = G__51855;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51649);
if(temp__5753__auto__){
var seq__51649__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51649__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51649__$1);
var G__51856 = cljs.core.chunk_rest(seq__51649__$1);
var G__51857 = c__4649__auto__;
var G__51858 = cljs.core.count(c__4649__auto__);
var G__51859 = (0);
seq__51649 = G__51856;
chunk__51652 = G__51857;
count__51653 = G__51858;
i__51654 = G__51859;
continue;
} else {
var ext = cljs.core.first(seq__51649__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__51860 = cljs.core.next(seq__51649__$1);
var G__51861 = null;
var G__51862 = (0);
var G__51863 = (0);
seq__51649 = G__51860;
chunk__51652 = G__51861;
count__51653 = G__51862;
i__51654 = G__51863;
continue;
} else {
var G__51864 = cljs.core.next(seq__51649__$1);
var G__51865 = null;
var G__51866 = (0);
var G__51867 = (0);
seq__51649 = G__51864;
chunk__51652 = G__51865;
count__51653 = G__51866;
i__51654 = G__51867;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq51644){
var G__51645 = cljs.core.first(seq51644);
var seq51644__$1 = cljs.core.next(seq51644);
var G__51646 = cljs.core.first(seq51644__$1);
var seq51644__$2 = cljs.core.next(seq51644__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51645,G__51646,seq51644__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__51666,p__51667){
var map__51668 = p__51666;
var map__51668__$1 = cljs.core.__destructure_map(map__51668);
var runtime = map__51668__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__51669 = p__51667;
var map__51669__$1 = cljs.core.__destructure_map(map__51669);
var msg = map__51669__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51669__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__51670 = cljs.core.deref(state_ref);
var map__51670__$1 = cljs.core.__destructure_map(map__51670);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51670__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51670__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__51671){
var map__51672 = p__51671;
var map__51672__$1 = cljs.core.__destructure_map(map__51672);
var runtime = map__51672__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51672__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__51707,msg){
var map__51709 = p__51707;
var map__51709__$1 = cljs.core.__destructure_map(map__51709);
var runtime = map__51709__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51709__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__51719,key,p__51720){
var map__51721 = p__51719;
var map__51721__$1 = cljs.core.__destructure_map(map__51721);
var state = map__51721__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51721__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__51722 = p__51720;
var map__51722__$1 = cljs.core.__destructure_map(map__51722);
var spec = map__51722__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51722__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__51724,key,spec){
var map__51725 = p__51724;
var map__51725__$1 = cljs.core.__destructure_map(map__51725);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51725__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__51730_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__51730_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__51731_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__51731_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__51732_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__51732_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__51733_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__51733_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__51734_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__51734_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__51766,key){
var map__51767 = p__51766;
var map__51767__$1 = cljs.core.__destructure_map(map__51767);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51767__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__51786,msg){
var map__51787 = p__51786;
var map__51787__$1 = cljs.core.__destructure_map(map__51787);
var runtime = map__51787__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51787__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__51788,p__51789){
var map__51790 = p__51788;
var map__51790__$1 = cljs.core.__destructure_map(map__51790);
var runtime = map__51790__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51790__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__51791 = p__51789;
var map__51791__$1 = cljs.core.__destructure_map(map__51791);
var msg = map__51791__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51791__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51791__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__51797 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__51799 = null;
var count__51800 = (0);
var i__51801 = (0);
while(true){
if((i__51801 < count__51800)){
var map__51815 = chunk__51799.cljs$core$IIndexed$_nth$arity$2(null,i__51801);
var map__51815__$1 = cljs.core.__destructure_map(map__51815);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51815__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__51988 = seq__51797;
var G__51989 = chunk__51799;
var G__51990 = count__51800;
var G__51991 = (i__51801 + (1));
seq__51797 = G__51988;
chunk__51799 = G__51989;
count__51800 = G__51990;
i__51801 = G__51991;
continue;
} else {
var G__51992 = seq__51797;
var G__51993 = chunk__51799;
var G__51994 = count__51800;
var G__51995 = (i__51801 + (1));
seq__51797 = G__51992;
chunk__51799 = G__51993;
count__51800 = G__51994;
i__51801 = G__51995;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51797);
if(temp__5753__auto__){
var seq__51797__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51797__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51797__$1);
var G__51996 = cljs.core.chunk_rest(seq__51797__$1);
var G__51997 = c__4649__auto__;
var G__51998 = cljs.core.count(c__4649__auto__);
var G__51999 = (0);
seq__51797 = G__51996;
chunk__51799 = G__51997;
count__51800 = G__51998;
i__51801 = G__51999;
continue;
} else {
var map__51817 = cljs.core.first(seq__51797__$1);
var map__51817__$1 = cljs.core.__destructure_map(map__51817);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51817__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52000 = cljs.core.next(seq__51797__$1);
var G__52001 = null;
var G__52002 = (0);
var G__52003 = (0);
seq__51797 = G__52000;
chunk__51799 = G__52001;
count__51800 = G__52002;
i__51801 = G__52003;
continue;
} else {
var G__52008 = cljs.core.next(seq__51797__$1);
var G__52009 = null;
var G__52010 = (0);
var G__52011 = (0);
seq__51797 = G__52008;
chunk__51799 = G__52009;
count__51800 = G__52010;
i__51801 = G__52011;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

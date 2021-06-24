goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53696 = arguments.length;
var i__4830__auto___53697 = (0);
while(true){
if((i__4830__auto___53697 < len__4829__auto___53696)){
args__4835__auto__.push((arguments[i__4830__auto___53697]));

var G__53698 = (i__4830__auto___53697 + (1));
i__4830__auto___53697 = G__53698;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53567){
var G__53568 = cljs.core.first(seq53567);
var seq53567__$1 = cljs.core.next(seq53567);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53568,seq53567__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53572 = cljs.core.seq(sources);
var chunk__53573 = null;
var count__53574 = (0);
var i__53575 = (0);
while(true){
if((i__53575 < count__53574)){
var map__53582 = chunk__53573.cljs$core$IIndexed$_nth$arity$2(null,i__53575);
var map__53582__$1 = cljs.core.__destructure_map(map__53582);
var src = map__53582__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53582__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53582__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53582__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53582__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53583){var e_53699 = e53583;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53699);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53699.message)].join('')));
}

var G__53700 = seq__53572;
var G__53701 = chunk__53573;
var G__53702 = count__53574;
var G__53703 = (i__53575 + (1));
seq__53572 = G__53700;
chunk__53573 = G__53701;
count__53574 = G__53702;
i__53575 = G__53703;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53572);
if(temp__5753__auto__){
var seq__53572__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53572__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53572__$1);
var G__53704 = cljs.core.chunk_rest(seq__53572__$1);
var G__53705 = c__4649__auto__;
var G__53706 = cljs.core.count(c__4649__auto__);
var G__53707 = (0);
seq__53572 = G__53704;
chunk__53573 = G__53705;
count__53574 = G__53706;
i__53575 = G__53707;
continue;
} else {
var map__53584 = cljs.core.first(seq__53572__$1);
var map__53584__$1 = cljs.core.__destructure_map(map__53584);
var src = map__53584__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53584__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53584__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53584__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53584__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53585){var e_53708 = e53585;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53708);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53708.message)].join('')));
}

var G__53709 = cljs.core.next(seq__53572__$1);
var G__53710 = null;
var G__53711 = (0);
var G__53712 = (0);
seq__53572 = G__53709;
chunk__53573 = G__53710;
count__53574 = G__53711;
i__53575 = G__53712;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__53588 = cljs.core.seq(js_requires);
var chunk__53589 = null;
var count__53590 = (0);
var i__53591 = (0);
while(true){
if((i__53591 < count__53590)){
var js_ns = chunk__53589.cljs$core$IIndexed$_nth$arity$2(null,i__53591);
var require_str_53713 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53713);


var G__53714 = seq__53588;
var G__53715 = chunk__53589;
var G__53716 = count__53590;
var G__53717 = (i__53591 + (1));
seq__53588 = G__53714;
chunk__53589 = G__53715;
count__53590 = G__53716;
i__53591 = G__53717;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53588);
if(temp__5753__auto__){
var seq__53588__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53588__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53588__$1);
var G__53718 = cljs.core.chunk_rest(seq__53588__$1);
var G__53719 = c__4649__auto__;
var G__53720 = cljs.core.count(c__4649__auto__);
var G__53721 = (0);
seq__53588 = G__53718;
chunk__53589 = G__53719;
count__53590 = G__53720;
i__53591 = G__53721;
continue;
} else {
var js_ns = cljs.core.first(seq__53588__$1);
var require_str_53722 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53722);


var G__53723 = cljs.core.next(seq__53588__$1);
var G__53724 = null;
var G__53725 = (0);
var G__53726 = (0);
seq__53588 = G__53723;
chunk__53589 = G__53724;
count__53590 = G__53725;
i__53591 = G__53726;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53593){
var map__53594 = p__53593;
var map__53594__$1 = cljs.core.__destructure_map(map__53594);
var msg = map__53594__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53594__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53594__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53595(s__53596){
return (new cljs.core.LazySeq(null,(function (){
var s__53596__$1 = s__53596;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53596__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__53601 = cljs.core.first(xs__6308__auto__);
var map__53601__$1 = cljs.core.__destructure_map(map__53601);
var src = map__53601__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53601__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53601__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__53596__$1,map__53601,map__53601__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53594,map__53594__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53595_$_iter__53597(s__53598){
return (new cljs.core.LazySeq(null,((function (s__53596__$1,map__53601,map__53601__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53594,map__53594__$1,msg,info,reload_info){
return (function (){
var s__53598__$1 = s__53598;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53598__$1);
if(temp__5753__auto____$1){
var s__53598__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53598__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__53598__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__53600 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__53599 = (0);
while(true){
if((i__53599 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__53599);
cljs.core.chunk_append(b__53600,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53727 = (i__53599 + (1));
i__53599 = G__53727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53600),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53595_$_iter__53597(cljs.core.chunk_rest(s__53598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53600),null);
}
} else {
var warning = cljs.core.first(s__53598__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53595_$_iter__53597(cljs.core.rest(s__53598__$2)));
}
} else {
return null;
}
break;
}
});})(s__53596__$1,map__53601,map__53601__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53594,map__53594__$1,msg,info,reload_info))
,null,null));
});})(s__53596__$1,map__53601,map__53601__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53594,map__53594__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53595(cljs.core.rest(s__53596__$1)));
} else {
var G__53728 = cljs.core.rest(s__53596__$1);
s__53596__$1 = G__53728;
continue;
}
} else {
var G__53729 = cljs.core.rest(s__53596__$1);
s__53596__$1 = G__53729;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__53602_53730 = cljs.core.seq(warnings);
var chunk__53603_53731 = null;
var count__53604_53732 = (0);
var i__53605_53733 = (0);
while(true){
if((i__53605_53733 < count__53604_53732)){
var map__53608_53734 = chunk__53603_53731.cljs$core$IIndexed$_nth$arity$2(null,i__53605_53733);
var map__53608_53735__$1 = cljs.core.__destructure_map(map__53608_53734);
var w_53736 = map__53608_53735__$1;
var msg_53737__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53608_53735__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53608_53735__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53608_53735__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53608_53735__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53740)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53738),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53739),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53737__$1)].join(''));


var G__53741 = seq__53602_53730;
var G__53742 = chunk__53603_53731;
var G__53743 = count__53604_53732;
var G__53744 = (i__53605_53733 + (1));
seq__53602_53730 = G__53741;
chunk__53603_53731 = G__53742;
count__53604_53732 = G__53743;
i__53605_53733 = G__53744;
continue;
} else {
var temp__5753__auto___53745 = cljs.core.seq(seq__53602_53730);
if(temp__5753__auto___53745){
var seq__53602_53746__$1 = temp__5753__auto___53745;
if(cljs.core.chunked_seq_QMARK_(seq__53602_53746__$1)){
var c__4649__auto___53747 = cljs.core.chunk_first(seq__53602_53746__$1);
var G__53748 = cljs.core.chunk_rest(seq__53602_53746__$1);
var G__53749 = c__4649__auto___53747;
var G__53750 = cljs.core.count(c__4649__auto___53747);
var G__53751 = (0);
seq__53602_53730 = G__53748;
chunk__53603_53731 = G__53749;
count__53604_53732 = G__53750;
i__53605_53733 = G__53751;
continue;
} else {
var map__53609_53752 = cljs.core.first(seq__53602_53746__$1);
var map__53609_53753__$1 = cljs.core.__destructure_map(map__53609_53752);
var w_53754 = map__53609_53753__$1;
var msg_53755__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53609_53753__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53609_53753__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53609_53753__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53609_53753__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53758)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53756),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53757),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53755__$1)].join(''));


var G__53759 = cljs.core.next(seq__53602_53746__$1);
var G__53760 = null;
var G__53761 = (0);
var G__53762 = (0);
seq__53602_53730 = G__53759;
chunk__53603_53731 = G__53760;
count__53604_53732 = G__53761;
i__53605_53733 = G__53762;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53592_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53592_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53610){
var map__53611 = p__53610;
var map__53611__$1 = cljs.core.__destructure_map(map__53611);
var msg = map__53611__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53611__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53612 = cljs.core.seq(updates);
var chunk__53614 = null;
var count__53615 = (0);
var i__53616 = (0);
while(true){
if((i__53616 < count__53615)){
var path = chunk__53614.cljs$core$IIndexed$_nth$arity$2(null,i__53616);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53646_53763 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53650_53764 = null;
var count__53651_53765 = (0);
var i__53652_53766 = (0);
while(true){
if((i__53652_53766 < count__53651_53765)){
var node_53767 = chunk__53650_53764.cljs$core$IIndexed$_nth$arity$2(null,i__53652_53766);
if(cljs.core.not(node_53767.shadow$old)){
var path_match_53768 = shadow.cljs.devtools.client.browser.match_paths(node_53767.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53768)){
var new_link_53769 = (function (){var G__53658 = node_53767.cloneNode(true);
G__53658.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53768),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53658;
})();
(node_53767.shadow$old = true);

(new_link_53769.onload = ((function (seq__53646_53763,chunk__53650_53764,count__53651_53765,i__53652_53766,seq__53612,chunk__53614,count__53615,i__53616,new_link_53769,path_match_53768,node_53767,path,map__53611,map__53611__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53767);
});})(seq__53646_53763,chunk__53650_53764,count__53651_53765,i__53652_53766,seq__53612,chunk__53614,count__53615,i__53616,new_link_53769,path_match_53768,node_53767,path,map__53611,map__53611__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53768], 0));

goog.dom.insertSiblingAfter(new_link_53769,node_53767);


var G__53770 = seq__53646_53763;
var G__53771 = chunk__53650_53764;
var G__53772 = count__53651_53765;
var G__53773 = (i__53652_53766 + (1));
seq__53646_53763 = G__53770;
chunk__53650_53764 = G__53771;
count__53651_53765 = G__53772;
i__53652_53766 = G__53773;
continue;
} else {
var G__53774 = seq__53646_53763;
var G__53775 = chunk__53650_53764;
var G__53776 = count__53651_53765;
var G__53777 = (i__53652_53766 + (1));
seq__53646_53763 = G__53774;
chunk__53650_53764 = G__53775;
count__53651_53765 = G__53776;
i__53652_53766 = G__53777;
continue;
}
} else {
var G__53778 = seq__53646_53763;
var G__53779 = chunk__53650_53764;
var G__53780 = count__53651_53765;
var G__53781 = (i__53652_53766 + (1));
seq__53646_53763 = G__53778;
chunk__53650_53764 = G__53779;
count__53651_53765 = G__53780;
i__53652_53766 = G__53781;
continue;
}
} else {
var temp__5753__auto___53782 = cljs.core.seq(seq__53646_53763);
if(temp__5753__auto___53782){
var seq__53646_53783__$1 = temp__5753__auto___53782;
if(cljs.core.chunked_seq_QMARK_(seq__53646_53783__$1)){
var c__4649__auto___53784 = cljs.core.chunk_first(seq__53646_53783__$1);
var G__53785 = cljs.core.chunk_rest(seq__53646_53783__$1);
var G__53786 = c__4649__auto___53784;
var G__53787 = cljs.core.count(c__4649__auto___53784);
var G__53788 = (0);
seq__53646_53763 = G__53785;
chunk__53650_53764 = G__53786;
count__53651_53765 = G__53787;
i__53652_53766 = G__53788;
continue;
} else {
var node_53789 = cljs.core.first(seq__53646_53783__$1);
if(cljs.core.not(node_53789.shadow$old)){
var path_match_53790 = shadow.cljs.devtools.client.browser.match_paths(node_53789.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53790)){
var new_link_53791 = (function (){var G__53659 = node_53789.cloneNode(true);
G__53659.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53790),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53659;
})();
(node_53789.shadow$old = true);

(new_link_53791.onload = ((function (seq__53646_53763,chunk__53650_53764,count__53651_53765,i__53652_53766,seq__53612,chunk__53614,count__53615,i__53616,new_link_53791,path_match_53790,node_53789,seq__53646_53783__$1,temp__5753__auto___53782,path,map__53611,map__53611__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53789);
});})(seq__53646_53763,chunk__53650_53764,count__53651_53765,i__53652_53766,seq__53612,chunk__53614,count__53615,i__53616,new_link_53791,path_match_53790,node_53789,seq__53646_53783__$1,temp__5753__auto___53782,path,map__53611,map__53611__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53790], 0));

goog.dom.insertSiblingAfter(new_link_53791,node_53789);


var G__53792 = cljs.core.next(seq__53646_53783__$1);
var G__53793 = null;
var G__53794 = (0);
var G__53795 = (0);
seq__53646_53763 = G__53792;
chunk__53650_53764 = G__53793;
count__53651_53765 = G__53794;
i__53652_53766 = G__53795;
continue;
} else {
var G__53796 = cljs.core.next(seq__53646_53783__$1);
var G__53797 = null;
var G__53798 = (0);
var G__53799 = (0);
seq__53646_53763 = G__53796;
chunk__53650_53764 = G__53797;
count__53651_53765 = G__53798;
i__53652_53766 = G__53799;
continue;
}
} else {
var G__53800 = cljs.core.next(seq__53646_53783__$1);
var G__53801 = null;
var G__53802 = (0);
var G__53803 = (0);
seq__53646_53763 = G__53800;
chunk__53650_53764 = G__53801;
count__53651_53765 = G__53802;
i__53652_53766 = G__53803;
continue;
}
}
} else {
}
}
break;
}


var G__53804 = seq__53612;
var G__53805 = chunk__53614;
var G__53806 = count__53615;
var G__53807 = (i__53616 + (1));
seq__53612 = G__53804;
chunk__53614 = G__53805;
count__53615 = G__53806;
i__53616 = G__53807;
continue;
} else {
var G__53808 = seq__53612;
var G__53809 = chunk__53614;
var G__53810 = count__53615;
var G__53811 = (i__53616 + (1));
seq__53612 = G__53808;
chunk__53614 = G__53809;
count__53615 = G__53810;
i__53616 = G__53811;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53612);
if(temp__5753__auto__){
var seq__53612__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53612__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53612__$1);
var G__53812 = cljs.core.chunk_rest(seq__53612__$1);
var G__53813 = c__4649__auto__;
var G__53814 = cljs.core.count(c__4649__auto__);
var G__53815 = (0);
seq__53612 = G__53812;
chunk__53614 = G__53813;
count__53615 = G__53814;
i__53616 = G__53815;
continue;
} else {
var path = cljs.core.first(seq__53612__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53660_53816 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53664_53817 = null;
var count__53665_53818 = (0);
var i__53666_53819 = (0);
while(true){
if((i__53666_53819 < count__53665_53818)){
var node_53820 = chunk__53664_53817.cljs$core$IIndexed$_nth$arity$2(null,i__53666_53819);
if(cljs.core.not(node_53820.shadow$old)){
var path_match_53821 = shadow.cljs.devtools.client.browser.match_paths(node_53820.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53821)){
var new_link_53822 = (function (){var G__53672 = node_53820.cloneNode(true);
G__53672.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53821),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53672;
})();
(node_53820.shadow$old = true);

(new_link_53822.onload = ((function (seq__53660_53816,chunk__53664_53817,count__53665_53818,i__53666_53819,seq__53612,chunk__53614,count__53615,i__53616,new_link_53822,path_match_53821,node_53820,path,seq__53612__$1,temp__5753__auto__,map__53611,map__53611__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53820);
});})(seq__53660_53816,chunk__53664_53817,count__53665_53818,i__53666_53819,seq__53612,chunk__53614,count__53615,i__53616,new_link_53822,path_match_53821,node_53820,path,seq__53612__$1,temp__5753__auto__,map__53611,map__53611__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53821], 0));

goog.dom.insertSiblingAfter(new_link_53822,node_53820);


var G__53823 = seq__53660_53816;
var G__53824 = chunk__53664_53817;
var G__53825 = count__53665_53818;
var G__53826 = (i__53666_53819 + (1));
seq__53660_53816 = G__53823;
chunk__53664_53817 = G__53824;
count__53665_53818 = G__53825;
i__53666_53819 = G__53826;
continue;
} else {
var G__53827 = seq__53660_53816;
var G__53828 = chunk__53664_53817;
var G__53829 = count__53665_53818;
var G__53830 = (i__53666_53819 + (1));
seq__53660_53816 = G__53827;
chunk__53664_53817 = G__53828;
count__53665_53818 = G__53829;
i__53666_53819 = G__53830;
continue;
}
} else {
var G__53831 = seq__53660_53816;
var G__53832 = chunk__53664_53817;
var G__53833 = count__53665_53818;
var G__53834 = (i__53666_53819 + (1));
seq__53660_53816 = G__53831;
chunk__53664_53817 = G__53832;
count__53665_53818 = G__53833;
i__53666_53819 = G__53834;
continue;
}
} else {
var temp__5753__auto___53835__$1 = cljs.core.seq(seq__53660_53816);
if(temp__5753__auto___53835__$1){
var seq__53660_53836__$1 = temp__5753__auto___53835__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53660_53836__$1)){
var c__4649__auto___53837 = cljs.core.chunk_first(seq__53660_53836__$1);
var G__53838 = cljs.core.chunk_rest(seq__53660_53836__$1);
var G__53839 = c__4649__auto___53837;
var G__53840 = cljs.core.count(c__4649__auto___53837);
var G__53841 = (0);
seq__53660_53816 = G__53838;
chunk__53664_53817 = G__53839;
count__53665_53818 = G__53840;
i__53666_53819 = G__53841;
continue;
} else {
var node_53842 = cljs.core.first(seq__53660_53836__$1);
if(cljs.core.not(node_53842.shadow$old)){
var path_match_53843 = shadow.cljs.devtools.client.browser.match_paths(node_53842.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53843)){
var new_link_53844 = (function (){var G__53673 = node_53842.cloneNode(true);
G__53673.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53843),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53673;
})();
(node_53842.shadow$old = true);

(new_link_53844.onload = ((function (seq__53660_53816,chunk__53664_53817,count__53665_53818,i__53666_53819,seq__53612,chunk__53614,count__53615,i__53616,new_link_53844,path_match_53843,node_53842,seq__53660_53836__$1,temp__5753__auto___53835__$1,path,seq__53612__$1,temp__5753__auto__,map__53611,map__53611__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53842);
});})(seq__53660_53816,chunk__53664_53817,count__53665_53818,i__53666_53819,seq__53612,chunk__53614,count__53615,i__53616,new_link_53844,path_match_53843,node_53842,seq__53660_53836__$1,temp__5753__auto___53835__$1,path,seq__53612__$1,temp__5753__auto__,map__53611,map__53611__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53843], 0));

goog.dom.insertSiblingAfter(new_link_53844,node_53842);


var G__53845 = cljs.core.next(seq__53660_53836__$1);
var G__53846 = null;
var G__53847 = (0);
var G__53848 = (0);
seq__53660_53816 = G__53845;
chunk__53664_53817 = G__53846;
count__53665_53818 = G__53847;
i__53666_53819 = G__53848;
continue;
} else {
var G__53849 = cljs.core.next(seq__53660_53836__$1);
var G__53850 = null;
var G__53851 = (0);
var G__53852 = (0);
seq__53660_53816 = G__53849;
chunk__53664_53817 = G__53850;
count__53665_53818 = G__53851;
i__53666_53819 = G__53852;
continue;
}
} else {
var G__53853 = cljs.core.next(seq__53660_53836__$1);
var G__53854 = null;
var G__53855 = (0);
var G__53856 = (0);
seq__53660_53816 = G__53853;
chunk__53664_53817 = G__53854;
count__53665_53818 = G__53855;
i__53666_53819 = G__53856;
continue;
}
}
} else {
}
}
break;
}


var G__53857 = cljs.core.next(seq__53612__$1);
var G__53858 = null;
var G__53859 = (0);
var G__53860 = (0);
seq__53612 = G__53857;
chunk__53614 = G__53858;
count__53615 = G__53859;
i__53616 = G__53860;
continue;
} else {
var G__53861 = cljs.core.next(seq__53612__$1);
var G__53862 = null;
var G__53863 = (0);
var G__53864 = (0);
seq__53612 = G__53861;
chunk__53614 = G__53862;
count__53615 = G__53863;
i__53616 = G__53864;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__53674){
var map__53675 = p__53674;
var map__53675__$1 = cljs.core.__destructure_map(map__53675);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53675__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53676){
var map__53677 = p__53676;
var map__53677__$1 = cljs.core.__destructure_map(map__53677);
var _ = map__53677__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53677__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53678,done,error){
var map__53679 = p__53678;
var map__53679__$1 = cljs.core.__destructure_map(map__53679);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53679__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53680,done,error){
var map__53681 = p__53680;
var map__53681__$1 = cljs.core.__destructure_map(map__53681);
var msg = map__53681__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53681__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53681__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53681__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53682){
var map__53683 = p__53682;
var map__53683__$1 = cljs.core.__destructure_map(map__53683);
var src = map__53683__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53683__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53684 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53684) : done.call(null,G__53684));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53685){
var map__53686 = p__53685;
var map__53686__$1 = cljs.core.__destructure_map(map__53686);
var msg__$1 = map__53686__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53687){var ex = e53687;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53688){
var map__53689 = p__53688;
var map__53689__$1 = cljs.core.__destructure_map(map__53689);
var env = map__53689__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53689__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__53690){
var map__53691 = p__53690;
var map__53691__$1 = cljs.core.__destructure_map(map__53691);
var msg = map__53691__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53691__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53692){
var map__53693 = p__53692;
var map__53693__$1 = cljs.core.__destructure_map(map__53693);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53693__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53693__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__53694){
var map__53695 = p__53694;
var map__53695__$1 = cljs.core.__destructure_map(map__53695);
var svc = map__53695__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53695__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

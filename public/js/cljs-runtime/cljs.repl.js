goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52891){
var map__52892 = p__52891;
var map__52892__$1 = cljs.core.__destructure_map(map__52892);
var m = map__52892__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52892__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52892__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52893_53096 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52894_53097 = null;
var count__52895_53098 = (0);
var i__52896_53099 = (0);
while(true){
if((i__52896_53099 < count__52895_53098)){
var f_53100 = chunk__52894_53097.cljs$core$IIndexed$_nth$arity$2(null,i__52896_53099);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53100], 0));


var G__53101 = seq__52893_53096;
var G__53102 = chunk__52894_53097;
var G__53103 = count__52895_53098;
var G__53104 = (i__52896_53099 + (1));
seq__52893_53096 = G__53101;
chunk__52894_53097 = G__53102;
count__52895_53098 = G__53103;
i__52896_53099 = G__53104;
continue;
} else {
var temp__5753__auto___53105 = cljs.core.seq(seq__52893_53096);
if(temp__5753__auto___53105){
var seq__52893_53106__$1 = temp__5753__auto___53105;
if(cljs.core.chunked_seq_QMARK_(seq__52893_53106__$1)){
var c__4649__auto___53107 = cljs.core.chunk_first(seq__52893_53106__$1);
var G__53108 = cljs.core.chunk_rest(seq__52893_53106__$1);
var G__53109 = c__4649__auto___53107;
var G__53110 = cljs.core.count(c__4649__auto___53107);
var G__53111 = (0);
seq__52893_53096 = G__53108;
chunk__52894_53097 = G__53109;
count__52895_53098 = G__53110;
i__52896_53099 = G__53111;
continue;
} else {
var f_53112 = cljs.core.first(seq__52893_53106__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53112], 0));


var G__53113 = cljs.core.next(seq__52893_53106__$1);
var G__53114 = null;
var G__53115 = (0);
var G__53116 = (0);
seq__52893_53096 = G__53113;
chunk__52894_53097 = G__53114;
count__52895_53098 = G__53115;
i__52896_53099 = G__53116;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53117 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53117], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53117)))?cljs.core.second(arglists_53117):arglists_53117)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52897_53123 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52898_53124 = null;
var count__52899_53125 = (0);
var i__52900_53126 = (0);
while(true){
if((i__52900_53126 < count__52899_53125)){
var vec__52913_53127 = chunk__52898_53124.cljs$core$IIndexed$_nth$arity$2(null,i__52900_53126);
var name_53128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52913_53127,(0),null);
var map__52916_53129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52913_53127,(1),null);
var map__52916_53130__$1 = cljs.core.__destructure_map(map__52916_53129);
var doc_53131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52916_53130__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52916_53130__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53128], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53132], 0));

if(cljs.core.truth_(doc_53131)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53131], 0));
} else {
}


var G__53133 = seq__52897_53123;
var G__53134 = chunk__52898_53124;
var G__53135 = count__52899_53125;
var G__53136 = (i__52900_53126 + (1));
seq__52897_53123 = G__53133;
chunk__52898_53124 = G__53134;
count__52899_53125 = G__53135;
i__52900_53126 = G__53136;
continue;
} else {
var temp__5753__auto___53137 = cljs.core.seq(seq__52897_53123);
if(temp__5753__auto___53137){
var seq__52897_53138__$1 = temp__5753__auto___53137;
if(cljs.core.chunked_seq_QMARK_(seq__52897_53138__$1)){
var c__4649__auto___53139 = cljs.core.chunk_first(seq__52897_53138__$1);
var G__53140 = cljs.core.chunk_rest(seq__52897_53138__$1);
var G__53141 = c__4649__auto___53139;
var G__53142 = cljs.core.count(c__4649__auto___53139);
var G__53143 = (0);
seq__52897_53123 = G__53140;
chunk__52898_53124 = G__53141;
count__52899_53125 = G__53142;
i__52900_53126 = G__53143;
continue;
} else {
var vec__52919_53144 = cljs.core.first(seq__52897_53138__$1);
var name_53145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52919_53144,(0),null);
var map__52922_53146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52919_53144,(1),null);
var map__52922_53147__$1 = cljs.core.__destructure_map(map__52922_53146);
var doc_53148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52922_53147__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52922_53147__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53145], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53149], 0));

if(cljs.core.truth_(doc_53148)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53148], 0));
} else {
}


var G__53152 = cljs.core.next(seq__52897_53138__$1);
var G__53153 = null;
var G__53154 = (0);
var G__53155 = (0);
seq__52897_53123 = G__53152;
chunk__52898_53124 = G__53153;
count__52899_53125 = G__53154;
i__52900_53126 = G__53155;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__52924 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52925 = null;
var count__52926 = (0);
var i__52927 = (0);
while(true){
if((i__52927 < count__52926)){
var role = chunk__52925.cljs$core$IIndexed$_nth$arity$2(null,i__52927);
var temp__5753__auto___53158__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53158__$1)){
var spec_53159 = temp__5753__auto___53158__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53159)], 0));
} else {
}


var G__53160 = seq__52924;
var G__53161 = chunk__52925;
var G__53162 = count__52926;
var G__53163 = (i__52927 + (1));
seq__52924 = G__53160;
chunk__52925 = G__53161;
count__52926 = G__53162;
i__52927 = G__53163;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__52924);
if(temp__5753__auto____$1){
var seq__52924__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52924__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52924__$1);
var G__53165 = cljs.core.chunk_rest(seq__52924__$1);
var G__53166 = c__4649__auto__;
var G__53167 = cljs.core.count(c__4649__auto__);
var G__53168 = (0);
seq__52924 = G__53165;
chunk__52925 = G__53166;
count__52926 = G__53167;
i__52927 = G__53168;
continue;
} else {
var role = cljs.core.first(seq__52924__$1);
var temp__5753__auto___53171__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53171__$2)){
var spec_53174 = temp__5753__auto___53171__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53174)], 0));
} else {
}


var G__53175 = cljs.core.next(seq__52924__$1);
var G__53176 = null;
var G__53177 = (0);
var G__53178 = (0);
seq__52924 = G__53175;
chunk__52925 = G__53176;
count__52926 = G__53177;
i__52927 = G__53178;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__53183 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53184 = cljs.core.ex_cause(t);
via = G__53183;
t = G__53184;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__52935 = datafied_throwable;
var map__52935__$1 = cljs.core.__destructure_map(map__52935);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52935__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52935__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52935__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52936 = cljs.core.last(via);
var map__52936__$1 = cljs.core.__destructure_map(map__52936);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52936__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52936__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52936__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52937 = data;
var map__52937__$1 = cljs.core.__destructure_map(map__52937);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52937__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52937__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52937__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__52938 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__52938__$1 = cljs.core.__destructure_map(map__52938);
var top_data = map__52938__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52938__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__52943 = phase;
var G__52943__$1 = (((G__52943 instanceof cljs.core.Keyword))?G__52943.fqn:null);
switch (G__52943__$1) {
case "read-source":
var map__52957 = data;
var map__52957__$1 = cljs.core.__destructure_map(map__52957);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52957__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52957__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__52958 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__52958__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52958,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52958);
var G__52958__$2 = (cljs.core.truth_((function (){var fexpr__52959 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52959.cljs$core$IFn$_invoke$arity$1 ? fexpr__52959.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52959.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52958__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52958__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52958__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52958__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__52960 = top_data;
var G__52960__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52960,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52960);
var G__52960__$2 = (cljs.core.truth_((function (){var fexpr__52968 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52968.cljs$core$IFn$_invoke$arity$1 ? fexpr__52968.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52968.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52960__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52960__$1);
var G__52960__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52960__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52960__$2);
var G__52960__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52960__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52960__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52960__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52960__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__52969 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52969,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52969,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52969,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52969,(3),null);
var G__52979 = top_data;
var G__52979__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52979,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__52979);
var G__52979__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52979__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__52979__$1);
var G__52979__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52979__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__52979__$2);
var G__52979__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52979__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52979__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52979__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52979__$4;
}

break;
case "execution":
var vec__53002 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53002,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53002,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53002,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53002,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52934_SHARP_){
var or__4223__auto__ = (p1__52934_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__53014 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53014.cljs$core$IFn$_invoke$arity$1 ? fexpr__53014.cljs$core$IFn$_invoke$arity$1(p1__52934_SHARP_) : fexpr__53014.call(null,p1__52934_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__53015 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53015__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53015,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53015);
var G__53015__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53015__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53015__$1);
var G__53015__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53015__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53015__$2);
var G__53015__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53015__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53015__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53015__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53015__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52943__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53051){
var map__53052 = p__53051;
var map__53052__$1 = cljs.core.__destructure_map(map__53052);
var triage_data = map__53052__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53052__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__53054 = phase;
var G__53054__$1 = (((G__53054 instanceof cljs.core.Keyword))?G__53054.fqn:null);
switch (G__53054__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53055 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53056 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53057 = loc;
var G__53058 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53060_53194 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53061_53195 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53062_53196 = true;
var _STAR_print_fn_STAR__temp_val__53063_53197 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53062_53196);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53063_53197);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53041_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53041_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53061_53195);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53060_53194);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53055,G__53056,G__53057,G__53058) : format.call(null,G__53055,G__53056,G__53057,G__53058));

break;
case "macroexpansion":
var G__53064 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53065 = cause_type;
var G__53066 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53067 = loc;
var G__53068 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53064,G__53065,G__53066,G__53067,G__53068) : format.call(null,G__53064,G__53065,G__53066,G__53067,G__53068));

break;
case "compile-syntax-check":
var G__53069 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53070 = cause_type;
var G__53071 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53072 = loc;
var G__53073 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53069,G__53070,G__53071,G__53072,G__53073) : format.call(null,G__53069,G__53070,G__53071,G__53072,G__53073));

break;
case "compilation":
var G__53074 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53075 = cause_type;
var G__53076 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53077 = loc;
var G__53078 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53074,G__53075,G__53076,G__53077,G__53078) : format.call(null,G__53074,G__53075,G__53076,G__53077,G__53078));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53080 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53081 = symbol;
var G__53082 = loc;
var G__53083 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53084_53202 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53085_53203 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53086_53204 = true;
var _STAR_print_fn_STAR__temp_val__53087_53205 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53086_53204);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53087_53205);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53046_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53046_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53085_53203);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53084_53202);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53080,G__53081,G__53082,G__53083) : format.call(null,G__53080,G__53081,G__53082,G__53083));
} else {
var G__53089 = "Execution error%s at %s(%s).\n%s\n";
var G__53090 = cause_type;
var G__53091 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53092 = loc;
var G__53093 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53089,G__53090,G__53091,G__53092,G__53093) : format.call(null,G__53089,G__53090,G__53091,G__53092,G__53093));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53054__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

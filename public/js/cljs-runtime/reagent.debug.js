goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__55929__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__55929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55930__i = 0, G__55930__a = new Array(arguments.length -  0);
while (G__55930__i < G__55930__a.length) {G__55930__a[G__55930__i] = arguments[G__55930__i + 0]; ++G__55930__i;}
  args = new cljs.core.IndexedSeq(G__55930__a,0,null);
} 
return G__55929__delegate.call(this,args);};
G__55929.cljs$lang$maxFixedArity = 0;
G__55929.cljs$lang$applyTo = (function (arglist__55931){
var args = cljs.core.seq(arglist__55931);
return G__55929__delegate(args);
});
G__55929.cljs$core$IFn$_invoke$arity$variadic = G__55929__delegate;
return G__55929;
})()
);

(o.error = (function() { 
var G__55932__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__55932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55936__i = 0, G__55936__a = new Array(arguments.length -  0);
while (G__55936__i < G__55936__a.length) {G__55936__a[G__55936__i] = arguments[G__55936__i + 0]; ++G__55936__i;}
  args = new cljs.core.IndexedSeq(G__55936__a,0,null);
} 
return G__55932__delegate.call(this,args);};
G__55932.cljs$lang$maxFixedArity = 0;
G__55932.cljs$lang$applyTo = (function (arglist__55937){
var args = cljs.core.seq(arglist__55937);
return G__55932__delegate(args);
});
G__55932.cljs$core$IFn$_invoke$arity$variadic = G__55932__delegate;
return G__55932;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

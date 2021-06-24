goog.provide('app.core');
app.core.color_order = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","yellow","green","yellow"], null));
app.core.interval = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
app.core.start_clicked = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
app.core.first_to_end = (function app$core$first_to_end(col){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(col),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(col)], null));
});
app.core.start_timer = (function app$core$start_timer(){
var G__42289 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.core.start_clicked,(function (val){
return cljs.core.not(val);
}));
})();
var fexpr__42288 = cljs.core.reset_BANG_(app.core.interval,setInterval((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.core.color_order,app.core.first_to_end);
}),(1000)));
return (fexpr__42288.cljs$core$IFn$_invoke$arity$1 ? fexpr__42288.cljs$core$IFn$_invoke$arity$1(G__42289) : fexpr__42288.call(null,G__42289));
});
app.core.stop_timer = (function app$core$stop_timer(){
var G__42291 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.core.start_clicked,(function (val){
return cljs.core.not(val);
}));
})();
var fexpr__42290 = clearInterval(cljs.core.deref(app.core.interval));
return (fexpr__42290.cljs$core$IFn$_invoke$arity$1 ? fexpr__42290.cljs$core$IFn$_invoke$arity$1(G__42291) : fexpr__42290.call(null,G__42291));
});
app.core.start = (function app$core$start(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.core.start_timer,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(app.core.start_clicked)], null),"Start"], null)], null);
});
app.core.stop = (function app$core$stop(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.core.stop_timer,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(cljs.core.deref(app.core.start_clicked))], null),"Stop"], null)], null);
});
app.core.buttons = (function app$core$buttons(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-align","div.btn-align",-617094830),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.start], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.stop], null)], null);
});
app.core.traffic_lightning_item = (function app$core$traffic_lightning_item(active,color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.circle","div.circle",2134211799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,color))?color:["default-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join(''))], null)], null);
});
app.core.traffic_lightning = (function app$core$traffic_lightning(){
var active = cljs.core.first(cljs.core.deref(app.core.color_order));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.traffic-light","div.traffic-light",-797607275),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.traffic_lightning_item,active,"red"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.traffic_lightning_item,active,"yellow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.traffic_lightning_item,active,"green"], null)], null)], null);
});
app.core.app_container = (function app$core$app_container(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),console.log(app.core.start_clicked),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Traffic lightning"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.traffic_lightning], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.buttons], null)], null);
});
/**
 * Render the toplevel component for this app.
 */
app.core.render = (function app$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.app_container], null),document.getElementById("app"));
});
app.core.main = (function app$core$main(){
console.log("MAIN FN Reloaded");

return app.core.render();
});

//# sourceMappingURL=app.core.js.map

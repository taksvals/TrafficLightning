// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('react_dom');
app.core.global$module$react_dom = goog.global["ReactDOM"];
app.core.app_container = (function app$core$app_container(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Welcome!"], null)], null)], null);
});
/**
 * Render the toplevel component for this app.
 */
app.core.render = (function app$core$render(){
return app.core.node$module$react_dom.render(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.app_container], null),document.getElementById("app"));
});
app.core.main = (function app$core$main(){
console.log("MAIN FN Reloaded");

return app.core.render.call(null);
});

//# sourceMappingURL=core.js.map

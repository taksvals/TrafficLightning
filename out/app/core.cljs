(ns app.core (:require react-dom))

(defn app-container []
   [:<>
    [:div
     [:p "Welcome!"]]])

(defn ^:dev/after-load render
  "Render the toplevel component for this app." 
  [] 
  (react-dom/render [app-container]              
               (.getElementById js/document "app")))
 
 
 (defn main[]
   (js/console.log "MAIN FN Reloaded")
   (render))
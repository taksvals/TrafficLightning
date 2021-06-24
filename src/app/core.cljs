(ns app.core
  (:require [reagent.dom :as rdom])
  (:require [reagent.core :as r]))

(def color-order (r/atom ["red" "yellow" "green" "yellow"]))

(def interval (r/atom 0))

(def start-clicked (r/atom false))

(defn first-to-end[col]
  (concat (rest col) [(first col)]))


(defn start-timer []
  ((reset! interval (js/setInterval #(swap! color-order first-to-end) 1000))
   (#(swap! start-clicked (fn [val] (not val))))))

(defn stop-timer []
  ((js/clearInterval @interval)
  (#(swap! start-clicked (fn [val] (not val))))))


(defn start []
  [:div
   [:button.btn {:on-click start-timer :disabled @start-clicked} "Start"]])

(defn stop []
  [:div
   [:button.btn {:on-click stop-timer :disabled (not @start-clicked)} "Stop"]])

(defn buttons []
  [:div.btn-align
   [start]
   [stop]])

(defn traffic-lightning-item [active color]
   [:div.circle {:class (if (= active color)
                          color
                          (str "default-" color))}])

(defn traffic-lightning []
  (let [active (first @color-order)]
    [:<>
     [:div.traffic-light
      [traffic-lightning-item active "red"]
      [traffic-lightning-item active "yellow"]
      [traffic-lightning-item active "green"]]]))

(defn app-container []
   [:div.container
    (js/console.log start-clicked)
    [:h1 "Traffic lightning"]
    [traffic-lightning]
    [buttons]])

(defn ^:dev/after-load render
  "Render the toplevel component for this app." 
  [] 
  (rdom/render [app-container]              
               (.getElementById js/document "app")))
 
 
 (defn main[]
   (js/console.log "MAIN FN Reloaded")
   (render))
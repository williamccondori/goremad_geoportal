// Se agrega control de escala.
map.addControl(L.control.scale({
    position: 'bottomleft',
    imperial: true,
    metric: true,
    updateWhenIdle: true
}));
// Add reset view control.
L.control.resetView({
    position: "topleft",
    title: "VISTA INICIAL",
    cssClass: "fa fa fa-undo",
    content: ''
}).addTo(map);
// Se agrega control de pantalla completa.
L.control.fullscreen({
    position: "topleft",
    title: "PANTALLA COMPLETA",
    titleCancel: "SALIR DE LA PANTALLA COMPLETA",
    forceSeparateButton: true,
    forcePseudoFullscreen: false,
    fullscreenElement: false
}).addTo(map);
// Se agrega control de historico de vistas.
new L.HistoryControl({
    position: "bottomleft",
    backTooltip: 'VISTA ANTERIOR',
    forwardTooltip: 'VISTA SIGUIENTE',
    maxMovesToSave: 10,
}).addTo(map);
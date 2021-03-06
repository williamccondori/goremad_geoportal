/*
    Created:        2017-12-20 by James Austin - Trafford Data Lab
    Purpose:        Plugin for the Leaflet JavaScript library, displayed either in its own or another plugin's container, to [re]set the map view to preset coordinates and zoom level.
    Dependencies:   Leaflet.js (external library)
    Licence:        https://www.trafforddatalab.io/leaflet.resetview/LICENSE.txt
    Notes:          Content can be html or an icon etc. Values can be set via options or it can take the current map coordinates and zoom values upon initialisation
*/
L.Control.ResetView = L.Control.extend({
    options: {
        position: 'topleft',
        title: 'Reset map view',
        cssClass: '',
        content: '&larr;'
    },

    onAdd: function (map) {
        this._map = map;

        // Set centre and zoom options - can be supplied or obtained automatically from the current map state
        if (!this.options.center) {
            this.options.center = map.getCenter();
        }
        if (!this.options.zoom) {
            this.options.zoom = map.getZoom();
        }

        // Container for the control - either one passed in the options arguments or create a new one
        this._container = (!this.options.container) ? L.DomUtil.create('div', 'leaflet-bar') : this.options.container;

        // Create reset button as a link
        var link = L.DomUtil.create('a', this.options.cssClass, this._container);
        link.innerHTML = this.options.content;
        link.href = '#';
        link.title = this.options.title;

        L.DomEvent
            .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
            .on(link, 'click', L.DomEvent.stop)
            .on(link, 'click', this._reset, this)
            .on(link, 'click', this._refocusOnMap, this);

        return this._container;
    },

    _reset: function () {
        this._map.setView(this.options.center, this.options.zoom);
    }
});

L.control.resetView = function(options) {
    return new L.Control.ResetView(options);
};

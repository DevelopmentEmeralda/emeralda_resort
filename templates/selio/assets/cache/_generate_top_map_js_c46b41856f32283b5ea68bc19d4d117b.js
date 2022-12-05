


var markers = new Array();
var map;
var marker_clusterer ;
$(document).ready(function(){
    var myLocationEnabled = true;
    var style_map = mapStyle;
    var scrollwheelEnabled = true;

    
    if($('#main-map').length){    
        map = L.map('main-map', {
                        center: [-6.8616495, 107.4708045],
                        zoom: 8-2,
            scrollWheelZoom: scrollwheelEnabled,
            dragging: !L.Browser.mobile,
            tap: !L.Browser.mobile
        });     
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png').addTo(map);

                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-home"></i></div><div class="back face"> <i class="fa fa-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [-6.8616495, 107.4708045],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: House--><div class=\"infobox map-box\">    <a href=\"http://yplproduction.emeraldaresortofficial.com/index.php/property/35/en/janet_upslope\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"http://yplproduction.emeraldaresortofficial.com/strict_image_speed.php?d=575x500&f=pngwingcom.png&cut=true\" alt=\"Janet UpSlope\">        <div class=\"rate-info\">                    <h5>                                                Rp600.000.000,00                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Janet UpSlope</h3>            <span><i class=\"la la-map-marker\"></i>Jayamekar Padalarang</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-home"></i></div><div class="back face"> <i class="fa fa-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [-6.8616495, 107.4708045],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: House--><div class=\"infobox map-box\">    <a href=\"http://yplproduction.emeraldaresortofficial.com/index.php/property/34/en/janet_upslope\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"http://yplproduction.emeraldaresortofficial.com/strict_image_speed.php?d=575x500&f=view_1%20%282%29.jpg&cut=true\" alt=\"Janet UpSlope\">        <div class=\"rate-info\">                    <h5>                                                Rp600.000.000,00                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Janet UpSlope</h3>            <span><i class=\"la la-map-marker\"></i>Jayamekar Padalarang</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-home"></i></div><div class="back face"> <i class="fa fa-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [-6.8616495, 107.4708045],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: House--><div class=\"infobox map-box\">    <a href=\"http://yplproduction.emeraldaresortofficial.com/index.php/property/33/en/janet_upslope\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"http://yplproduction.emeraldaresortofficial.com/files/strict_cache/575x500no_image.webp\" alt=\"Janet UpSlope\">        <div class=\"rate-info\">                    <h5>                                                Rp600.000.000,00                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Janet UpSlope</h3>            <span><i class=\"la la-map-marker\"></i>Jayamekar Padalarang</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-home"></i></div><div class="back face"> <i class="fa fa-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [-6.8616495, 107.4708045],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: House--><div class=\"infobox map-box\">    <a href=\"http://yplproduction.emeraldaresortofficial.com/index.php/property/32/en/janet_upslope\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"http://yplproduction.emeraldaresortofficial.com/strict_image_speed.php?d=575x500&f=view_1%20%281%29.jpg&cut=true\" alt=\"Janet UpSlope\">        <div class=\"rate-info\">                    <h5>                                                Rp600.000.000,00                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Janet UpSlope</h3>            <span><i class=\"la la-map-marker\"></i>Jayamekar Padalarang</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                map.addLayer(clusters);   
        
                /* set center */
        if(markers.length){
            var limits_center = [];
            for (var i in markers) {
                if(typeof markers[i]['_latlng'] == 'undefined') continue;
                var latLngs = [ markers[i].getLatLng() ];
                limits_center.push(latLngs)
            };
            var bounds = L.latLngBounds(limits_center);
                            map.fitBounds(bounds);
                   }
                
        if(!markers.length){
                    }
    } 
    })


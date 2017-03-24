import { Component, OnInit } from '@angular/core';
import "leaflet";
// import * as leafletSemi from "leaflet-semi"
import "leaflet-curve";
import "leaflet-semicircle";
// import * as leaflet2 from "leaflet2";

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    constructor() { }

    ngOnInit() {

        //   const polylineOptions: L.PolylineOptions = {};
        //   const icon: L.Icon = L.icon({ iconUrl: 'foo' });
        //
        //   let markerClusterGroupOptions: L.MarkerClusterGroupOptions = {};
        //   markerClusterGroupOptions = {
        //       showCoverageOnHover: true,
        //       zoomToBoundsOnClick: false,
        //       spiderfyOnMaxZoom: true,
        //       removeOutsideVisibleBounds: false,
        //       animate: true,
        //       animateAddingMarkers: false,
        //       disableClusteringAtZoom: 12,
        //       maxClusterRadius: 40,
        //       polygonOptions: polylineOptions,
        //       singleMarkerMode: true,
        //       spiderLegPolylineOptions: polylineOptions,
        //       spiderfyDistanceMultiplier: 2,
        //       iconCreateFunction: (cluster: L.MarkerCluster) => {
        //           const childMarkers: L.Marker[] = cluster.getAllChildMarkers();
        //           const childCount: number = cluster.getChildCount();
        //           cluster.zoomToBounds();
        //           const bounds: L.LatLngBounds = cluster.getBounds();
        //           return icon;
        //       },
        //       chunkedLoading: false,
        //       chunkDelay: 100
        //   };
        //
        //   markerClusterGroupOptions.iconCreateFunction = (cluster: L.MarkerCluster) => {
        //       return L.divIcon();
        //   };
        //
        //   let markerClusterGroup: L.MarkerClusterGroup;
        //   markerClusterGroup = L.markerClusterGroup();
        //   markerClusterGroup = L.markerClusterGroup(markerClusterGroupOptions);
        //
        //   let map = L.map('map');
        //
        //   markerClusterGroup = markerClusterGroup.addTo(map);
        //   map = map
        //       .addLayer(markerClusterGroup)
        //       .removeLayer(markerClusterGroup);
        //
        //   const latLng: L.LatLng = L.latLng(10, 10);
        //
        //   const layer: L.Layer = L.marker(latLng);
        //   const layers: L.Layer[] = [layer];
        //
        //   let marker: L.Marker = L.marker(latLng);
        //   let markers: L.Marker[] = [marker];
        //
        //   const layerGroup: L.LayerGroup = L.layerGroup(layers);
        //
        //   marker = markerClusterGroup.getVisibleParent(marker);
        //
        //   markerClusterGroup = markerClusterGroup
        //       // Layers
        //       .addLayer(layer)
        //       .removeLayer(layer)
        //       .addLayers(layers)
        //       .removeLayers(layers)
        //       .clearLayers()
        //       // RefreshClusters
        //       .refreshClusters()
        //       .refreshClusters(layerGroup)
        //       .refreshClusters(marker)
        //       .refreshClusters(markers)
        //       .refreshClusters(markerClusterGroup)
        //       .refreshClusters({ id_any: layer });
        //
        //   const childCount: number = markerClusterGroup.getChildCount();
        //
        //   markers = markerClusterGroup.getAllChildMarkers();
        //
        //   markerClusterGroup.zoomToShowLayer(marker);
        //   markerClusterGroup.zoomToShowLayer(marker, () => {});
        //
        //   let hasLayer: boolean;
        //   hasLayer = markerClusterGroup.hasLayer(layer);
        //   hasLayer = markerClusterGroup.hasLayer(marker);

        let map = L.map('map').setView([46.05, 11.05], 10);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

        // L.semicircle([46.05, 11.05], 10000, {
        //     color: 'red',
        //     fillColor: '#f03',
        //     fillOpacity: 0.5
        // }).addTo(map);

        // L.semicircle([46.05, 11.05], 10000);



        L.circle([46.05, 11.05], 2000).addTo(map);


        // let test: L.Circle = L.circle([46.15, 11.05], 20000);

        // let test2: L.HolaTest;
        let test1: L.Circle;


        // let test3: L.SemiCircle;

        test1  = L.circle([46.15, 11.05], 20000);
        // test1.setDirection(16 * 30, 16 * 20);

        //.addTo(map);
        test1.setDirection(16 * 30, 16 * 20).addTo(map);

        //cubic bezier curve (and straight lines)
        // let pathTwo = L.curve(['M',[50.54136296522163,28.520507812500004],
        //                      'C',[52.214338608258224,28.564453125000004],
        //                          [48.45835188280866,33.57421875000001],
        //                          [50.680797145321655,33.83789062500001],
        //                      'V',[48.40003249610685],
        //                      'L',[47.45839225859763,31.201171875],
        //                          [48.40003249610685,28.564453125000004],'Z',
        //                      'M',[49.55372551347579,29.465332031250004],
        //                      'V',[48.7822260446217],
        //                      'H',[33.00292968750001],
        //                      'V',[49.55372551347579],'Z'],{color:'red',fill:true}).addTo(map);



        // let map = L.map('map').setView([46.05, 11.05], 5);
        //  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

         //cubic bezier curve (and straight lines)
         let pathTwo = L.curve(['M',[50.54136296522163,28.520507812500004],
         					   'C',[52.214338608258224,28.564453125000004],
         						   [48.45835188280866,33.57421875000001],
         						   [50.680797145321655,33.83789062500001],
         					   'V',[48.40003249610685],
         					   'L',[47.45839225859763,31.201171875],
         						   [48.40003249610685,28.564453125000004],'Z',
         					   'M',[49.55372551347579,29.465332031250004],
         					   'V',[48.7822260446217],
         					   'H',[33.00292968750001],
         					   'V',[49.55372551347579],'Z'],{color:'red',fill:true}).addTo(map);



         let pathThree = L.curve(['M',[49.35375571830993,6.240234375],
         						 'Q',[49.38237278700955,9.843750000000002],
         							 [47.754097979680026,9.360351562500002],
         							 [46.95026224218562,6.635742187500001],
         							 [45.67548217560647,8.437500000000002],
         							 [44.5278427984555,5.5810546875],
         							 [45.85941212790755,3.0761718750000004],
         							 [47.517200697839414,4.218750000000001],
         							 [49.009050809382074,3.7353515625000004],
         							 [48.45835188280866,5.800781250000001],
         							 [48.8936153614802,5.493164062500001],'Z'], {fill:true, color:'orange'}).addTo(map);

         function onMapClick(e) {
             console.log(e.latlng);
         }
         map.on('click', onMapClick);
         }

    }

var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_country_1 = new ol.format.GeoJSON();
var features_country_1 = format_country_1.readFeatures(json_country_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_country_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_country_1.addFeatures(features_country_1);
var lyr_country_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_country_1, 
                style: style_country_1,
                popuplayertitle: "country",
                interactive: true,
                title: '<img src="styles/legend/country_1.png" /> country'
            });
var format_road_2 = new ol.format.GeoJSON();
var features_road_2 = format_road_2.readFeatures(json_road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_2.addFeatures(features_road_2);
var lyr_road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_2, 
                style: style_road_2,
                popuplayertitle: "road",
                interactive: true,
                title: '<img src="styles/legend/road_2.png" /> road'
            });
var format_districtoffice_3 = new ol.format.GeoJSON();
var features_districtoffice_3 = format_districtoffice_3.readFeatures(json_districtoffice_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_districtoffice_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_districtoffice_3.addFeatures(features_districtoffice_3);
var lyr_districtoffice_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_districtoffice_3, 
                style: style_districtoffice_3,
                popuplayertitle: "district office",
                interactive: true,
                title: '<img src="styles/legend/districtoffice_3.png" /> district office'
            });
var format_HC_4 = new ol.format.GeoJSON();
var features_HC_4 = format_HC_4.readFeatures(json_HC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HC_4.addFeatures(features_HC_4);
var lyr_HC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HC_4, 
                style: style_HC_4,
                popuplayertitle: "H/C",
                interactive: true,
                title: '<img src="styles/legend/HC_4.png" /> H/C'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_country_1.setVisible(true);lyr_road_2.setVisible(true);lyr_districtoffice_3.setVisible(true);lyr_HC_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_country_1,lyr_road_2,lyr_districtoffice_3,lyr_HC_4];
lyr_country_1.set('fieldAliases', {'country_co': 'country_co', });
lyr_road_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'Distance': 'Distance', });
lyr_districtoffice_3.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', });
lyr_HC_4.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', });
lyr_country_1.set('fieldImages', {'country_co': 'TextEdit', });
lyr_road_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'Distance': 'TextEdit', });
lyr_districtoffice_3.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', });
lyr_HC_4.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', });
lyr_country_1.set('fieldLabels', {'country_co': 'no label', });
lyr_road_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'Distance': 'no label', });
lyr_districtoffice_3.set('fieldLabels', {'Name': 'no label', 'layer': 'no label', });
lyr_HC_4.set('fieldLabels', {'Name': 'no label', 'layer': 'no label', });
lyr_HC_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
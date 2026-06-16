var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Villages_2 = new ol.format.GeoJSON();
var features_Villages_2 = format_Villages_2.readFeatures(json_Villages_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villages_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_2.addFeatures(features_Villages_2);
var lyr_Villages_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villages_2, 
                style: style_Villages_2,
                popuplayertitle: 'Villages',
                interactive: true,
                title: '<img src="styles/legend/Villages_2.png" /> Villages'
            });
var format_Tikina_3 = new ol.format.GeoJSON();
var features_Tikina_3 = format_Tikina_3.readFeatures(json_Tikina_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikina_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikina_3.addFeatures(features_Tikina_3);
var lyr_Tikina_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikina_3, 
                style: style_Tikina_3,
                popuplayertitle: 'Tikina',
                interactive: true,
                title: '<img src="styles/legend/Tikina_3.png" /> Tikina'
            });
var format_AutomaticWeatherStation_4 = new ol.format.GeoJSON();
var features_AutomaticWeatherStation_4 = format_AutomaticWeatherStation_4.readFeatures(json_AutomaticWeatherStation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AutomaticWeatherStation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutomaticWeatherStation_4.addFeatures(features_AutomaticWeatherStation_4);
var lyr_AutomaticWeatherStation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AutomaticWeatherStation_4, 
                style: style_AutomaticWeatherStation_4,
                popuplayertitle: 'Automatic Weather Station',
                interactive: true,
                title: '<img src="styles/legend/AutomaticWeatherStation_4.png" /> Automatic Weather Station'
            });
var format_TelemeteredTippingBucketRaingaugeTB3_5 = new ol.format.GeoJSON();
var features_TelemeteredTippingBucketRaingaugeTB3_5 = format_TelemeteredTippingBucketRaingaugeTB3_5.readFeatures(json_TelemeteredTippingBucketRaingaugeTB3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TelemeteredTippingBucketRaingaugeTB3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TelemeteredTippingBucketRaingaugeTB3_5.addFeatures(features_TelemeteredTippingBucketRaingaugeTB3_5);
var lyr_TelemeteredTippingBucketRaingaugeTB3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TelemeteredTippingBucketRaingaugeTB3_5, 
                style: style_TelemeteredTippingBucketRaingaugeTB3_5,
                popuplayertitle: 'Telemetered Tipping Bucket Raingauge(TB3)',
                interactive: true,
                title: '<img src="styles/legend/TelemeteredTippingBucketRaingaugeTB3_5.png" /> Telemetered Tipping Bucket Raingauge(TB3)'
            });
var format_ManualSynopticStations_6 = new ol.format.GeoJSON();
var features_ManualSynopticStations_6 = format_ManualSynopticStations_6.readFeatures(json_ManualSynopticStations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManualSynopticStations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManualSynopticStations_6.addFeatures(features_ManualSynopticStations_6);
var lyr_ManualSynopticStations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManualSynopticStations_6, 
                style: style_ManualSynopticStations_6,
                popuplayertitle: 'Manual Synoptic Stations',
                interactive: true,
                title: '<img src="styles/legend/ManualSynopticStations_6.png" /> Manual Synoptic Stations'
            });
var format_ManualClimateStation_7 = new ol.format.GeoJSON();
var features_ManualClimateStation_7 = format_ManualClimateStation_7.readFeatures(json_ManualClimateStation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManualClimateStation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManualClimateStation_7.addFeatures(features_ManualClimateStation_7);
var lyr_ManualClimateStation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManualClimateStation_7, 
                style: style_ManualClimateStation_7,
                popuplayertitle: 'Manual Climate Station ',
                interactive: true,
                title: '<img src="styles/legend/ManualClimateStation_7.png" /> Manual Climate Station '
            });
var format_SectorOfficeManualRainfallStations_8 = new ol.format.GeoJSON();
var features_SectorOfficeManualRainfallStations_8 = format_SectorOfficeManualRainfallStations_8.readFeatures(json_SectorOfficeManualRainfallStations_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectorOfficeManualRainfallStations_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectorOfficeManualRainfallStations_8.addFeatures(features_SectorOfficeManualRainfallStations_8);
var lyr_SectorOfficeManualRainfallStations_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectorOfficeManualRainfallStations_8, 
                style: style_SectorOfficeManualRainfallStations_8,
                popuplayertitle: 'Sector Office Manual Rainfall Stations',
                interactive: true,
                title: '<img src="styles/legend/SectorOfficeManualRainfallStations_8.png" /> Sector Office Manual Rainfall Stations'
            });
var format_ManualRainfallStation_9 = new ol.format.GeoJSON();
var features_ManualRainfallStation_9 = format_ManualRainfallStation_9.readFeatures(json_ManualRainfallStation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManualRainfallStation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManualRainfallStation_9.addFeatures(features_ManualRainfallStation_9);
var lyr_ManualRainfallStation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManualRainfallStation_9, 
                style: style_ManualRainfallStation_9,
                popuplayertitle: 'Manual Rainfall Station ',
                interactive: true,
                title: '<img src="styles/legend/ManualRainfallStation_9.png" /> Manual Rainfall Station '
            });
var format_HydrometricStationsWaterlevel_10 = new ol.format.GeoJSON();
var features_HydrometricStationsWaterlevel_10 = format_HydrometricStationsWaterlevel_10.readFeatures(json_HydrometricStationsWaterlevel_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HydrometricStationsWaterlevel_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HydrometricStationsWaterlevel_10.addFeatures(features_HydrometricStationsWaterlevel_10);
var lyr_HydrometricStationsWaterlevel_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HydrometricStationsWaterlevel_10, 
                style: style_HydrometricStationsWaterlevel_10,
                popuplayertitle: 'Hydrometric Stations - Water level ',
                interactive: true,
                title: '<img src="styles/legend/HydrometricStationsWaterlevel_10.png" /> Hydrometric Stations - Water level '
            });

lyr_GoogleMaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Villages_2.setVisible(true);lyr_Tikina_3.setVisible(true);lyr_AutomaticWeatherStation_4.setVisible(true);lyr_TelemeteredTippingBucketRaingaugeTB3_5.setVisible(true);lyr_ManualSynopticStations_6.setVisible(true);lyr_ManualClimateStation_7.setVisible(true);lyr_SectorOfficeManualRainfallStations_8.setVisible(true);lyr_ManualRainfallStation_9.setVisible(true);lyr_HydrometricStationsWaterlevel_10.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_OpenStreetMap_1,lyr_Villages_2,lyr_Tikina_3,lyr_AutomaticWeatherStation_4,lyr_TelemeteredTippingBucketRaingaugeTB3_5,lyr_ManualSynopticStations_6,lyr_ManualClimateStation_7,lyr_SectorOfficeManualRainfallStations_8,lyr_ManualRainfallStation_9,lyr_HydrometricStationsWaterlevel_10];
lyr_Villages_2.set('fieldAliases', {'Country': 'Country', 'Yasana': 'Yasana', 'Tikina': 'Tikina', 'Village': 'Village', 'Lat': 'Lat', 'Lon': 'Lon', });
lyr_Tikina_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Tikina': 'Tikina', 'Province': 'Province', 'Division': 'Division', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_AutomaticWeatherStation_4.set('fieldAliases', {'Country': 'Country', 'Station Nu': 'Station Nu', 'Station Na': 'Station Na', 'Province': 'Province', 'Station St': 'Station St', 'Elevation': 'Elevation', 'lat': 'lat', 'Lon': 'Lon', 'Station Ty': 'Station Ty', });
lyr_TelemeteredTippingBucketRaingaugeTB3_5.set('fieldAliases', {'Station Number': 'Station Number', 'Station Name': 'Station Name', 'Station Type': 'Station Type', 'Province': 'Province', 'Authority': 'Authority', 'Station Start': 'Station Start', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Elevation(m)': 'Elevation(m)', });
lyr_ManualSynopticStations_6.set('fieldAliases', {'WMO Station ID/ Station Number': 'WMO Station ID/ Station Number', 'Station Name': 'Station Name', 'Station Type': 'Station Type', 'Province': 'Province', 'Authority': 'Authority', 'Station Start': 'Station Start', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Elevation(m)': 'Elevation(m)', });
lyr_ManualClimateStation_7.set('fieldAliases', {'Station Number': 'Station Number', 'Station Name': 'Station Name', 'Station Type': 'Station Type', 'Province': 'Province', 'Authority': 'Authority', 'Station Start': 'Station Start', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Elevation(m)': 'Elevation(m)', });
lyr_SectorOfficeManualRainfallStations_8.set('fieldAliases', {'Station Number': 'Station Number', 'Station Name': 'Station Name', 'Station Type': 'Station Type', 'Province': 'Province', 'Authority': 'Authority', 'Station Start': 'Station Start', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Elevation(m)': 'Elevation(m)', });
lyr_ManualRainfallStation_9.set('fieldAliases', {'Station Number': 'Station Number', 'field_2': 'field_2', 'Station Name': 'Station Name', 'Station Type': 'Station Type', 'field_5': 'field_5', 'field_6': 'field_6', 'Province': 'Province', 'field_8': 'field_8', 'Authority': 'Authority', 'field_10': 'field_10', 'Station Start': 'Station Start', 'field_12': 'field_12', 'Latitude': 'Latitude', 'field_14': 'field_14', 'Longitude': 'Longitude', 'field_16': 'field_16', 'Elevation(m)': 'Elevation(m)', });
lyr_HydrometricStationsWaterlevel_10.set('fieldAliases', {'Station Number': 'Station Number', 'Station Name': 'Station Name', 'field_3': 'field_3', 'field_4': 'field_4', 'Station Type': 'Station Type', 'Province': 'Province', 'field_7': 'field_7', 'Authority': 'Authority', 'field_9': 'field_9', 'Station Start': 'Station Start', 'field_11': 'field_11', 'Latitude': 'Latitude', 'field_13': 'field_13', 'Longitude': 'Longitude', 'field_15': 'field_15', 'Elevation(m)': 'Elevation(m)', });
lyr_Villages_2.set('fieldImages', {'Country': '', 'Yasana': '', 'Tikina': '', 'Village': '', 'Lat': '', 'Lon': '', });
lyr_Tikina_3.set('fieldImages', {'OBJECTID': '', 'Tikina': '', 'Province': '', 'Division': '', 'Longitude': '', 'Latitude': '', });
lyr_AutomaticWeatherStation_4.set('fieldImages', {'Country': '', 'Station Nu': '', 'Station Na': '', 'Province': '', 'Station St': '', 'Elevation': '', 'lat': '', 'Lon': '', 'Station Ty': '', });
lyr_TelemeteredTippingBucketRaingaugeTB3_5.set('fieldImages', {'Station Number': '', 'Station Name': '', 'Station Type': '', 'Province': '', 'Authority': '', 'Station Start': '', 'Latitude': '', 'Longitude': '', 'Elevation(m)': '', });
lyr_ManualSynopticStations_6.set('fieldImages', {'WMO Station ID/ Station Number': 'TextEdit', 'Station Name': 'TextEdit', 'Station Type': 'TextEdit', 'Province': 'TextEdit', 'Authority': 'TextEdit', 'Station Start': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Elevation(m)': 'TextEdit', });
lyr_ManualClimateStation_7.set('fieldImages', {'Station Number': '', 'Station Name': '', 'Station Type': '', 'Province': '', 'Authority': '', 'Station Start': '', 'Latitude': '', 'Longitude': '', 'Elevation(m)': '', });
lyr_SectorOfficeManualRainfallStations_8.set('fieldImages', {'Station Number': '', 'Station Name': '', 'Station Type': '', 'Province': '', 'Authority': '', 'Station Start': '', 'Latitude': '', 'Longitude': '', 'Elevation(m)': '', });
lyr_ManualRainfallStation_9.set('fieldImages', {'Station Number': '', 'field_2': '', 'Station Name': '', 'Station Type': '', 'field_5': '', 'field_6': '', 'Province': '', 'field_8': '', 'Authority': '', 'field_10': '', 'Station Start': '', 'field_12': '', 'Latitude': '', 'field_14': '', 'Longitude': '', 'field_16': '', 'Elevation(m)': '', });
lyr_HydrometricStationsWaterlevel_10.set('fieldImages', {'Station Number': '', 'Station Name': '', 'field_3': '', 'field_4': '', 'Station Type': '', 'Province': '', 'field_7': '', 'Authority': '', 'field_9': '', 'Station Start': '', 'field_11': '', 'Latitude': '', 'field_13': '', 'Longitude': '', 'field_15': '', 'Elevation(m)': '', });
lyr_Villages_2.set('fieldLabels', {'Country': 'inline label - always visible', 'Yasana': 'inline label - always visible', 'Tikina': 'inline label - always visible', 'Village': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', });
lyr_Tikina_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Tikina': 'inline label - always visible', 'Province': 'inline label - always visible', 'Division': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', });
lyr_AutomaticWeatherStation_4.set('fieldLabels', {'Country': 'inline label - always visible', 'Station Nu': 'inline label - always visible', 'Station Na': 'inline label - always visible', 'Province': 'inline label - always visible', 'Station St': 'inline label - always visible', 'Elevation': 'inline label - always visible', 'lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'Station Ty': 'inline label - always visible', });
lyr_TelemeteredTippingBucketRaingaugeTB3_5.set('fieldLabels', {'Station Number': 'inline label - always visible', 'Station Name': 'inline label - always visible', 'Station Type': 'inline label - always visible', 'Province': 'inline label - always visible', 'Authority': 'inline label - always visible', 'Station Start': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Elevation(m)': 'inline label - always visible', });
lyr_ManualSynopticStations_6.set('fieldLabels', {'WMO Station ID/ Station Number': 'inline label - always visible', 'Station Name': 'inline label - always visible', 'Station Type': 'inline label - always visible', 'Province': 'inline label - always visible', 'Authority': 'inline label - always visible', 'Station Start': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Elevation(m)': 'inline label - always visible', });
lyr_ManualClimateStation_7.set('fieldLabels', {'Station Number': 'inline label - always visible', 'Station Name': 'inline label - always visible', 'Station Type': 'inline label - always visible', 'Province': 'inline label - always visible', 'Authority': 'inline label - always visible', 'Station Start': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Elevation(m)': 'inline label - always visible', });
lyr_SectorOfficeManualRainfallStations_8.set('fieldLabels', {'Station Number': 'inline label - always visible', 'Station Name': 'inline label - always visible', 'Station Type': 'inline label - always visible', 'Province': 'inline label - always visible', 'Authority': 'inline label - always visible', 'Station Start': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Elevation(m)': 'inline label - always visible', });
lyr_ManualRainfallStation_9.set('fieldLabels', {'Station Number': 'inline label - always visible', 'field_2': 'inline label - always visible', 'Station Name': 'inline label - always visible', 'Station Type': 'inline label - always visible', 'field_5': 'inline label - always visible', 'field_6': 'inline label - always visible', 'Province': 'inline label - always visible', 'field_8': 'inline label - always visible', 'Authority': 'inline label - always visible', 'field_10': 'inline label - always visible', 'Station Start': 'inline label - always visible', 'field_12': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'field_14': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'field_16': 'inline label - always visible', 'Elevation(m)': 'inline label - always visible', });
lyr_HydrometricStationsWaterlevel_10.set('fieldLabels', {'Station Number': 'inline label - always visible', 'Station Name': 'inline label - always visible', 'field_3': 'inline label - always visible', 'field_4': 'inline label - always visible', 'Station Type': 'inline label - always visible', 'Province': 'inline label - always visible', 'field_7': 'inline label - always visible', 'Authority': 'inline label - always visible', 'field_9': 'inline label - always visible', 'Station Start': 'inline label - always visible', 'field_11': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'field_13': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'field_15': 'inline label - always visible', 'Elevation(m)': 'inline label - always visible', });
lyr_HydrometricStationsWaterlevel_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
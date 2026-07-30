var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 0.609000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Area_1 = new ol.format.GeoJSON();
var features_Area_1 = format_Area_1.readFeatures(json_Area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_1.addFeatures(features_Area_1);
var lyr_Area_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_1, 
                style: style_Area_1,
                popuplayertitle: 'Area',
                interactive: false,
    title: 'Area<br />\
    <img src="styles/legend/Area_1_0.png" /> Mer<br />\
    <img src="styles/legend/Area_1_1.png" /> Terre<br />' });
var format_Building_2 = new ol.format.GeoJSON();
var features_Building_2 = format_Building_2.readFeatures(json_Building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_2.addFeatures(features_Building_2);
var lyr_Building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_2, 
                style: style_Building_2,
                popuplayertitle: 'Building',
                interactive: false,
                title: '<img src="styles/legend/Building_2.png" /> Building'
            });
var format_Roads_3 = new ol.format.GeoJSON();
var features_Roads_3 = format_Roads_3.readFeatures(json_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_3.addFeatures(features_Roads_3);
var lyr_Roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_3, 
                style: style_Roads_3,
                popuplayertitle: 'Roads',
                interactive: false,
                title: '<img src="styles/legend/Roads_3.png" /> Roads'
            });
var format_Pompier_4 = new ol.format.GeoJSON();
var features_Pompier_4 = format_Pompier_4.readFeatures(json_Pompier_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pompier_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pompier_4.addFeatures(features_Pompier_4);
var lyr_Pompier_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pompier_4, 
                style: style_Pompier_4,
                popuplayertitle: 'Pompier',
                interactive: false,
                title: '<img src="styles/legend/Pompier_4.png" /> Pompier'
            });
var format_Offices_5 = new ol.format.GeoJSON();
var features_Offices_5 = format_Offices_5.readFeatures(json_Offices_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Offices_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offices_5.addFeatures(features_Offices_5);
var lyr_Offices_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Offices_5, 
                style: style_Offices_5,
                popuplayertitle: 'Offices',
                interactive: false,
                title: '<img src="styles/legend/Offices_5.png" /> Offices'
            });
var format_YachtingVillage_6 = new ol.format.GeoJSON();
var features_YachtingVillage_6 = format_YachtingVillage_6.readFeatures(json_YachtingVillage_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YachtingVillage_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YachtingVillage_6.addFeatures(features_YachtingVillage_6);
var lyr_YachtingVillage_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YachtingVillage_6, 
                style: style_YachtingVillage_6,
                popuplayertitle: 'Yachting Village',
                interactive: false,
                title: '<img src="styles/legend/YachtingVillage_6.png" /> Yachting Village'
            });
var format_PaintCabin_7 = new ol.format.GeoJSON();
var features_PaintCabin_7 = format_PaintCabin_7.readFeatures(json_PaintCabin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaintCabin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaintCabin_7.addFeatures(features_PaintCabin_7);
var lyr_PaintCabin_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaintCabin_7, 
                style: style_PaintCabin_7,
                popuplayertitle: 'Paint Cabin',
                interactive: false,
                title: '<img src="styles/legend/PaintCabin_7.png" /> Paint Cabin'
            });
var format_Nef_8 = new ol.format.GeoJSON();
var features_Nef_8 = format_Nef_8.readFeatures(json_Nef_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nef_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nef_8.addFeatures(features_Nef_8);
var lyr_Nef_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nef_8, 
                style: style_Nef_8,
                popuplayertitle: 'Nef',
                interactive: false,
                title: '<img src="styles/legend/Nef_8.png" /> Nef'
            });
var format_HardstandingArea_9 = new ol.format.GeoJSON();
var features_HardstandingArea_9 = format_HardstandingArea_9.readFeatures(json_HardstandingArea_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HardstandingArea_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HardstandingArea_9.addFeatures(features_HardstandingArea_9);
var lyr_HardstandingArea_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HardstandingArea_9, 
                style: style_HardstandingArea_9,
                popuplayertitle: 'Hardstanding Area',
                interactive: false,
                title: '<img src="styles/legend/HardstandingArea_9.png" /> Hardstanding Area'
            });
var format_Drydock_10 = new ol.format.GeoJSON();
var features_Drydock_10 = format_Drydock_10.readFeatures(json_Drydock_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drydock_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drydock_10.addFeatures(features_Drydock_10);
var lyr_Drydock_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drydock_10, 
                style: style_Drydock_10,
                popuplayertitle: 'Dry dock',
                interactive: false,
                title: '<img src="styles/legend/Drydock_10.png" /> Dry dock'
            });
var format_Parking_11 = new ol.format.GeoJSON();
var features_Parking_11 = format_Parking_11.readFeatures(json_Parking_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parking_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parking_11.addFeatures(features_Parking_11);
var lyr_Parking_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parking_11, 
                style: style_Parking_11,
                popuplayertitle: 'Parking',
                interactive: false,
                title: '<img src="styles/legend/Parking_11.png" /> Parking'
            });
var format_Parkingpoints_12 = new ol.format.GeoJSON();
var features_Parkingpoints_12 = format_Parkingpoints_12.readFeatures(json_Parkingpoints_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkingpoints_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkingpoints_12.addFeatures(features_Parkingpoints_12);
var lyr_Parkingpoints_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkingpoints_12, 
                style: style_Parkingpoints_12,
                popuplayertitle: 'Parking points',
                interactive: false,
    title: 'Parking points<br />\
    <img src="styles/legend/Parkingpoints_12_0.png" /> Moto<br />\
    <img src="styles/legend/Parkingpoints_12_1.png" /> Voiture<br />\
    <img src="styles/legend/Parkingpoints_12_2.png" /> Voiture Elec<br />' });
var format_AOTMB92_13 = new ol.format.GeoJSON();
var features_AOTMB92_13 = format_AOTMB92_13.readFeatures(json_AOTMB92_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOTMB92_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOTMB92_13.addFeatures(features_AOTMB92_13);
var lyr_AOTMB92_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOTMB92_13, 
                style: style_AOTMB92_13,
                popuplayertitle: 'AOT MB92',
                interactive: false,
                title: '<img src="styles/legend/AOTMB92_13.png" /> AOT MB92'
            });
var format_MB92WorkshopOffices_14 = new ol.format.GeoJSON();
var features_MB92WorkshopOffices_14 = format_MB92WorkshopOffices_14.readFeatures(json_MB92WorkshopOffices_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MB92WorkshopOffices_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MB92WorkshopOffices_14.addFeatures(features_MB92WorkshopOffices_14);
var lyr_MB92WorkshopOffices_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MB92WorkshopOffices_14, 
                style: style_MB92WorkshopOffices_14,
                popuplayertitle: 'MB92 Workshop & Offices',
                interactive: false,
    title: 'MB92 Workshop & Offices<br />\
    <img src="styles/legend/MB92WorkshopOffices_14_0.png" /> Algeco<br />\
    <img src="styles/legend/MB92WorkshopOffices_14_1.png" /> Atelier<br />\
    <img src="styles/legend/MB92WorkshopOffices_14_2.png" /> Main Office<br />' });
var format_Stairs_15 = new ol.format.GeoJSON();
var features_Stairs_15 = format_Stairs_15.readFeatures(json_Stairs_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stairs_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stairs_15.addFeatures(features_Stairs_15);
var lyr_Stairs_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stairs_15,
maxResolution:0.5600893230452393,
 
                style: style_Stairs_15,
                popuplayertitle: 'Stairs',
                interactive: false,
    title: 'Stairs<br />\
    <img src="styles/legend/Stairs_15_0.png" /> Lift<br />\
    <img src="styles/legend/Stairs_15_1.png" /> Stair<br />' });
var format_WasteCollectionPoint_16 = new ol.format.GeoJSON();
var features_WasteCollectionPoint_16 = format_WasteCollectionPoint_16.readFeatures(json_WasteCollectionPoint_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WasteCollectionPoint_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WasteCollectionPoint_16.addFeatures(features_WasteCollectionPoint_16);
var lyr_WasteCollectionPoint_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WasteCollectionPoint_16, 
                style: style_WasteCollectionPoint_16,
                popuplayertitle: 'Waste Collection Point',
                interactive: false,
                title: '<img src="styles/legend/WasteCollectionPoint_16.png" /> Waste Collection Point'
            });
var format_WasteCollection_17 = new ol.format.GeoJSON();
var features_WasteCollection_17 = format_WasteCollection_17.readFeatures(json_WasteCollection_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WasteCollection_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WasteCollection_17.addFeatures(features_WasteCollection_17);
var lyr_WasteCollection_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WasteCollection_17, 
                style: style_WasteCollection_17,
                popuplayertitle: 'Waste Collection',
                interactive: false,
                title: '<img src="styles/legend/WasteCollection_17.png" /> Waste Collection'
            });
var format_gantry_crane_18 = new ol.format.GeoJSON();
var features_gantry_crane_18 = format_gantry_crane_18.readFeatures(json_gantry_crane_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gantry_crane_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gantry_crane_18.addFeatures(features_gantry_crane_18);
var lyr_gantry_crane_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gantry_crane_18, 
                style: style_gantry_crane_18,
                popuplayertitle: 'gantry_crane',
                interactive: false,
                title: '<img src="styles/legend/gantry_crane_18.png" /> gantry_crane'
            });
var format_Productions_19 = new ol.format.GeoJSON();
var features_Productions_19 = format_Productions_19.readFeatures(json_Productions_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Productions_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Productions_19.addFeatures(features_Productions_19);
var lyr_Productions_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Productions_19, 
                style: style_Productions_19,
                popuplayertitle: 'Productions',
                interactive: true,
    title: 'Productions<br />\
    <img src="styles/legend/Productions_19_0.png" /> Composite<br />\
    <img src="styles/legend/Productions_19_1.png" /> Mécanique<br />\
    <img src="styles/legend/Productions_19_2.png" /> Menuiserie<br />\
    <img src="styles/legend/Productions_19_3.png" /> Système<br />\
    <img src="styles/legend/Productions_19_4.png" /> Production Main Office<br />\
    <img src="styles/legend/Productions_19_5.png" /> Technical Office<br />' });
var format_ProjectManagementAdministration_20 = new ol.format.GeoJSON();
var features_ProjectManagementAdministration_20 = format_ProjectManagementAdministration_20.readFeatures(json_ProjectManagementAdministration_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectManagementAdministration_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectManagementAdministration_20.addFeatures(features_ProjectManagementAdministration_20);
var lyr_ProjectManagementAdministration_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectManagementAdministration_20, 
                style: style_ProjectManagementAdministration_20,
                popuplayertitle: 'Project Management & Administration',
                interactive: true,
    title: 'Project Management & Administration<br />\
    <img src="styles/legend/ProjectManagementAdministration_20_0.png" /> Project Admin<br />\
    <img src="styles/legend/ProjectManagementAdministration_20_1.png" /> PM Office 300T<br />\
    <img src="styles/legend/ProjectManagementAdministration_20_2.png" /> PM Office 2000T<br />\
    <img src="styles/legend/ProjectManagementAdministration_20_3.png" /> PM Office Dry Dock<br />\
    <img src="styles/legend/ProjectManagementAdministration_20_4.png" /> PM Office Atlas<br />\
    <img src="styles/legend/ProjectManagementAdministration_20_5.png" /> Coating Department<br />\
    <img src="styles/legend/ProjectManagementAdministration_20_6.png" /> Interior Department<br />\
    <img src="styles/legend/ProjectManagementAdministration_20_7.png" /> CSE<br />' });
var format_Operation_21 = new ol.format.GeoJSON();
var features_Operation_21 = format_Operation_21.readFeatures(json_Operation_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Operation_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Operation_21.addFeatures(features_Operation_21);
var lyr_Operation_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Operation_21, 
                style: style_Operation_21,
                popuplayertitle: 'Operation',
                interactive: true,
    title: 'Operation<br />\
    <img src="styles/legend/Operation_21_0.png" /> Dockage<br />\
    <img src="styles/legend/Operation_21_1.png" /> Eléctricité<br />\
    <img src="styles/legend/Operation_21_2.png" /> Logistique<br />\
    <img src="styles/legend/Operation_21_3.png" /> Maintenance<br />\
    <img src="styles/legend/Operation_21_4.png" /> Plomberie<br />\
    <img src="styles/legend/Operation_21_5.png" /> Waste management<br />\
    <img src="styles/legend/Operation_21_6.png" /> Operation Main Office<br />' });
var format_SalesCustomerRelations_22 = new ol.format.GeoJSON();
var features_SalesCustomerRelations_22 = format_SalesCustomerRelations_22.readFeatures(json_SalesCustomerRelations_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SalesCustomerRelations_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SalesCustomerRelations_22.addFeatures(features_SalesCustomerRelations_22);
var lyr_SalesCustomerRelations_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SalesCustomerRelations_22, 
                style: style_SalesCustomerRelations_22,
                popuplayertitle: 'Sales & Customer Relations',
                interactive: true,
    title: 'Sales & Customer Relations<br />\
    <img src="styles/legend/SalesCustomerRelations_22_0.png" /> Commercial<br />\
    <img src="styles/legend/SalesCustomerRelations_22_1.png" /> Communication & Team Care<br />\
    <img src="styles/legend/SalesCustomerRelations_22_2.png" /> Contract<br />\
    <img src="styles/legend/SalesCustomerRelations_22_3.png" /> Customer care<br />\
    <img src="styles/legend/SalesCustomerRelations_22_4.png" /> pre-project/ quotation<br />' });
var format_Procurement_23 = new ol.format.GeoJSON();
var features_Procurement_23 = format_Procurement_23.readFeatures(json_Procurement_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Procurement_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Procurement_23.addFeatures(features_Procurement_23);
var lyr_Procurement_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Procurement_23, 
                style: style_Procurement_23,
                popuplayertitle: 'Procurement',
                interactive: true,
    title: 'Procurement<br />\
    <img src="styles/legend/Procurement_23_0.png" /> Achat<br />\
    <img src="styles/legend/Procurement_23_1.png" /> Magasin/Store<br />' });
var format_Facilities_24 = new ol.format.GeoJSON();
var features_Facilities_24 = format_Facilities_24.readFeatures(json_Facilities_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Facilities_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Facilities_24.addFeatures(features_Facilities_24);
var lyr_Facilities_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Facilities_24, 
                style: style_Facilities_24,
                popuplayertitle: 'Facilities',
                interactive: true,
    title: 'Facilities<br />\
    <img src="styles/legend/Facilities_24_0.png" /> Accueil et access<br />\
    <img src="styles/legend/Facilities_24_1.png" /> Facilities Director<br />' });
var format_IT_25 = new ol.format.GeoJSON();
var features_IT_25 = format_IT_25.readFeatures(json_IT_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IT_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IT_25.addFeatures(features_IT_25);
var lyr_IT_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IT_25, 
                style: style_IT_25,
                popuplayertitle: 'IT',
                interactive: true,
    title: 'IT<br />\
    <img src="styles/legend/IT_25_0.png" /> IT<br />' });
var format_HSE_26 = new ol.format.GeoJSON();
var features_HSE_26 = format_HSE_26.readFeatures(json_HSE_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HSE_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HSE_26.addFeatures(features_HSE_26);
var lyr_HSE_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HSE_26, 
                style: style_HSE_26,
                popuplayertitle: 'HSE',
                interactive: true,
    title: 'HSE<br />\
    <img src="styles/legend/HSE_26_0.png" /> HSE Office<br />\
    <img src="styles/legend/HSE_26_1.png" /> HSE  Director<br />' });
var format_HumanResourcesLearning_27 = new ol.format.GeoJSON();
var features_HumanResourcesLearning_27 = format_HumanResourcesLearning_27.readFeatures(json_HumanResourcesLearning_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HumanResourcesLearning_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HumanResourcesLearning_27.addFeatures(features_HumanResourcesLearning_27);
var lyr_HumanResourcesLearning_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HumanResourcesLearning_27, 
                style: style_HumanResourcesLearning_27,
                popuplayertitle: 'Human Resources & Learning',
                interactive: true,
    title: 'Human Resources & Learning<br />\
    <img src="styles/legend/HumanResourcesLearning_27_0.png" /> MB92 academy<br />\
    <img src="styles/legend/HumanResourcesLearning_27_1.png" /> RH<br />\
    <img src="styles/legend/HumanResourcesLearning_27_2.png" /> Team Care<br />' });
var format_ExecutiveManagement_28 = new ol.format.GeoJSON();
var features_ExecutiveManagement_28 = format_ExecutiveManagement_28.readFeatures(json_ExecutiveManagement_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExecutiveManagement_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExecutiveManagement_28.addFeatures(features_ExecutiveManagement_28);
var lyr_ExecutiveManagement_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExecutiveManagement_28, 
                style: style_ExecutiveManagement_28,
                popuplayertitle: 'Executive Management',
                interactive: true,
    title: 'Executive Management<br />\
    <img src="styles/legend/ExecutiveManagement_28_0.png" /> Group CEO<br />\
    <img src="styles/legend/ExecutiveManagement_28_1.png" /> LCT CEO COO<br />\
    <img src="styles/legend/ExecutiveManagement_28_2.png" /> CSE<br />' });
var group_CorporateServices = new ol.layer.Group({
                                layers: [lyr_Procurement_23,lyr_Facilities_24,lyr_IT_25,lyr_HSE_26,lyr_HumanResourcesLearning_27,],
                                fold: 'close',
                                title: 'Corporate Services'});
var group_Gantrycrane = new ol.layer.Group({
                                layers: [lyr_gantry_crane_18,],
                                fold: 'close',
                                title: ''});
var group_WasteCollectionPoint = new ol.layer.Group({
                                layers: [lyr_WasteCollectionPoint_16,lyr_WasteCollection_17,],
                                fold: 'close',
                                title: ''});
var group_MB92Facilities = new ol.layer.Group({
                                layers: [lyr_AOTMB92_13,lyr_MB92WorkshopOffices_14,lyr_Stairs_15,],
                                fold: 'close',
                                title: ''});
var group_Parking = new ol.layer.Group({
                                layers: [lyr_Parking_11,lyr_Parkingpoints_12,],
                                fold: 'close',
                                title: ''});
var group_LCSFacilities = new ol.layer.Group({
                                layers: [lyr_Pompier_4,lyr_Offices_5,lyr_YachtingVillage_6,lyr_PaintCabin_7,lyr_Nef_8,lyr_HardstandingArea_9,lyr_Drydock_10,],
                                fold: 'close',
                                title: ''});
var group_0Fonddecarte = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_Area_1,lyr_Building_2,lyr_Roads_3,],
                                fold: 'close',
                                title: ''});

lyr_OSMStandard_0.setVisible(true);lyr_Area_1.setVisible(true);lyr_Building_2.setVisible(true);lyr_Roads_3.setVisible(true);lyr_Pompier_4.setVisible(true);lyr_Offices_5.setVisible(true);lyr_YachtingVillage_6.setVisible(true);lyr_PaintCabin_7.setVisible(true);lyr_Nef_8.setVisible(true);lyr_HardstandingArea_9.setVisible(true);lyr_Drydock_10.setVisible(true);lyr_Parking_11.setVisible(true);lyr_Parkingpoints_12.setVisible(true);lyr_AOTMB92_13.setVisible(true);lyr_MB92WorkshopOffices_14.setVisible(true);lyr_Stairs_15.setVisible(true);lyr_WasteCollectionPoint_16.setVisible(true);lyr_WasteCollection_17.setVisible(true);lyr_gantry_crane_18.setVisible(true);lyr_Productions_19.setVisible(false);lyr_ProjectManagementAdministration_20.setVisible(false);lyr_Operation_21.setVisible(false);lyr_SalesCustomerRelations_22.setVisible(false);lyr_Procurement_23.setVisible(false);lyr_Facilities_24.setVisible(false);lyr_IT_25.setVisible(false);lyr_HSE_26.setVisible(false);lyr_HumanResourcesLearning_27.setVisible(false);lyr_ExecutiveManagement_28.setVisible(false);
var layersList = [group_0Fonddecarte,group_LCSFacilities,group_Parking,group_MB92Facilities,group_WasteCollectionPoint,group_Gantrycrane,lyr_Productions_19,lyr_ProjectManagementAdministration_20,lyr_Operation_21,lyr_SalesCustomerRelations_22,group_CorporateServices,lyr_ExecutiveManagement_28];
lyr_Area_1.set('fieldAliases', {'id': 'id', 'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Building_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Roads_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Pompier_4.set('fieldAliases', {'Text': 'Text', 'Url': 'Url', });
lyr_Offices_5.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_YachtingVillage_6.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_PaintCabin_7.set('fieldAliases', {'Zone': 'Zone', });
lyr_Nef_8.set('fieldAliases', {'Zone': 'Zone', });
lyr_HardstandingArea_9.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_Drydock_10.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_Parking_11.set('fieldAliases', {'id': 'id', 'Parking': 'Parking', });
lyr_Parkingpoints_12.set('fieldAliases', {'id': 'id', 'Parking': 'Parking', });
lyr_AOTMB92_13.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_MB92WorkshopOffices_14.set('fieldAliases', {'Type': 'Type', });
lyr_Stairs_15.set('fieldAliases', {'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_WasteCollectionPoint_16.set('fieldAliases', {'Indic': 'Indic', });
lyr_WasteCollection_17.set('fieldAliases', {'Indic': 'Indic', });
lyr_gantry_crane_18.set('fieldAliases', {'id': 'id', });
lyr_Productions_19.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_ProjectManagementAdministration_20.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_Operation_21.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_SalesCustomerRelations_22.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_Procurement_23.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_Facilities_24.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_IT_25.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_HSE_26.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_HumanResourcesLearning_27.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_ExecutiveManagement_28.set('fieldAliases', {'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', });
lyr_Area_1.set('fieldImages', {'id': 'TextEdit', 'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Building_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Roads_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Pompier_4.set('fieldImages', {'Text': 'TextEdit', 'Url': 'TextEdit', });
lyr_Offices_5.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_YachtingVillage_6.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_PaintCabin_7.set('fieldImages', {'Zone': 'TextEdit', });
lyr_Nef_8.set('fieldImages', {'Zone': 'TextEdit', });
lyr_HardstandingArea_9.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_Drydock_10.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_Parking_11.set('fieldImages', {'id': 'TextEdit', 'Parking': 'TextEdit', });
lyr_Parkingpoints_12.set('fieldImages', {'id': 'TextEdit', 'Parking': 'TextEdit', });
lyr_AOTMB92_13.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_MB92WorkshopOffices_14.set('fieldImages', {'Type': 'TextEdit', });
lyr_Stairs_15.set('fieldImages', {'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_WasteCollectionPoint_16.set('fieldImages', {'Indic': 'TextEdit', });
lyr_WasteCollection_17.set('fieldImages', {'Indic': 'TextEdit', });
lyr_gantry_crane_18.set('fieldImages', {'id': 'TextEdit', });
lyr_Productions_19.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_ProjectManagementAdministration_20.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_Operation_21.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_SalesCustomerRelations_22.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_Procurement_23.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_Facilities_24.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_IT_25.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_HSE_26.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_HumanResourcesLearning_27.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_ExecutiveManagement_28.set('fieldImages', {'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', });
lyr_Area_1.set('fieldLabels', {'id': 'no label', 'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Building_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Roads_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Pompier_4.set('fieldLabels', {'Text': 'no label', 'Url': 'no label', });
lyr_Offices_5.set('fieldLabels', {'Zone': 'no label', 'Url': 'no label', });
lyr_YachtingVillage_6.set('fieldLabels', {'Zone': 'no label', 'Url': 'no label', });
lyr_PaintCabin_7.set('fieldLabels', {'Zone': 'no label', });
lyr_Nef_8.set('fieldLabels', {'Zone': 'no label', });
lyr_HardstandingArea_9.set('fieldLabels', {'Zone': 'no label', 'Url': 'no label', });
lyr_Drydock_10.set('fieldLabels', {'Zone': 'inline label - visible with data', 'Url': 'no label', });
lyr_Parking_11.set('fieldLabels', {'id': 'no label', 'Parking': 'no label', });
lyr_Parkingpoints_12.set('fieldLabels', {'id': 'hidden field', 'Parking': 'no label', });
lyr_AOTMB92_13.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_MB92WorkshopOffices_14.set('fieldLabels', {'Type': 'no label', });
lyr_Stairs_15.set('fieldLabels', {'EntityHand': 'no label', 'Text': 'no label', });
lyr_WasteCollectionPoint_16.set('fieldLabels', {'Indic': 'no label', });
lyr_WasteCollection_17.set('fieldLabels', {'Indic': 'no label', });
lyr_gantry_crane_18.set('fieldLabels', {'id': 'no label', });
lyr_Productions_19.set('fieldLabels', {'Service': 'no label', 'Groupe': 'hidden field', 'Level': 'no label', });
lyr_ProjectManagementAdministration_20.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_Operation_21.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_SalesCustomerRelations_22.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_Procurement_23.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_Facilities_24.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_IT_25.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_HSE_26.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_HumanResourcesLearning_27.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_ExecutiveManagement_28.set('fieldLabels', {'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', });
lyr_ExecutiveManagement_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
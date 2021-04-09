sap.ui.require([
	"sap/m/Shell",
	"sap/m/App",
	"sap/m/Page",
	"sap/ui/core/ComponentContainer"
], function(
	Shell, App, Page, ComponentContainer) {
	"use strict";

	sap.ui.getCore().attachInit(function() {
		new Shell ({
			app : new App ({
				pages : [
					new Page({
						title : "Column Formatting",
						enableScrolling : false,
						content : [
							new ComponentContainer({
								height : "100%", name : "sap.ui.export.sample.formatting",
								settings : {
									id : "sap.ui.export.sample.formatting"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});

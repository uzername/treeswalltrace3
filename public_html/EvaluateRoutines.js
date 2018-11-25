//connect this file after jquery.
//indifferent to listahandler.js
var CommonEvaluator = function () {
    this.dataStructureObtained= {
        observerX:0, observerY:0,
        wallCoord1X: 0, wallCoord2X: 0, wallCoord1Y: 0, wallCoord2Y:0,
        numberOfElements: 0, 
        circles: []
    };
    /**
     * Collects data from input
     * @param structure in_structureOfID - contains IDs of Html code
     * @return int - success code
     */
     this.collectData = function (in_structureOfID) {
        dataStructureObtained.observerX = document.getElementById(in_structureOfID.observerX).value;
        dataStructureObtained.observerY = document.getElementById(in_structureOfID.observerY).value;
        dataStructureObtained.wallCoord1X = document.getElementById(in_structureOfID.wallCoord1X).value;
        dataStructureObtained.wallCoord1Y = document.getElementById(in_structureOfID.wallCoord1Y).value;
        dataStructureObtained.wallCoord2X = document.getElementById(in_structureOfID.wallCoord2X).value;
        dataStructureObtained.wallCoord2Y = document.getElementById(in_structureOfID.wallCoord2Y).value;
        for (var i=1; i<=currentNumberOfElements; i++) {
            singleCircle= {
              X : document.getElementById(dataStructureObtained.xCenterTemplate+i).value,
              Y : document.getElementById(dataStructureObtained.yCenterTemplate+i).value,
              R : document.getElementById(dataStructureObtained.radiusTemplate+i).value,
            };
            dataStructureObtained.circles.push( singleCircle );
        }
    };    
}
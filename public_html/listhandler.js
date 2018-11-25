var rowdisplayed = false; //are we pending addon now?
var currentNumberOfElements = 0;
var nextNumberOfElements = 1;
$(document).ready(function() {
    $("#addnew").click(handleAdd);
});
var handleAdd = function() { // add new row
    if (rowdisplayed == false) {
        nextNumberOfElements = currentNumberOfElements+1;
        var TextNode = "<div class=\"container-wallcoords-point\" id=\"row"+nextNumberOfElements+"\"> \n";
        TextNode += "<div class=\"container-wallcoords-point-entry\"><input type=\"checkbox\"></div> \n";
        TextNode += "<div class=\"container-wallcoords-point-entry\">X: <input type=\"text\" id=\"XCoordEntryTMP"+nextNumberOfElements+"\"> Y: <input type=\"text\" id=\"YCoordEntryTMP"+nextNumberOfElements+"\"> </div> \n";
        TextNode += "<div class=\"container-wallcoords-point-entry\"><input type=\"text\" id=\"RadiusEntryTMP"+nextNumberOfElements+"\"> </div> \n";
        TextNode += "<div class=\"container-wallcoords-point-entry\"> \n\
                     <span class=\"active-entry\" id=\"cancelEntry"+nextNumberOfElements+"\">[Отмена]</span> \n\
                     <span class=\"active-entry\" id=\"applyEntry"+nextNumberOfElements+"\">[Применить]</span>\n\
                     </div>";
        TextNode += "</div>";
        var txt2 = $(TextNode);
        $("#container-treecoords-entry").append(txt2);
        $("#cancelEntry"+nextNumberOfElements).click(handleClickOnCancelEntry);
        $("#applyEntry"+nextNumberOfElements).click(handleClickOnApplyEntry);
        rowdisplayed = true;
    }
}
var handleClickOnCancelEntry = function() {
    $("#row"+nextNumberOfElements).remove();
    rowdisplayed = false;
}
var handleClickOnApplyEntry = function() {
        var XCoord = $("#XCoordEntryTMP"+nextNumberOfElements).val();
        var YCoord = $("#YCoordEntryTMP"+nextNumberOfElements).val();
        var Radius = $("#RadiusEntryTMP"+nextNumberOfElements).val();
        var TextNode = "<div class=\"container-wallcoords-point\" id=\"rowInfo"+nextNumberOfElements+"\"> \n";
        TextNode += "<div class=\"container-wallcoords-point-entry\"><input type=\"checkbox\"></div> \n";
        TextNode += "<div class=\"container-wallcoords-point-entry\">\n\
            X: <input type=\"text\" id=\"XCoordEntry"+nextNumberOfElements+"\" value=\""+XCoord.toString()+"\" >\n\
            Y: <input type=\"text\" id=\"YCoordEntry"+nextNumberOfElements+"\" value=\""+YCoord.toString()+"\"> </div> \n";
        TextNode += "<div class=\"container-wallcoords-point-entry\">\n\
            <input type=\"text\" id=\"RadiusEntry"+nextNumberOfElements+"\" value=\""+Radius.toString()+"\"> </div> \n";
        TextNode += "</div>";
    var txt2 = $(TextNode);
    $("#container-treecoords-main").append(txt2);
    $("#row"+nextNumberOfElements).remove();
    currentNumberOfElements+=1;
    rowdisplayed = false;
}
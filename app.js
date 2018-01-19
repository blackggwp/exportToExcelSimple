$( document ).ready(function() {
    // Export button
     $("#btnExport").click(function(){
    // Specific table id for export
      $("#tblExport").table2excel({
        // exclude CSS class
        exclude: ".noExl",
        name: "Excel Document Name"
      }); 
    });
    
});
##jquery-table-filter.js

__Table Filter (for jQuery)__   
version: 0.1.0 (Oct. 18, 2012)   
Licensed under the MIT:   
http://www.opensource.org/licenses/mit-license.php   
Copyright 2012 Efe Amadasun [ efeamadasun@gmail.com ]   

####USAGE:
	<input type="text" class="f_txt"/>
	<table class="f_tbl">...</table>

	//basic initialisation
	$(function(){ 
	  	$(".f_txt").table_filter({'table':'.f_tbl'});
	});
	
	//full initialisation
	$(function(){ 
	  	$(".f_txt").table_filter({
			'table':'.f_tbl',
			'filter_inverse':false,
			'enable_space':false
		});
	});

####ADDITIONAL SETTINGS:

__filter_inverse (boolean) - default: False__
+	*__True__ - filters out rows that match the filter text*
+	*__False__ - filters out rows that do not match the filter text*

__enable_space (boolean) - default: False__
+	*__True__ - it uses space in filter text as delimiters. e.g. if filter text = "good boy", it will search rows for "good" and "boy" seperately*
+	*__False__ - it will not use space as a delimiter. e.g. "good boy" will be treated as one word.*
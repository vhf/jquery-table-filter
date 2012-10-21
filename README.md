##jquery.table_filter.js  
version: 0.1.0 (Oct. 18, 2012)   

####What's this?
This is a jQuery plugin that uses input from a textbox to filter rows in HTML tables. its fast and 
lightweight (the minified version is just 872 bytes).

####Usage:
```html
	<input type="text" class="f_txt"/>
	<table class="f_tbl">...</table>
```

```javascript
	//basic initialisation
	$(function(){ 
	  	$(".f_txt").table_filter({'table':'.f_tbl'});
	});
```
```javascript
	//full initialisation
	$(function(){ 
	  	$(".f_txt").table_filter({
			'table':'.f_tbl',
			'filter_inverse':false,
			'enable_space':false
		});
	});
```

####Settings:
__table (CSS DOM selector) - No default__
+	Table with the rows you want to filter. This setting has no default value, and is required.

__filter_inverse (boolean) - default: False__
+	__True__ - filters out rows that match the filter text
+	__False__ - filters out rows that do not match the filter text

__enable_space (boolean) - default: False__
+	__True__ - it uses space in filter text as delimiters. e.g. if filter text = "good boy", it will search rows for "good" and "boy" seperately
+	__False__ - it will not use space as a delimiter. e.g. "good boy" will be treated as one word.

####License
Licensed under the MIT: http://www.opensource.org/licenses/mit-license.php    
Copyright (c) 2012 by [Efe Amadasun]('http://efeamadasun.com')
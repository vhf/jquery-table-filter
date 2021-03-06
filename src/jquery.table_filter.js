/*
 * Table Filter (for jQuery)
 * version: 0.1.0 (Oct. 18, 2012)
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012 Efe Amadasun [ efeamadasun@gmail.com ]
 *
 * USAGE:
 *
 * <input type="text" class="f_txt"/>
 * <table class="f_tbl">...</table>
 *
 * $(function(){
 * 	  $(".f_tbl").table_filter({'filterfield':'.f_txt'});
 * });
 *
 * ADDITIONAL SETTINGS:
 *
 * filter_inverse (boolean) - default: False
 * True - filters out rows that match the filter text
 * False - filters out rows that do not match the filter text
 *
 * enable_space (boolean) - default: False
 * True - it uses space in filter text as delimiters. e.g. if filter text = "good boy", it
 *        will search rows for "good" and "boy" seperately
 * False - it will not use space as a delimiter. e.g. "good boy" will be treated as one word.
 *
 */

(function($){

	$.fn.table_filter = function (options) {

		//set default plugin values
		var settings = $.extend({

			'filter_inverse': false,
			'enable_space': false,
			'filterfield': ''

		}, options);

		//return element, to maintain chainability
		return this.each(function () {
			var $filterfield = $(settings.filterfield);
			var $this = $(this);

			$filterfield.bind("keyup", function () {

				//set filter text, and filterable table rows
				var txt = $filterfield.val().toLowerCase();
				var obj = $this.find("tr:not(:has('th'))");

				$.each(obj, function () {
					//default visibilty for rows is set based on filter_inverse value
					var show_tr = (settings.filter_inverse) ? true : false;
					var inner_obj = $(this).find("td");

					$.each(inner_obj, function () {
						var td_txt = $.trim($(this).text()).toLowerCase();

						//if space is enabled as a delimiter, split the TD text value
						//and check the individual values against the filter text.
						if(settings.enable_space){

							var td_array = txt.split(" ");
							$.each(td_array, function (i) {
								var td_value = td_array[i];

								if(td_txt.indexOf(td_value) != -1){
									show_tr = (settings.filter_inverse) ? false : true;
								}
							});

						}
						else{

							if(td_txt.indexOf(txt) != -1){
								show_tr = (settings.filter_inverse) ? false : true;
							}

						}

					});

					if(show_tr){
						$(this).show();
					}
					else{
						$(this).hide();
					}

				});

				//display all rows if filter text is empty
				if($.trim(txt) == ""){
					$this.find("tr").show();
				}

			});

		});

	};

})(jQuery);

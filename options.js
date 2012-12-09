


    $(function() {
        var date_format = localStorage["date_format"] || "mm/dd/yy";
        $( "#format" ).val(date_format);
        $( "#datepicker" ).datepicker();
        $( "#datepicker" ).val($.datepicker.formatDate(date_format, new Date()));
        $( "#format" ).change(function() {
            date_format = $( this ).val(); 
            localStorage["date_format"] = date_format;

            $( "#datepicker" ).datepicker( "option", "dateFormat", date_format );
            if ( ! $( "#datepicker" ).val() ) {
                $( "#datepicker" ).val($.datepicker.formatDate(date_format, new Date()));
            }

            $( "#status" ).html("Date format saved").show().delay(800).fadeOut(400);
        });
    });

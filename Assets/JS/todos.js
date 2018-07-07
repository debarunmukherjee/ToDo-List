//Handing done feature...
$("ul").on("click","li",function () {
	$(this).toggleClass("done");
})

//Handling delete feature...
$("ul").on("click","span",function (event) {
	$(this).parent().fadeOut(500,function () {
		$(this).remove();
	})
	event.stopPropagation();
})

$("input[type='text']").on("keypress",function (event) {
	if (event.which === 13) {
		var item = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+item+"</li>");
	}
})

$(".fa-pencil-alt").click(function () {
	$("input[type='text']").fadeToggle();
})
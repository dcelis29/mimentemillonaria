var $form = $("#formulario"), 
	$titulo = $("#titulo"),
	$url = $("#url")
	$publicar = $("#mostrar_form"),
	$list = $("#contenido"),
	$post = $(".item").first(); //almacena el primer item del contenido


function mostrarFormulario()
{
	$form.slideToggle();//slideToggle para ocultar y mostrar
	$list.slideToggle();//para ocultar los post
	return false; //Se usa para evitar que cuando se de click en el link me envíe al inicio de la página, compórtamiento natural de los link
}

function agregarPost()
{
	var url = $url.val(), //almacena el valor ingresado en el campo url
		titulo = $titulo.val(); //almacena el valor ingresado en el campo titulo
		
		$clone = $post.clone(); //Nos da una representación identica de ese objeto, en este caso del primer item del contenido y se modifican las propiedades que quiera, en esta caso es el nombre y la url

	$clone.find(".titulo_item a")//busca 'titulo_item a' para seleccionar lo que se va a reemplazar
		.text(titulo)//se pasa el valor que tiene almacenado titulo
		.attr("href", url); //al atributo href se pasa lo que esta almacenado en la variable url

	$clone.hide(); //equivale a display none en css

	$list.prepend($clone);//se utiliza para colocar el item que se ingresa, de primero. Append se utiliza para agragar de ultimo
	mostrarFormulario();//Para volver a mostrar los post llamamos la funcion nuevamente
	$url.val('');
	$titulo.val('');
	$clone.fadeIn(); //Para animar el ingreso del clone
	return false; //Para evitar que se recargue la página cuando se haga click en el submit del form
}

//eventos
$publicar.click(mostrarFormulario);
$form.on("submit", agregarPost);


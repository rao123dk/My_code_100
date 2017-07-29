window.onload = function(){

var cart_value = $("#cart").text();
console.log(cart_value);
var cart_items = [];

// click to add item
	var item_in_cart= cart_items.length || 0;
	$(".item").click(function(){
		item_in_cart++;
		cart_items.push($(this).text());
		console.log(cart_items);
		localStorage.setItem("my_items", JSON.stringify(cart_items));
		var current_item_to_add = $(this).text();
		insert_items_into_cart(current_item_to_add);

	})

	var retrieved_item_Data = localStorage.getItem("my_items");
    var parse_item_data = JSON.parse(retrieved_item_Data);
	if(parse_item_data.length){
		cart_items = cart_items.concat(parse_item_data);

		// adding element in cart to display
		var elements = $();
		for(var i=0; i< cart_items.length ; i++){
			elements = elements.add('<button class="item_in_cart">'+cart_items[i]+'</button>');
		}
		$('#cart').append(elements);
	}

	//trying to make closure for better security
	var app_closure = function(){
		var app_closure_var = cart_items.length || 0;
		return function(){
			app_closure_var++;
		}
	}
	

	function insert_items_into_cart(current_item_to_add){
		var elements = $();
		elements = elements.add('<button class="item_in_cart_already">'+ current_item_to_add +'</button>');
		$('#cart').append(elements);
	}
	

}



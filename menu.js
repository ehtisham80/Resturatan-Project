let meal;
let name;

let margherita, funghi, peperoni, vegetarian;
let spicyBurger, blackBeans, beefAndBacon, cheeseBurger;

var shoppingCart = [];

let toppings = ["Cheese", "Mozarella", "Chedar Cheese", "Cherry Tomatoes", "Basil", "Mushrooms", "Spinach", "Peperoni", "Green Pepper", "Red Pepper", "Olives"];
let burgerExtra = ["Beef Patty", "Black Bean Patty", "Bacon", "Hot Sauce", "Pickles", "Lettuce", "Jalapeno", "Onions", "Tomatoes", "Cheese", "Chedar Cheese"];
// Pizza Objects START
margherita = {
    name: "Margherita",
    price: 80,
    ingredients: ["Tomato Sauce", "Cheese", "Mozarella", "Cherry Tomatoes", "Basil"],
};

funghi = {
    name: "Funghi",
    price: 90,
    ingredients: ["Tomato Sauce", "Cheese", "Mushrooms", "Tomatoes", "Mozarella", "Spinach", "Basil", "Pesto"]
};

peperoni = {
    name: "Peperoni",
    price: 75,
    ingredients: ["Tomato Sauce", "Cheese", "Mozarella", "Peperoni"]
};

vegetarian = {
    name: "Vegetarian",
    price: 85,
    ingredients: ["Tomato Sauce", "Cheese", "Red Pepper", "Green Pepper", "Zucchini", "Olives"],
};

margherita = {
    name: "Margherita",
    price: 80,
    ingredients: ["Tomato Sauce", "Cheese", "Mozarella", "Cherry Tomatoes", "Basil"],
};
// Pizza Objects END


// Burger Objects START
spicyBurger = {
    name: "Spicy Burger",
    price: 110,
    ingredients: ["Beef Patty", "Chedar Cheese", "Lettuce", "Jalapeno", "Grilled Onions", "Hot Sauce"]
};
blackBeans = {
    name: "Black Beans",
    price: 95,
    ingredients: ["Beans Patty", "Lettuce", "Tomatoes", "Avocado", "Onions"]
};

beefAndBacon = {
    name: "Beef 'n' Bacon",
    price: 100,
    ingredients: ["Beef Patty", "Bacon", "Chedar Cheese", "Ketchup", "Mayo", "Lettuce", "Onions"]
};

cheeseBurger = {
    name: "Cheese Burger",
    price: 105,
    ingredients: ["Beef Patty", "Chedar Cheese", "Letuce", "Tomatoes", "Ketchup", "Mustard", "Pickles"]
};

// Burgers Objects END




function attachEvents() {

    $("#pizzas").hide();
    $("#burgers").hide();
    $("#extras").hide();
    $("#dips").hide();
    $("#sodas").hide();
    $("#alcohols").hide();
    hideInfo();

}

function hideInfo() {
    $("#info").hide();
    $(".info").hide();
    $("#ingredients").empty();
}


$("#pizza").on("click", function() {
    $("#pizzas").slideToggle("slow");
    $("#pizzas").siblings().hide();
    hideInfo();


});

$("#hamburger").on("click", function() {
    $("#burgers").slideToggle("slow");
    $("#burgers").siblings().hide();
    hideInfo();


});


$("#extra").on("click", function() {
    $("#extras").slideToggle("slow");
    $("#extras").siblings().hide();
    hideInfo();


});

$("#dip").on("click", function() {
    $("#dips").slideToggle("slow");
    $("#dips").siblings().hide();
    hideInfo();


});
$("#soda").on("click", function() {
    $("#sodas").slideToggle("slow");
    $("#sodas").siblings().hide();
    hideInfo();


});
$("#alcohol").on("click", function() {
    $("#alcohols").slideToggle("slow");
    $("#alcohols").siblings().hide();
    hideInfo();


});



// Pizzas on click event START
$("#margherita").on("click", function() {

    hideInfo();
    $("#info").fadeToggle(1000);
    $(".info").fadeToggle(1000);
    initIngredient(margherita);
    initExtras(toppings);

    meal = margherita.price;
    name = margherita.name;
    showPrice();

    $("#image").attr("src", "menu_Images/pizza/margherita.jpg");
});

$("#funghi").on("click", function() {
    hideInfo();
    $("#info").fadeToggle(1000);
    $(".info").fadeToggle(1000);
    initIngredient(funghi);
    initExtras(toppings);

    meal = funghi.price;
    name = funghi.name;
    showPrice();

    $("#image").attr("src", "menu_Images/pizza/funghi.jpg");
});

$("#peperoni").on("click", function() {
    hideInfo();
    $("#info").fadeToggle(1000);
    $(".info").fadeToggle(1000);
    initIngredient(peperoni);
    initExtras(toppings);

    meal = peperoni.price;
    name = peperoni.name;
    showPrice();

    $("#image").attr("src", "menu_Images/pizza/peperoni.jpg");
});

$("#vegetarian").on("click", function() {
    hideInfo();
    $("#info").fadeToggle(1000);
    $(".info").fadeToggle(1000);
    initIngredient(vegetarian);
    initExtras(toppings);

    meal = vegetarian.price;
    name = vegetarian.name;
    showPrice();

    $("#image").attr("src", "menu_Images/pizza/vegetarian.jpg");
});
// Pizzas on click event END

// Burgers on click event START
$("#spicy").on("click", function() {
    hideInfo();
    $("#info").fadeToggle(1000);
    $(".info").fadeToggle(1000);
    initIngredient(spicyBurger);
    initExtras(burgerExtra);

    meal = spicyBurger.price;
    name = spicyBurger.name;
    showPrice();

    $("#image").attr("src", "menu_Images/hamburger/spicyBurger.jpg");
});

$("#cheese").on("click", function() {
    hideInfo();
    $("#info").fadeToggle(1000);
    $(".info").fadeToggle(1000);
    initIngredient(cheeseBurger);
    initExtras(burgerExtra);

    meal = cheeseBurger.price;
    name = cheeseBurger.name;
    showPrice();

    $("#image").attr("src", "menu_Images/hamburger/cheeseBurger.jpg");
});

$("#beefAndBacon").on("click", function() {
    hideInfo();
    $("#info").fadeToggle(1000);
    $(".info").fadeToggle(1000);
    initIngredient(beefAndBacon);
    initExtras(burgerExtra);

    meal = beefAndBacon.price;
    name = beefAndBacon.name;
    showPrice();

    $("#image").attr("src", "menu_Images/hamburger/beefAndBacon.jpg");
});

$("#blackBeans").on("click", function() {
    hideInfo();
    $("#info").fadeToggle(1000);
    $(".info").fadeToggle(1000);
    initIngredient(blackBeans);
    initExtras(burgerExtra);

    meal = blackBeans.price;
    name = blackBeans.name;
    showPrice();

    $("#image").attr("src", "menu_Images/hamburger/blackBeanVeganBurger.jpg");
});

// Burgers on click event END

function showPrice() {
    $("#product-price").text("Price: " + meal + " SEK");
    $("#product-name").text(name);
}

$(".order").on("click", function() {

    let productPrice = $(this).parent("div").children("h2").children("span").text();
    let productName = $(this).parent("div").children("h1").text();


    let mealToOrder = {
        name: productName,
        price: productPrice
    };


    shoppingCart.push(mealToOrder);



});

function cart() {



};

$("#submitButton").on("click", function showMe() {

});

$(".orderButton").on("click", function() {

    let mealToOrder = {
        name: name,
        price: meal,
        ingredients: []
    };

    $("tr").each(function() {
        var id = $(this).find("td:first").text();
        mealToOrder.ingredients.push(id);
    });

    //alert(mealToOrder.ingredients);
    shoppingCart.push(mealToOrder);
    console.log(shoppingCart);
});

function priceUp() {
    meal += 7;
    showPrice(meal);
}

function priceDown() {
    meal -= 7;
    showPrice(meal);
}


function addNewIngredient() {
    let toAdd = $("#addExtra option:selected").text();
    addIngredient(toAdd);
    priceUp();
}

function addExtras(item) {
    let option = $('<option></option>').append(item);
    option.appendTo($('#addExtra'));

}

function initIngredient(item) {
    item.ingredients.forEach(addIngredient);
}

function initExtras(item) {
    $("#addExtra").empty();
    item.forEach(addExtras);
}

function addIngredient(item) {

    let tableRow = $('<tr>')
        .append($('<td>').text(item))
        .append($('<td>')
            .append($('<a class= "removeButton" href = "javascript:void()">Remove</a>').on('click', deleteRow)))
    tableRow.prependTo($('#ingredients'));
}

function deleteRow() {
    $(this).parent().parent().remove();
    priceDown();
}
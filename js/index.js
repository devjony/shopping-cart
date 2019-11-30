var productsList = $("#products > table > tbody");
var shoppingCart = $("#shopping-cart > table > tbody");

var totalCartValue = 0;
var productIndex = 0;

var products = [
    {
        img: "https://images-americanas.b2w.io/produtos/01/00/img/134537/1/134537153_1GG.jpg",
        desc: "Console Playstation 4 1 Tb Hits Bundle Edição 5.1 - PS4",
        price: 1799.99
    },
    {
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTfKxV-EGo7bfVDeisEo0Fq_dXAQ4up_W6ReJF90DhGTJhoWnYmxutuQ2yy18-0PgLLRUTR55ToQwU9toKmYbHpnSa8Na4aYKk1eTVieTpvPnLeAFYr7p1rYoSa&usqp=CAE",
        desc: "Console Nintendo Switch 32GB - Neon",
        price: 1649.00
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTMptInqRQbG7Iqe44_Gf7EqV3MeWt_FwmbpWmpM2AvkYSgbUjQqasdcCXIsD60L_nC9LM6RTYI8QzRolAfiNL1vlQFoiryaQ&usqp=CAE",
        desc: "Console Super nintendo + 2 Controles + 11000 Jogos",
        price: 429.90
    },
    {
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcgc-UUGjoacltjn4aZvWQIO1-3BMQ1MVejyZSr9cSa_sC9pOS-ycx3YRTXhRgoaQFm5ZXEULheMRPqSrsAvmEUPqTGC8z&usqp=CAE",
        desc: "Console Xbox One S 1tb 4k 2 Controles Branco",
        price: 1799.90
    },
    {
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSlEG3-RW4OWc5DOLeExQ1nKSdSUvVruS06HGqAD7NONczVK9HPYzQdmgbJNRxeiOaDt8ItDE2MfO5F_PQJMinED9t5fmLbDW2iJfnUrKmbBUQTM7F6JJEZOA&usqp=CAE",
        desc: "Teclado Gamer Razer Orbweaver Chroma RZ07",
        price: 509.90
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSMdsjbIdauFNx6oazXKzowpZCG_mbnBFZ0SgNLjoYX_RjDkS-2dKcanyJwMZz_Lxf7APFl7PmlH4oYnEDDdnSJr98_APoKH21ex234zjAyCZ4JAhkt-m1JWg&usqp=CAE",
        desc: "Razer Holiday Gaming Bundle",
        price: 1190.12
    }
];

/* insert products list from JSON */
products.forEach(product => {
    productsList.append(
        "<tr>\
            <td>\
                <div class='image'>\
                    <img src='"+product.img+"' class='img img-fluid' />\
                </div>\
            </td>\
            <td>"+product.desc+"</td>\
            <td class='price'>"+product.price+"</td>\
            <td>\
                <button class='btn btn-secondary qtd' value='"+productIndex+"' onclick='addToCart(this.value)'>COMPRAR</button>\
            </td>\
        </tr>"
    );
    productIndex++;
});

/* insert product in shopping cart */

function addToCart(productIndex){
    shoppingCart.append(
        "<tr>\
            <td>\
                <div class='image'>\
                    <img src='"+products[productIndex].img+"' class='img img-fluid' />\
                </div>\
            </td>\
            <td>\
                "+products[productIndex].desc+"\
                <p class='remove'>remover do carrinho</p>\
            </td>\
            <td class='price'>"+products[productIndex].price+"</td>\
            <td>\
                <input type='number' class='qtd' min='1' max='10' value='1'>\
            </td>\
        </tr>"
    );
    getTotal();
    alert("Produto adicionado ao carrinho");
};

function getTotal() {

    cartProducts = shoppingCart.find("tr");
    prices = shoppingCart.find(".price");
    qtds = shoppingCart.find(".qtd");
    totalCartValue = 0;
    
    cartProducts.each(function(index) {
        totalCartValue += prices[index].textContent * qtds[index].value;
    })
    
    $("#total").val((totalCartValue).toFixed(2));
}

function showCart(){
    $(".mineBreadcrumb .fa").show();
    $(".mineBreadcrumb span").show();
    $("#products").hide();
    $("#shopping-cart").show();

    $("#coupon").val("");
}

function showProducts(){
    $("#products").show();
    $("#shopping-cart").hide();
    $(".mineBreadcrumb .fa").hide();
    $(".mineBreadcrumb span").hide();
}

$(shoppingCart).on("click", ".remove", function(){
    $(this).closest("tr").remove();
    getTotal();
});

$(function(){
    $(shoppingCart).on("change", ":input[type='number']", function(){
        getTotal();
    });    
});
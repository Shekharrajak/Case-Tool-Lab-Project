Meteor.startup(function(){
    if(Products.find().count()==0){
        //add sample products
    //if(true){

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops', thumb:'img/lap1.png'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops', thumb:'img/lap5.png'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops', thumb:'img/lap7.png'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops', thumb:'img/lap8.png'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops', thumb:'img/lap6.png'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops', thumb:'img/lap5.png'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops', thumb:'img/lap4.png'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops', thumb:'img/lap8.png'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops', thumb:'img/lap7.png'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops', thumb:'img/lap6.png'});
        
        Products.insert({name:'LG2',desc:'Awesome lappy',price:15000.50,catName:'Computers', thumb:'img/lap6.png'});
        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Computers', thumb:'img/lap7.png'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Computers', thumb:'img/lap8.png'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Computers'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Computers'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Computers'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Computers'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Computers'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Computers'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Computers'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Computers'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'PenDrives'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'PenDrives'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'PenDrives'});

        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Computers gadgets'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Computers gadgets'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Computers gadgets'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Computers gadgets'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Computers gadgets'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Computers gadgets'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Computers gadgets'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Mobile phones'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Mobile phones'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Mobile phones'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Mobile phones'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Mobile phones'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Mobile phones'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Mobile phones'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Mobile phones'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Mobile phones'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Mobile phones'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});

        Products.insert({name:'Lenovo G580',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'HP',desc:'Awesome lappy',price:6500.50,catName:'Laptops'});
        Products.insert({name:'Samsung',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'LG',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo k3',desc:'Awesome lappy',price:5700.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 G580',desc:'Awesome lappy',price:5450.50,catName:'Laptops'});
        Products.insert({name:'HP2',desc:'Awesome lappy',price:5900.50,catName:'Laptops'});
        Products.insert({name:'Samsung2',desc:'Awesome lappy',price:5500.50,catName:'Laptops'});
        Products.insert({name:'LG2',desc:'Awesome lappy',price:7500.50,catName:'Laptops'});
        Products.insert({name:'Lenovo2 k3',desc:'Awesome lappy',price:8500.50,catName:'Laptops'});






        

   }
    if(Categories.find().count()==0){
    //if(true){
        var elecid =Categories.insert({name:'Electronics'});
        var clothid = Categories.insert({name:'Clothes'});
        var bookid = Categories.insert({name:'Books'}); 
        var movid =Categories.insert({name:'Movies,Music,ideo Games'});
        var homid = Categories.insert({name:'Home,Kichen'});
        var toyid = Categories.insert({name:'Toys products'});
        var healthid =Categories.insert({name:'Beauty,Health & Gourmet'});
        var Jwelid = Categories.insert({name:'Jwellery,Watches & Eyewear'});
        var Handid = Categories.insert({name:'Handbags,Shoes'});
        var outdoorid = Categories.insert({name:'Sports,Fitness & outdoors'});
        SubCategories.insert({name:'Computers',cat:elecid});
        SubCategories.insert({name:'Laptops',cat:elecid});
        SubCategories.insert({name:'PenDrives',cat:elecid});
        SubCategories.insert({name:'Computers gadgets',cat:elecid});
        SubCategories.insert({name:'Mobile phones',cat:elecid});
        SubCategories.insert({name:'Mobile phone Accessories',cat:elecid});
        SubCategories.insert({name:'Cameras',cat:elecid});
        SubCategories.insert({name:'Cameras accessories',cat:elecid});
        SubCategories.insert({name:'Laptop accessories',cat:elecid});
        SubCategories.insert({name:'TV and DVD accessories',cat:elecid});
        SubCategories.insert({name:'TV and DVD player',cat:elecid});
        SubCategories.insert({name:'others',cat:elecid});

        SubCategories.insert({name:'Women\'s Clothing',cat:clothid});
        SubCategories.insert({name:'Men\'s Clothing',cat:clothid});
        SubCategories.insert({name:'Kid\'s Clothing',cat:clothid});
        SubCategories.insert({name:'Men\'s innerwear' ,cat:clothid});
        SubCategories.insert({name:'others' ,cat:clothid});
        

        SubCategories.insert({name:'Indian Writers Books',cat:bookid});
        SubCategories.insert({name:'Foreign Writers Books',cat:bookid});
        SubCategories.insert({name:'Comics',cat:bookid});
        SubCategories.insert({name:'Literature & fiction',cat:bookid});
        SubCategories.insert({name:'Exam preparation',cat:bookid});
        SubCategories.insert({name:'School books',cat:bookid});
        SubCategories.insert({name:'College Books',cat:bookid});
        SubCategories.insert({name:'Bussiness & Economics',cat:bookid});
        SubCategories.insert({name:'Educational Software',cat:bookid});
        SubCategories.insert({name:'Hindi,Tamil,other Languages',cat:bookid});
        SubCategories.insert({name:'Bestsellers',cat:bookid});
        SubCategories.insert({name:'other',cat:bookid});
        

        SubCategories.insert({name:'Blu-ray',cat:movid});
        SubCategories.insert({name:'PC-Games',cat:movid});
        SubCategories.insert({name:'All musics',cat:movid});
        SubCategories.insert({name:'International Musics',cat:movid});
        SubCategories.insert({name:'Film songs',cat:movid});
        SubCategories.insert({name:'Indian Classic',cat:movid});
        SubCategories.insert({name:'Musical Instruments',cat:movid});
        SubCategories.insert({name:'Other',cat:movid});
        

        SubCategories.insert({name:'Kitchen & Home Appliance',cat:homid});
        SubCategories.insert({name:'Large Appliance',cat:homid});
        SubCategories.insert({name:'Furniture',cat:homid});
        SubCategories.insert({name:'Lighting',cat:homid});
        SubCategories.insert({name:'Garden',cat:homid});
        SubCategories.insert({name:'All pet supplies',cat:homid});
        SubCategories.insert({name:'Other',cat:homid});
       

        SubCategories.insert({name:'Puzzles',cat:toyid});
        SubCategories.insert({name:'Soft toys',cat:toyid});
        SubCategories.insert({name:'Learning & Education',cat:toyid});
        SubCategories.insert({name:'Other',cat:toyid});
        

        SubCategories.insert({name:'Luxury beauty',cat:healthid});
        SubCategories.insert({name:'Household Supplies',cat:healthid});
        SubCategories.insert({name:'Personal care',cat:healthid});
        SubCategories.insert({name:'Health care Devices',cat:healthid});
        SubCategories.insert({name:'Other',cat:healthid});
        

        SubCategories.insert({name:'Men\'s Watches',cat:jwelid});
        SubCategories.insert({name:'Women\'s Watches',cat:jwelid});
        SubCategories.insert({name:'Chilren\'s Watches',cat:jwelid});
        SubCategories.insert({name:'Sunglasses',cat:jwelid});
        SubCategories.insert({name:'Jwellery',cat:jwelid});
        SubCategories.insert({name:'Other',cat:jwelid});
        

        SubCategories.insert({name:'Handbags',cat:handid});
        SubCategories.insert({name:'Clutches',cat:handid});
        SubCategories.insert({name:'Laptop Bags',cat:handid});
        SubCategories.insert({name:'Travel accessories',cat:handid});
        SubCategories.insert({name:'Other',cat:handid});
        

        SubCategories.insert({name:'Exerse & fitness',cat:outdoorid});
        SubCategories.insert({name:'Cycling',cat:outdoorid});
        SubCategories.insert({name:'Cricket',cat:outdoorid});
        SubCategories.insert({name:'Footballs',cat:outdoorid});
        SubCategories.insert({name:'Other',cat:outdoorid});
        
        //SubCategories.insert({name:'Cold Drinks',cat:juid});

        
    }
});
Meteor.methods({
    //remove  before production
    removeAll:function(){
        Products.remove({});
        Categories.remove({});
        SubCategories.remove({});
        CartItems.remove({});
    },
    addToCart:function(qty,product,session){
        if(qty>0){
            CartItems.insert({qty:qty,product:product,sessid:session});
        }else{
            console.log('quantity is zero');
        }
    },
    removeCartItem:function(id){
        CartItems.remove({_id:id});
    }

});



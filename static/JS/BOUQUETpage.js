// Enter-Site-Introl
ScrollTrigger.matchMedia({
    //Laptop
    "(min-width: 1024px)": function() {
    var tl = gsap.timeline();
		tl.from(".bouquet_custom1", 2,{top: "0%", left: "0%"},">+0.1")
    }
})

// Bouquet Screenshot
function bouquet_Screenshot(){
    html2canvas(document.querySelector('.screen_shot_class'), {
        onrendered: function(canvas) {
            // document.body.appendChild(canvas);
          return Canvas2Image.saveAsPNG(canvas);
        }
    });
}

//* Bouquet-UX/UI price data *//
bouquet_elements_dataset = {
  'main_flowers': {
    'bouquet_main_hydengea':['Hydengea',  899, 'hydengea/blue/white/pink'],
    'bouquet_main_sunflower':['Sunflower', 659, 'sunflower/yellow'],
    'bouquet_main_lisianthus':['Lisianthus', 799, 'lisianthus/blue/white/pink/yellow']
  },
  'main_leaves': {
    'Bouquet_minor_eucalyptus':['Eucalyptus', 149, 'artificial leaf, eucalyptus wood/green, 65 cm', 3],
    'Bouquet_minor_ginkgo':['Ginkgo', 249, 'artificial flowers, ginkgo/green, 125 cm', 3],
    'Bouquet_minor_babys_breath':[`Baby’s breath`, 99, `artificial flowers, baby's breath/white, 60 cm`, 3],
    'Bouquet_minor_sweet_pea':['Sweet pea', 129, 'artificial flowers, sweet pea/white, 60 cm', 3],
    
    'Bouquet_minor_pascu':['Pascu', 149, 'artificial flowers, pascu/pink, 60 cm', 3],
    'Bouquet_minor_cosmos':['Cosmos', 149, 'artificial flowers, cosmos/crimson, 65 cm', 2],
    'Bouquet_minor_dogwood':['Dogwood', 79, 'artificial flowers, indoor/outdoor, dogwood/pink, 56 cm', 2],
    'Bouquet_minor_cherry_blossoms':['Cherry-blossoms', 249, 'artificial flowers, cherry-blossoms/pink, 130 cm', 2],
    'Bouquet_minor_lupin':['Lupin', 149, 'artificial flowers, lupin/white, 74 cm', 2],

  },
  'main_wrappers':{
    'wrappers_default':['Default', 120, 'bouquet wrapping paper at a great price. Perfect for bouquet wrapping, floral crafting, gift wrappings, craft projects etc.'],
    'wrappers_newspaper':['Newspaper', 223, '20 Sheets Flower Wrapping Paper Waterproof Florist Bouquet with Ribbon for Bouquets DIY Crafts Packaging Bouquet,'],
    'wrappers_organic':['Organic', 323, 'Bridal bouquet with kale, succulent, helleborus, eucalyptus, hydrangea and dusty miller. Designed by Forget-Me-Not Flowers.'],
  }
}

//* Bouquet-UX/UI systems *//
function bouquet_navbar(id) {
  bouque_content_page = '.'+id;
  $(".bouquet_UxUi_content").fadeOut();
  setTimeout(function(){
    $(bouque_content_page).fadeIn("slow");
  },400)
}


//| ---------------------------------------|//
//| Bouquet-UX/UI flowers systems          |//
//| mainflower selected                    |//
//| ---------------------------------------|//
function bouquet_flowers(id) {
  //| เช็คว่า main_flowers ยังไม่ได้ถูกเลือก
  if ( !document.getElementById(id).classList.contains('flower_active') ){
    //| ถ้าไม่มี class:'flower_active' จะเพิ่ม'flower_active' แทนที่
    $('.flower_active').removeClass('flower_active');
    // bouquet_main_id = '#'+id+'flower_active';
    document.getElementById(id).classList.add("flower_active");

        //| เปลี่ยนรูปที่ custom bouquet canvas
        bouquet_main_flowers = `static/IMG/BOUQUET/${id}.png`
        document.getElementById("main_flowers").src = bouquet_main_flowers;
    
            //| เปลี่ยนสีประจำดอกไม้แต่ละดอก
            $(".bouquet_flowersColors").hide();
            $(`.${id}`).show();

                //| ลบค่า quantity_ammount เพื่อเริ่มใหม่
                flowers_quantity = document.getElementById("bouquet_quantity_amount")
                while ( $('#bouquet_quantity_amount').children().length > 1 ) {
                  flowers_quantity.removeChild(flowers_quantity.lastChild)
                }
      //| เปลี่ยนรูปที่ icons items
      bouquet_main_icons = `static/IMG/BOUQUET/${id}_icon.png`
      document.getElementById('items_main_flowers').children[0].src = bouquet_main_icons;

      name_ = 'Name: ' + ((bouquet_elements_dataset['main_flowers'][String(id)][0]))
      document.getElementById('items_main_flowers').children[1].children[0].innerHTML = name_;

      quantity_ = (document.getElementById('items_main_flowers').children[1].children[1]).innerHTML = 'Qlt: 1';
      price_ =  `${(bouquet_elements_dataset['main_flowers'][String(id)][1])} bath`
      document.getElementById('items_main_flowers').children[1].children[2].innerHTML = price_;
  }
  sumPrice(0)
}




//| ---------------------------------------|//
//| Bouquet-UX/UI flowers systems          |//
//| mainflower colors                      |//
//| ---------------------------------------|//
function bouquet_flowers_colors(id) {
  //| เช็คว่า main_flowers ยังไม่ได้ถูกเลือก
  if ( !document.getElementById(id).classList.contains('color_active') ){
    //| ถ้าไม่มี class:'color_active' จะเพิ่ม'color_active' แทนที่
    $('.color_active').removeClass('color_active');
    // bouquet_main_id = '#'+id+'color_active';
    document.getElementById(id).classList.add("color_active");
    //| เปลี่ยนรูปที่ custom bouquet canvas
    bouquet_main_flowers = `static/IMG/BOUQUET/${id}.png`
    document.getElementById("main_flowers").src = bouquet_main_flowers;
  }
}
//| ---------------------------------------|//
//| Bouquet-UX/UI flowers systems          |//
//| mainflower quantity                    |//
//| ---------------------------------------|//
function bouquet_flowers_quantity(id) {
  flowers_quantity = document.getElementById("bouquet_quantity_amount")
  // เช็คว่า bouquet_quantity_button ที่กดเป็นปุ่ม "ADD"
  if (id === 'bouquet_quantity_add'){
    // สามารถ add quantity ได้ไม่เกิน 2 จาก 3
    if ( $('#bouquet_quantity_amount').children().length < 3 ){
      // เมื่อเช็คผ่านหมด: จะ add_elements ที่บ่งบอก quantity
      flowers_quantity.insertAdjacentHTML("afterbegin",'<h1 id="flowers_quantity_amount"><i class="fa-brands fa-pagelines"></i></h1>');
      // เปลี่ยนค่า quantity ใน Selected Items
      quantity_ = parseInt((document.getElementById('items_main_flowers').children[1].children[1]).innerHTML.replace(/[^0-9]/g, ''))+ 1;
      document.getElementById('items_main_flowers').children[1].children[1].innerHTML = `Qlt: ${quantity_}`;

      id = document.querySelector('.flower_active').id
      price_ = `${((bouquet_elements_dataset['main_flowers'][String(id)][1])* quantity_)} bath`
      document.getElementById('items_main_flowers').children[1].children[2].innerHTML = price_;
    }
  }
  //| เช็คว่า bouquet_quantity_button ที่กดเป็นปุ่ม "REMOVE"
  else if (id === 'bouquet_quantity_rem'){
    // สามารถ remove quantity ได้ไม่ต่ำกว่า 1 จาก 3
    if ( $('#bouquet_quantity_amount').children().length > 1 ){
      // เมื่อเช็คผ่านหมด: จะ remove_elements ที่บ่งบอก quantity
      flowers_quantity.removeChild(flowers_quantity.lastElementChild);
      // เปลี่ยนค่า quantity ใน Selected Items
      quantity_ = parseInt((document.getElementById('items_main_flowers').children[1].children[1]).innerHTML.replace(/[^0-9]/g, ''))- 1;
      document.getElementById('items_main_flowers').children[1].children[1].innerHTML = `Qlt: ${quantity_}` ;

      id = document.querySelector('.flower_active').id
      price_ = `${((bouquet_elements_dataset['main_flowers'][String(id)][1])* quantity_)} bath`
      document.getElementById('items_main_flowers').children[1].children[2].innerHTML = price_;
    }
  }
  sumPrice(0)
}
//> ---------------------------------------------------------------------
//| ---------------------------------------|//
//| Bouquet-UX/UI leaves systems           |//
//| mainleaves selected                    |//
//| ---------------------------------------|//


function bouquet_leaves(id) {
  bouquet_leaves_count = $('.leaves_active').length

  //| เช็คว่า main_flowers ยังไม่ได้ถูกเลือก
  if ((bouquet_leaves_count < 3) && ( !document.getElementById(id).classList.contains('leaves_active') )){
      //| ถ้าไม่มี class:'leaves_active' จะเพิ่ม'leaves_active' ไม่เกิน 3
      document.getElementById(id).classList.add("leaves_active");
          //| เปลี่ยนรูปที่ custom bouquet canvas
          bouquet_leaves_select = (document.querySelector(".bouquet_main_leaves:not(.bouquet_leavesSelect)"))
          $(bouquet_leaves_select).show()
          bouquet_leaves_select.src = `static/IMG/BOUQUET/${id}.png`;
          //| เปลี่ยน z-index(layer) ที่ custom bouquet canvas
          layer_zindex = ((bouquet_elements_dataset['main_leaves'][String(id)][3]))
          bouquet_leaves_select.style.zIndex = layer_zindex;
          bouquet_leaves_select.classList.add("bouquet_leavesSelect", id);

                  //| เปลี่ยนข้อมูลที่ description
                  description_ = ((bouquet_elements_dataset['main_leaves'][String(id)][2]))
                  document.getElementById('bouquet_description').children[0].innerHTML = description_;
                  $('.bouquet_description').show();
        
        //| เปลี่ยนรูปที่ icons items
        bouquet_leaves_select = document.getElementById("bouquet_items_boxs")
        bouquet_leaves_innerhtml = `<div id="${id} items_main_leaves"><div class="box"><div class="insidebox"><img src = "./static/IMG/BOUQUET/${id}_icon.png"><p1><p>Name: ${(bouquet_elements_dataset['main_leaves'][String(id)][0])}</p> <p>Qlt: 1</p><p2 id="price">${(bouquet_elements_dataset['main_leaves'][String(id)][1])} bath</p2></p1></div></div></div>`
        bouquet_leaves_select.insertAdjacentHTML("beforeend", bouquet_leaves_innerhtml);
  }
  //| กรณีต้องการลบ Leaves ที่เลือกไว้
  else if ( document.getElementById(id).classList.contains('leaves_active')){
    //| del color_ leaves_limits
    document.getElementById(id).classList.remove("leaves_active");
    $('.leaves_limits').removeClass('leaves_limits');
            //| ลบค่า bouquet_description
            $('.bouquet_description').hide();

                    //| ลบค่า quantity_ammount เพื่อเริ่มใหม่
                    bouquet_leaves_select = (document.getElementsByClassName(`bouquet_leavesSelect ${id}`))
                    $(bouquet_leaves_select).hide()
                    $(bouquet_leaves_select).removeClass(`bouquet_leavesSelect ${id}`);
                            //| ลบค่า items_ammount
                            bouquet_leaves_select = document.getElementById(`${id} items_main_leaves`)
                            bouquet_leaves_select.remove(); 

  }
  bouquet_leaves_count = $('.leaves_active').length
  if (bouquet_leaves_count === 3){
    inactive = (document.querySelectorAll(".leaves_icons:not(.leaves_active)"))
    $(inactive).addClass('leaves_limits');

  }
  sumPrice(0)
}
//| ---------------------------------------|//
//| Bouquet-UX/UI Wrappers systems          |//
//| Wrappers selected                      |//
//| ---------------------------------------|//
function bouquet_wrappers(id) {
  //| เช็คว่า main_flowers ยังไม่ได้ถูกเลือก
  if ( !document.getElementById(id).classList.contains('wrappers_active') ){
    //| ถ้าไม่มี class:'wrappers_active' จะเพิ่ม'wrappers_active' แทนที่
    $('.wrappers_active').removeClass('wrappers_active');
    document.getElementById(id).classList.add("wrappers_active");

        // //| เปลี่ยนรูปที่ custom bouquet canvas (bouquet_main_wrappers) รูปที่ 1
        bouquet_main_wrappers = `static/IMG/BOUQUET/${id}_main.png`
        document.getElementById("bouquet_main_wrappers").src = bouquet_main_wrappers;
        // //| เปลี่ยนรูปที่ custom bouquet canvas (bouquet_minor_wrappers) รูปที่ 2
        bouquet_minor_wrappers = `static/IMG/BOUQUET/${id}_minor.png`
        document.getElementById("bouquet_minor_wrappers").src = bouquet_minor_wrappers;

                  //| เปลี่ยนข้อมูลที่ description
                  description_ = ((bouquet_elements_dataset['main_wrappers'][String(id)][2]))
                  document.getElementById('bouquet_wrappers_description').children[0].innerHTML = description_;

      // //| เปลี่ยนรูปที่ icons items
      wrappers_main_icons = `static/IMG/BOUQUET/${id}_icons.png`
      document.getElementById('items_main_wrappers').children[0].src = wrappers_main_icons;

      name_ = 'Name: ' + ((bouquet_elements_dataset['main_wrappers'][String(id)][0]))
      document.getElementById('items_main_wrappers').children[1].children[0].innerHTML = name_;

      quantity_ = (document.getElementById('items_main_wrappers').children[1].children[1]).innerHTML = 'Qlt: 1';
      price_ =  `${(bouquet_elements_dataset['main_wrappers'][String(id)][1])} bath`
      document.getElementById('items_main_wrappers').children[1].children[2].innerHTML = price_;
  sumPrice(0)
  }
}



function sumPrice(get_resultPrice) {
    document.querySelectorAll('#price').forEach(function(items) {
      get_price = ((items.textContent).replace(/\D/g, ""))
      get_resultPrice = get_resultPrice + Number(get_price)
    });
    document.getElementById('result_cost_innerHTML').innerHTML = `${get_resultPrice}`;
}
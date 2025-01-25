//* Random-Flower dataset *//

//* Random-Flower dataset *//
random_flower_dataset = {
    'summer': {
        1:['Daffodil', 'ดอกดารารัตน์', 'Forgiveness', 'a conscious, deliberate decision to release feelings of resentment or vengeance toward a person', 'color' ],
        2:['Hydrangea', 'ดอกไฮเดรนเยีย', 'Apology', 'an admission of error or discourtesy accompanied by an expression of regret', 'color' ],
        3:['Lavender', 'ดอกลาเวนเดอร์', 'Sincerity', 'honesty of mind', 'color' ],
        4:['Peony', 'ดอกโบตั๋น', 'Honor', 'respect that is given to someone who is admired', 'color' ],
        5:['Poppy', 'ดอกป๊อปปี้', 'Consolation', 'the comfort received by a person after a loss or disappointment', 'color' ],
        6:['Rose', 'ดอกกุหลาบ', 'Happiness', `feeling that comes over you when you know life is good and you can't help but smile`, 'color' ],
        7:['Zinnia', 'ดอกบานชื่น', 'Lasting affection', 'a feeling of liking and caring for someone', 'color' ]
    
    },
    'spring': {
        1:['Carnation', 'ดอกคาร์เนชั่น', 'Never forgetting', 'The concept of never forgetting someone', 'color' ],
        2:['Dahlia', 'ดอกรักเร่', 'Kindness', 'being generous, helpful, and caring about other people', 'color' ],
        3:['Forgetmenots', 'ดอกอย่าลืมฉัน', 'Please do not forget me', 'telling someone you love not to forget the memories between us', 'color' ],
        4:['Jasmine', 'ดอกมะลิ', 'Amiability', 'Warmth and the deepest friend ship', 'color' ],
        5:['Lily', 'ดอกลิลลี่', 'Purity', 'freedom from adulteration or contamination', 'color' ],
        6:['Orchid', 'ดอกกล้วยไม้', 'Thoughtfulness', `being kind and thinking about other people's needs`, 'color' ],
        7:['Tulip', 'ดอกทิวลิป', 'Passion', 'any powerful or compelling emotion or feeling', 'color' ]
    
      },
    'autumn': {
        1:['Amaranth', 'ดอกบานไม่รู้โรย', 'Eternal life', 'life without beginning or end', 'color' ],
        2:['Chrysanthemum', 'ดอกเบญจมาศ', 'Friendship', 'enduring affection, esteem, intimacy, and trust between two people', 'color' ],
        3:['Iris', 'ดอกไอริส', 'Valor', 'strength of mind or spirit that enables a person to encounter danger with firmness', 'color' ],
        4:['Marigold', 'ดอกดาวเรือง', 'despaired love', 'losing someone you love', 'color' ],
        5:['Moonflower', 'ดอกชมจันทร์', 'Hidden beauty', 'the beauty that comes out of darkness', 'color' ],
        6:['Spiderlily', 'ดอกพลับพลึงแดง', 'Truth', 'adherence to reality, or an indisputable fact', 'color' ],
        7:['Sunflower', 'ดอกทานตะวัน', 'Adoration', 'deep love and respect', 'color' ]
      },
      'winter': {
        1:['Dianthus', 'ดอกผีเสื้อ', 'Gratitude', 'a feeling of appreciation or thanks', 'color' ],
        2:['Goldenrod', 'ดอกสร้อยทอง ', 'Peacefulness', 'being quiet and calm', 'color' ],
        3:['Hibiscus', 'ดอกชบา', 'Joy', 'great delight or happiness caused by something exceptionally good', 'color' ],
        4:['Lonicera', 'ดอกสายน้ำผึ้ง', 'New love', 'sweetness for a new love in your life', 'color' ],
        5:['Magnolia', 'ดอกแมกโนเลีย', 'Nobility', 'nobleness of mind, character, or spirit', 'color' ],
        6:['Snapdragon', 'ดอกลิ้นมังกร', 'Grace', 'a smooth and pleasing way of moving', 'color' ],
        7:['Violet', 'ดอกไวโอเล็ต', 'Everlasting love', 'love that never comes to the end', 'color' ]
      },
  }


$('.random_box input').hover(
  function(){ $(this).removeClass('random_invalid_check') }
)

function random_flower_sumbit() {
  // สุ่มฤดูกาล (season)
  const seasons = Object.keys(random_flower_dataset);
  const randomSeason = seasons[Math.floor(Math.random() * seasons.length)]
  const flowerNumbers = Object.keys(random_flower_dataset[randomSeason]);
  const randomNumber = flowerNumbers[Math.floor(Math.random() * flowerNumbers.length)];
  const flowerData = random_flower_dataset[randomSeason][randomNumber];
  
  // อัพเดท UI
  document.getElementById('random_smll_img').src = `../Project-PSCP/static/IMG/RANDOMS/random_${flowerData[0].toLowerCase()}_smll.png`;
  document.getElementById('random_bg_img').style.backgroundImage = `url('../Project-PSCP/static/IMG/RANDOMS/random_${flowerData[0].toLowerCase()}_bg.png')`; 
  document.getElementById('random_en').innerHTML = flowerData[0];
  document.getElementById('random_th').innerHTML = flowerData[1];
  document.getElementById('random_meaning').innerHTML = flowerData[2];
  document.getElementById('random_submeaning').innerHTML = flowerData[3];

  $("#random_form_layout").fadeOut();
  setTimeout(function(){
    $("#random_result_layout").fadeIn("slow");
  },400)
}



function random_flower_back() {
  $("#random_submit_content, #random_colors_content, #random_seasons_content, #random_result_layout").fadeOut();
  setTimeout(function(){
    $("#random_form_layout").fadeIn("slow");
  },400)
}


function random_flower_repeated() {
  // สุ่มฤดูกาล (season)
  const seasons = Object.keys(random_flower_dataset);
  const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];
  
  // สุ่มดอกไม้ในฤดูกาลนั้น (flower number)
  const flowerNumbers = Object.keys(random_flower_dataset[randomSeason]);
  const randomNumber = flowerNumbers[Math.floor(Math.random() * flowerNumbers.length)];
  
  // ดึงข้อมูลดอกไม้
  const flowerData = random_flower_dataset[randomSeason][randomNumber];
  
  // อัพเดท UI โดยตรง
  document.getElementById('random_smll_img').src = `../Project-PSCP/static/IMG/RANDOMS/random_${flowerData[0].toLowerCase()}_smll.png`;
  document.getElementById('random_bg_img').style.backgroundImage = `url('../Project-PSCP/static/IMG/RANDOMS/random_${flowerData[0].toLowerCase()}_bg.png')`; 
  document.getElementById('random_en').innerHTML = ` ${flowerData[0]}`;
  document.getElementById('random_th').innerHTML = `${flowerData[1]}`;
  document.getElementById('random_meaning').innerHTML = `${flowerData[2]}`;
  document.getElementById('random_submeaning').innerHTML = `${flowerData[3]}`;
  
  // Optional: แสดงผลใน console เพื่อดูว่าสุ่มได้อะไร
  console.log(`Season: ${randomSeason}, Number: ${randomNumber}, Flower: ${flowerData[0]}`);
}
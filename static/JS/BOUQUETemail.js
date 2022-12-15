// Bouquet Sending Email

function bouquet_SendEmail() {
  var content = document.querySelector('.bouquet_canvas').innerHTML;
  // console.log(content)
  document.getElementById("bouquet_EmailCanvas").insertAdjacentHTML("afterbegin", content);
  // document.getElementById("add_to_me").insertAdjacentHTML("afterend","<h3>This is the text which has been inserted by JS</h3>");
  var data = document.querySelector('.bouquet_finishedEmail').innerHTML;
  console.log(data)
  document.getElementById("bouquet_email_data").value = data;
  

  // const request = new XMLHttpRequest()
  // request.open('POST', '/ProcessUserinfo/${JSON.stringify(new_content)}')
  // request.send();
}



//| ---------------------------------------|//
//| Bouquet-UX/UI flowers systems          |//
//| main Emails      ß                      |//
//| ---------------------------------------|//
function bouquet_email_selected(id) {
  //| เช็คว่า main_flowers ยังไม่ได้ถูกเลือก
  if ( !document.getElementById(id).classList.contains('emails_active') ){
    //| ถ้าไม่มี class:'emails_active' จะเพิ่ม'emails_active' แทนที่
    $('.emails_active').removeClass('emails_active');
    document.getElementById(id).classList.add("emails_active");

    //| เปลี่ยนรูปที่ custom emails canvas
    bouquet_main_flowers = `static/IMG/BOUQUET/email_${id}_icons.png`
    document.getElementById("email_flowers_bg_icons").src = bouquet_main_flowers;
    //| เปลี่ยนค่า value flowers
    document.getElementById("email_flowers").value = `${id}`;
  }
}

// function addCode() {
//   document.getElementById("add_to_me").insertAdjacentHTML("afterend","<h3>This is the text which has been inserted by JS</h3>");
// }


/* <div id="add_to_me">
<h1>GeeksforGeeks</h1>
<p id="add_after_me">This is the text which has already been typed into the div</p>
</div>
<p id="add_after_me">END</p>



<button onclick="addCode()">Add Stuff</button> */


// function addCode() {
//     myhtmlattachment = codecs.open("EmailTemp.html", 'r')
//     html = myhtmlattachment.read()
//     document.getElementById("add_to_me").insertAdjacentHTML("afterend",);
// }
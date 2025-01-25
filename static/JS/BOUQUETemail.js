// Bouquet Sending Email

function bouquet_SendEmail() {
  var content = document.querySelector('.bouquet_canvas').innerHTML;
  // console.log(content)
  document.getElementById("bouquet_EmailCanvas").insertAdjacentHTML("afterbegin", content);
  // document.getElementById("add_to_me").insertAdjacentHTML("afterend","<h3>This is the text which has been inserted by JS</h3>");
  var data = document.querySelector('.bouquet_finishedEmail').innerHTML;
  console.log(data)
  document.getElementById("bouquet_email_data").value = data;
}



//| ---------------------------------------|//
//| Bouquet-UX/UI flowers systems          |//
//| main Emails                            |//
//| ---------------------------------------|//
function bouquet_email_selected(id) {
  //| เช็คว่า main_flowers ยังไม่ได้ถูกเลือก
  if ( !document.getElementById(id).classList.contains('emails_active') ){
    //| ถ้าไม่มี class:'emails_active' จะเพิ่ม'emails_active' แทนที่
    $('.emails_active').removeClass('emails_active');
    document.getElementById(id).classList.add("emails_active");

    //| เปลี่ยนรูปที่ custom emails canvas
    email_flowers_bg_icon = `../static/IMG/EMAIL/email_${id}_icon.png`
    document.getElementById("email_flowers_bg_icon").src = email_flowers_bg_icon;
    //| เปลี่ยนค่า value flowers
    document.getElementById("email_flowers").value = `${id}`;
  }
}
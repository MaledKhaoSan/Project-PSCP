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
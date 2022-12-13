// document.querySelector('button').addEventListener('click', function() {
//     html2canvas(document.querySelector('.capture_canvas'), {
//         onrendered: function(canvas) {
//             // document.body.appendChild(canvas);
//           return Canvas2Image.saveAsPNG(canvas);
//         }
//     });
// });
function getCaptureFunction(){
    html2canvas(document.querySelector('.capture_canvas'), {
        onrendered: function(canvas) {
            // document.body.appendChild(canvas);
          return Canvas2Image.saveAsPNG(canvas);
        }
    });
}
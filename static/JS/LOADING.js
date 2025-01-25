document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    const IMAGE_PATHS = [

        "../Project-PSCP/static/IMG/ENTER/background1.png", 
        "../Project-PSCP/static/IMG/ENTER/background2.png", 
        "../Project-PSCP/static/IMG/ENTER/element1.png", 
        "../Project-PSCP/static/IMG/ENTER/element2.png", 
        "../Project-PSCP/static/IMG/ENTER/element3.png", 
        "../Project-PSCP/static/IMG/ENTER/element4.png", 
        "../Project-PSCP/static/IMG/ENTER/element5.png", 
        "../Project-PSCP/static/IMG/ENTER/element6.png", 
        "../Project-PSCP/static/IMG/ENTER/element7.png", 
        "../Project-PSCP/static/IMG/ENTER/element8.png",
    ];

    var queue = new createjs.LoadQueue();
    queue.on("complete", handleComplete);
    queue.on("progress", handleProgress); 

    // โหลดรูปทั้งหมดจาก array
    queue.loadManifest(IMAGE_PATHS.map(path => ({src: path})));

    function handleProgress(event) {
        // แสดง progress (0-100%)
        const progress = Math.round(event.progress * 100);
        document.getElementById('loading-progress').textContent = progress + '%';
    }

    function handleComplete() {
        loadingScreen.style.display = 'none';
        document.body.style.visibility = 'visible';
    }
});
var player;
var interval = 6;
var count = interval;
var minutes = 0;
test();
(function localFileVideoPlayerInit(win) {
    var URL = win.URL || win.webkitURL,
        displayMessage = (function displayMessageInit() {
            var node = document.querySelector('#message');

            return function displayMessage(message, isError) {
                node.innerHTML = message;
                node.className = isError ? 'error' : 'info';
            };
        }()),
        playSelectedFile = function playSelectedFileInit(event) {
            var file = this.files[0];

            var type = file.type;

            var videoNode = document.querySelector('video');

            var canPlay = videoNode.canPlayType(type);

            canPlay = (canPlay === '' ? 'no' : canPlay);

            var message = 'Can play type "' + type + '": ' + canPlay;

            var isError = canPlay === 'no';

            

            if (isError) {
                return;
            }
			
			else {
				startIteration();
			}

            var fileURL = URL.createObjectURL(file);

            videoNode.src = fileURL;
        },
        inputNode = document.querySelector('input');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    if (!URL) {
        displayMessage('Your browser is not ' + 
           '<a href="http://caniuse.com/bloburls">supported</a>!', true);
        
        return;
    }                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    inputNode.addEventListener('change', playSelectedFile, false);
}(window));

	function test()
	{
	
	var str = String(window.location.search);
	var res = str.split("name=");
	document.getElementById("demo").innerHTML = res[1];
	}
	
	function startIteration()
	{
	var video = document.getElementById("myVideo");
	video.addEventListener("timeupdate", function(){
    if(this.currentTime >= count) {
		count = count + interval;
		minutes = minutes +1;
        this.pause();
		startIteration();
    }
	
});
}
	function proceedProcess()
	{
	document.getElementById("rating_text").value = document.getElementById("rating_text").value +"\n "+minutes +"        "+ document.getElementById("id_work_days").value;
	var video = document.getElementById("myVideo");
	video.play();
	}
	
	function pauseProcess()
	{
	var video = document.getElementById("myVideo");
	video.pause();
	}
	
	function download(filename, text) 
	{
	
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
	
	}
	
	function processText()
	{
	
	var str = String(window.location.search);
	var res = str.split("name=");
	
	var d = new Date();
	
	var text = document.getElementById("rating_text").value;
	var filename=res[1]+".txt"
    download(filename, text);
	}


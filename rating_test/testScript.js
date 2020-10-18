
    var player;
	var interval = 6;
	var count = interval;
	var minutes = 0;
	
     function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-placeholder', {
          height: '390',
          width: '800',
          videoId: '', // insert your video id here - example:   https://www.youtube.com/watch?v=6plKMU0tTTk

        });
		startInterval()
     }
	 
	 
	 

	 function startInterval() {
   //checks every 100ms to see if the video has reached 6s
   checkInt = setInterval(function() {
      if (player.getCurrentTime() > count) {
         player.pauseVideo();
         clearInterval(checkInt);
		 count = count + interval;
		 minutes = minutes + 1;
		 startInterval();
      };
   }, 100)
}

    $( document ).ready(function() {
      $('#proceed').on('click', function () {
        player.playVideo();
      });

      $('#pause').on('click', function () {
        player.pauseVideo();
      });
    });
	
	function goFunction()
	{
	var x = document.getElementById("link").value;
	var str = String(x);
	var res = str.split("watch?v=");
	document.getElementById("demo").innerHTML = res[0]+"embed/"+res[1];
	player.loadVideoById(res[1]);
	
	}
	
	function goLocal()
	{
	
	}
	
	function processRating()
	{
	document.getElementById("rating_text").value = document.getElementById("rating_text").value +"\n "+minutes +"        "+ document.getElementById("id_work_days").value;
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
	var d = new Date();
	var text = document.getElementById("rating_text").value;
	text = document.getElementById("name").value + "\n" + d + "\n" + text;
    var filename = document.getElementById("name").value+".txt";
    download(filename, text);
	}

   
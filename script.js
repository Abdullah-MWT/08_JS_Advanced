// There are many ways to do onclick events
document.getElementById("photo3").onclick = function () {
    // but his isn,t recomended
    alert("photo3 was clicked");
  };
  document.getElementById("photo4").addEventListener("click", function (e) {
    // This is most recomended
    alert("photo4 was clicked");
  });

  // Some important Properties of HTML events

  // 1:- type   //  It provides a string that indicates the type of event that occurred.
  function logEventType(event) {
    document.getElementById('pfunc1').innerHTML = `Event: ${event.type}`;
  }
  document.getElementById("btnFfunc1").addEventListener("click", logEventType);
  document.getElementById('inputFunc1').addEventListener('keydown', logEventType);
  document.getElementById('inputFunc1').addEventListener('keyup', logEventType)

  let startTime = null;

      document.getElementById('startBtn').addEventListener('click', (event) => {
          startTime = event.timeStamp;
          document.getElementById('output').innerText = 'Timer started!';
      });

      document.getElementById('endBtn').addEventListener('click', (event) => {
          if (startTime !== null) {
              const duration = event.timeStamp - startTime;
              document.getElementById('output').innerText = `Elapsed time: ${Math.round(duration)} milliseconds`;
              startTime = null; // Reset startTime for the next measurement
          } else {
              document.getElementById('output').innerText = 'Please start the timer first!';
          }
      });

  // 3:- preventDefault     // it is used to control the default behavior of an event.
  document
    .getElementById("anchorTag")
    .addEventListener("click", function (event) {
      event.preventDefault();
      alert("Link was prevented by preventDefault() method");
    });

  // 4:- target         // The target property returns the element where the event occured.
  function myFunction4(event) {
    let text = event.target;
    document.getElementById("target").textContent = text;
  }

  // Attach the event listener in the script
  document.body.addEventListener("click", myFunction4);



  //  Let,s do some  more practise of Event Properties
  document.getElementById('images').addEventListener('click', function(event){
    if (event.target.tagName === 'IMG') {
      console.log(event.target.parentNode); 
     let removeIMG = event.target.parentNode;
     removeIMG.remove();
    }
     
  })

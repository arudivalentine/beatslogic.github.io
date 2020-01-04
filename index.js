window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const taps = document.querySelectorAll(".taps div");
  const visual = document.querySelector(".visual");
  const colors = [
      "#60d394",
      "#d36060",
      "#c060d3",
      "#d3d160",
      "#606bd3",
      "#60c2d3",
      "#333ede",
      "#6defff"
  ];

  taps.forEach((tap, index) => {
    tap.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 2s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
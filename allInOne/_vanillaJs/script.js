const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const blob = document.querySelector(".blob");

document.body.onpointermove = (event) => {
  const { clientY, clientX } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    {
      duration: 3000,
      fill: "forwards",
    }
  );
};

document.querySelector("h1").onmouseover = (event) => {
  let interations = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((_, index) => {
        if (index < interations) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (interations >= event.target.dataset.value.length)
      clearInterval(interval);

    interations += 1 / 5;
  }, 30);
};

console.log("testing something");

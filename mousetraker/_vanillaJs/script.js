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

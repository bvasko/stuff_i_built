const fig = document.getElementsByTagName("figure");
fig.forEach((el) => {
  console.log('click', el)
  el.addEventHandler("click", (evt) => {
    console.log('click', evt)
    window.open("", "_blank");
  });
});
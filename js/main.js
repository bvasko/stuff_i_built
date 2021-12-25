const fig = document.getElementsByTagName("figure");
console.log(fig.length)
for (let i = 0; i < fig.length; i++) {
  const el = fig[i];
  console.log('click', el.dataset.link);
  el.addEventListener("click", (evt) => {
    console.log('click', evt)
    window.open(el.dataset.link, "_blank");
  });
}

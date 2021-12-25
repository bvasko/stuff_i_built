const fig = document.getElementsByTagName("figure");
for (let i = 0; i < fig.length; i++) {
  const el = fig[i];
  console.log('click', el.dataset.link);
  el.addEventListener("click", (evt) => {
    window.open(el.dataset.link, "_blank");
  });
}

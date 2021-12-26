const fig = document.getElementsByTagName("figure");
for (let i = 0; i < fig.length; i++) {
  const el = fig[i];
  el.addEventListener("click", (evt) => {
    window.open(el.dataset.link, "_blank");
  });
}

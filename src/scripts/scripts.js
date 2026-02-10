const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  const summary = collapsible.querySelector("summary");
  const content = collapsible.querySelector(".collapsible-content");
  if (!summary || !content) {
    return;
  }

  const setOpenHeight = () => {
    content.style.maxHeight = `${content.scrollHeight}px`;
  };

  if (collapsible.hasAttribute("open")) {
    setOpenHeight();
  } else {
    content.style.maxHeight = "0px";
  }

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (collapsible.open) {
      collapsible.classList.add("is-closing");
      content.style.maxHeight = `${content.scrollHeight}px`;
      requestAnimationFrame(() => {
        content.style.maxHeight = "0px";
      });

      const onClose = (e) => {
        if (e.propertyName !== "max-height") {
          return;
        }
        collapsible.removeEventListener("transitionend", onClose);
        collapsible.classList.remove("is-closing");
        collapsible.removeAttribute("open");
      };

      collapsible.addEventListener("transitionend", onClose);
      return;
    }

    collapsible.setAttribute("open", "");
    collapsible.classList.remove("is-closing");
    requestAnimationFrame(() => {
      setOpenHeight();
    });
  });
});
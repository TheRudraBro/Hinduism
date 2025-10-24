    const readBtn = document.getElementById('readBtn');
    const content = document.getElementById('bookContent');

    readBtn.addEventListener('click', () => {
      content.classList.add('show');
      readBtn.style.display = 'none'; // hide button after click
      window.scrollTo({ top: content.offsetTop, behavior: 'smooth' });
    });
    
    const closeBtn = document.getElementById("closeBtn");

    // Show content
    readBtn.addEventListener("click", () => {
      content.style.display = "block";
      setTimeout(() => content.classList.add("show"), 50);
      readBtn.style.display = "none";
      window.scrollTo({ top: content.offsetTop, behavior: "smooth" });
    });

    // Hide content
    closeBtn.addEventListener("click", () => {
      content.classList.remove("show");
      content.classList.add("hide");
      setTimeout(() => {
        content.style.display = "none";
        content.classList.remove("hide");
        readBtn.style.display = "inline-block";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 800); // smooth fade-out
    });
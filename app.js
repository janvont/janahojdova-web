const films = [
  {
    title: "Robert Richardson: The White Devil",
    role: "Director",
    duration: "01:29",
    thumbnail: "https://i.ytimg.com/vi/Y03xvJ4SYQg/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/Y03xvJ4SYQg"
  },
  {
    title: "Chica Checa",
    role: "Cinematography",
    duration: "02:33",
    thumbnail: "https://i.ytimg.com/vi/XUKn2SK7UI0/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/XUKn2SK7UI0"
  },
  {
    title: "Hello, Welcome",
    role: "Cinematography",
    duration: "02:02",
    thumbnail: "https://static.wixstatic.com/media/eef412_2c395cbaff2145aa881f7d1b0e749e11~mv2.png/v1/fill/w_1200,h_675,enc_auto/file.jpeg",
    video: "https://player.vimeo.com/video/1028227118"
  },
  {
    title: "A pak přišla láska…",
    role: "Cinematography",
    duration: "01:50",
    thumbnail: "https://static.wixstatic.com/media/eef412_4a7c902b4c4e47ef94561deb5a712491~mv2.png/v1/fill/w_1200,h_675,enc_auto/file.jpeg",
    video: "https://player.vimeo.com/video/801582794"
  },
  {
    title: "Zrcadla ve tmě / Mirrors in the Dark",
    role: "Cinematography",
    duration: "01:43",
    thumbnail: "https://i.vimeocdn.com/video/1242333851-2875d41b620fe9d8a7175a78d29f81ad072b9df25de64c74ac3aff0e0ae3fc5e-d_1920x1080",
    video: "https://player.vimeo.com/video/605775142"
  },
  {
    title: "Annexions",
    role: "Cinematography",
    duration: "00:16",
    thumbnail: "https://i.vimeocdn.com/video/1738019154-82c3c9c91e4f027b58b21f4c3ed765ab07f68e45bf34f01d0508a5be45956828-d_1920x1080",
    video: "https://player.vimeo.com/video/874169183"
  },
  {
    title: "Igor Orozovič — Náušnice",
    role: "Director · Cinematography",
    duration: "04:29",
    thumbnail: "https://i.ytimg.com/vi/_S6AB0gIF6w/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/_S6AB0gIF6w"
  },
  {
    title: "Take Me Anywhere",
    role: "Music video",
    duration: "03:54",
    thumbnail: "https://i.vimeocdn.com/video/1273146761-9531e5ba17c5a8dc229b8cb5c761d1a86c0503aba012ef0ae_1920x1080",
    video: "https://player.vimeo.com/video/630875589"
  },
  {
    title: "Don't Leave Me",
    role: "Music video",
    duration: "04:11",
    thumbnail: "https://i.vimeocdn.com/video/1273138813-8d044dc1dc7c57ddf3d28197d515e6102de95fedba0524d37_1920x1080",
    video: "https://player.vimeo.com/video/630869022"
  },
  {
    title: "On the Dancefloor",
    role: "Music video",
    duration: "03:49",
    thumbnail: "https://i.vimeocdn.com/video/1273153114-13398407916a7cb35f1d38825c67b91741bf695f12bedd2aa_1920x1080",
    video: "https://player.vimeo.com/video/630882130"
  },
  {
    title: "Na věčnost",
    role: "Music video",
    duration: "03:46",
    thumbnail: "https://i.vimeocdn.com/video/1242260895-0ed71ec99ada159762906db9914f8e1a6f62acc7fb453a54077e754ad82af906-d_1920x1080",
    video: "https://player.vimeo.com/video/605708391"
  },
  {
    title: "Reflektivní",
    role: "Music video",
    duration: "01:50",
    thumbnail: "https://i.vimeocdn.com/video/1242281738-b4e30162f34b93e9dcef49c048d823525cc58cc29e8088611be65d2ba44db98a-d_1920x1080",
    video: "https://player.vimeo.com/video/605728476"
  },
  {
    title: "Křehká",
    role: "Music video",
    duration: "04:40",
    thumbnail: "https://i.vimeocdn.com/video/1242254638-7a94d69bc35a2febc2ebc7a1a2371f4bb035610ac7eca74ccf39af318648b2aa-d_1920x1080",
    video: "https://player.vimeo.com/video/605702074"
  },
  {
    title: "Kiss from a Rose — Live Session",
    role: "Cinematography",
    duration: "04:35",
    thumbnail: "https://i.ytimg.com/vi/yvrYS3cNizI/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/yvrYS3cNizI"
  },
  {
    title: "Letopis — Petr Hojda",
    role: "Documentary",
    duration: "06:41",
    thumbnail: "https://i.vimeocdn.com/video/1242300481-cc35eba5bf353f7942bd6ddd881c13e76dd89ad4996786e083ad4691a6de249d-d_1920x1080",
    video: "https://player.vimeo.com/video/605738007"
  },
  {
    title: "Zázračná krev — Kapka naděje",
    role: "Director",
    duration: "05:54",
    thumbnail: "https://i.vimeocdn.com/video/1242241292-b5c07afd99e62681c6d09329129084f30149ebebea590ed9cb9a31721737c870-d_1920x1080",
    video: "https://player.vimeo.com/video/605685367"
  },
  {
    title: "Zkouškový",
    role: "Cinematography",
    duration: "00:14",
    thumbnail: "https://i.vimeocdn.com/video/1242327208-482c7ec4024075fbb282fee97ed1ea5ca0d134205112bd351df263cd48ece1da-d_1920x1080",
    video: "https://player.vimeo.com/video/605771258"
  },
  {
    title: "Zkouškový 2",
    role: "Cinematography",
    duration: "00:15",
    thumbnail: "https://i.vimeocdn.com/video/1242319864-bd16636dc05b811c8bf3149ecf4f386feca195d0147b8baa155233536bfaf2a3-d_1920x1080",
    video: "https://player.vimeo.com/video/605765258"
  }
];

const filmGrid = document.querySelector("#film-grid");
const showAllButton = document.querySelector("#show-all-films");
const videoDialog = document.querySelector("#video-dialog");
const videoFrame = document.querySelector("#video-frame");
const videoTitle = document.querySelector("#video-dialog-title");
const photoDialog = document.querySelector("#photo-dialog");
const photoPreview = document.querySelector("#photo-preview");
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

function durationLabel(value) {
  return value.replace(/^0/, "");
}

function renderFilms() {
  filmGrid.innerHTML = films.map((film, index) => `
    <article class="film-card" ${index >= 8 ? "hidden" : ""}>
      <button class="film-button" type="button" data-video="${film.video}" data-title="${film.title.replaceAll('"', '&quot;')}">
        <div class="film-image">
          <img src="${film.thumbnail}" alt="${film.title.replaceAll('"', '&quot;')}" loading="${index < 2 ? "eager" : "lazy"}">
          <span class="film-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="film-duration">${durationLabel(film.duration)}</span>
        </div>
        <div class="film-meta">
          <h3 class="film-title">${film.title}</h3>
          <p class="film-role">${film.role}</p>
        </div>
      </button>
    </article>
  `).join("");
}

function openVideo(url, title) {
  const joiner = url.includes("?") ? "&" : "?";
  videoTitle.textContent = title;
  videoFrame.innerHTML = `<iframe src="${url}${joiner}autoplay=1" title="${title.replaceAll('"', '&quot;')}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  videoDialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeVideo() {
  videoDialog.close();
  videoFrame.innerHTML = "";
  document.body.classList.remove("dialog-open");
}

renderFilms();

document.addEventListener("click", (event) => {
  const videoButton = event.target.closest("[data-video]");
  if (videoButton) {
    openVideo(videoButton.dataset.video, videoButton.dataset.title);
  }
});

showAllButton.addEventListener("click", () => {
  const expanded = showAllButton.getAttribute("aria-expanded") === "true";
  document.querySelectorAll(".film-card").forEach((card, index) => {
    if (index >= 8) card.hidden = expanded;
  });
  showAllButton.setAttribute("aria-expanded", String(!expanded));
  showAllButton.innerHTML = expanded
    ? "View all films <span aria-hidden=\"true\">＋</span>"
    : "Show selected only <span aria-hidden=\"true\">−</span>";
});

videoDialog.querySelector(".dialog-close").addEventListener("click", closeVideo);
videoDialog.addEventListener("click", (event) => {
  if (event.target === videoDialog) closeVideo();
});
videoDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeVideo();
});

document.querySelectorAll(".photo").forEach((button) => {
  button.addEventListener("click", () => {
    photoPreview.src = button.dataset.image;
    photoDialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

function closePhoto() {
  photoDialog.close();
  photoPreview.src = "";
  document.body.classList.remove("dialog-open");
}

photoDialog.querySelector(".dialog-close").addEventListener("click", closePhoto);
photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) closePhoto();
});
photoDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closePhoto();
});

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  primaryNav.classList.toggle("open", !open);
  header.classList.toggle("menu-open", !open);
});

primaryNav.addEventListener("click", (event) => {
  if (!event.target.matches("a")) return;
  menuToggle.setAttribute("aria-expanded", "false");
  primaryNav.classList.remove("open");
  header.classList.remove("menu-open");
});

const sections = [...document.querySelectorAll("main > section[id]")];
const navLinks = [...primaryNav.querySelectorAll("a")];

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.toggleAttribute("aria-current", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55%" });

sections.forEach((section) => sectionObserver.observe(section));

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > window.innerHeight * 0.72);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

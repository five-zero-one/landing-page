const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav.menu ul");

const links = [...sections]
    .filter(section => section.id)
    .map(section => {
        const item = document.createElement("li");
        const anchor = document.createElement("a");

        item.appendChild(anchor);

        const textContent = section.id.replaceAll("%20", " ");

        anchor.textContent = textContent[0].toUpperCase() + textContent.substring(1);
        anchor.href = "#" + section.id;

        return item;
    });

nav.append(...links);

document.addEventListener("click", jumpToSection);



function jumpToSection(e) {

    const { target: el } = e;

    if (el.tagName.toLowerCase() === "a") {
        e.preventDefault();

        e.target.closest("header").querySelector("input").checked = false;

        document
            .getElementById(el.href.split("/").at(-1).substring(1))
            .scrollIntoView({ behavior: "smooth" });
    }
}

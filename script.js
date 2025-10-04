const searchIconDiv = document.querySelector(".searchIconDiv");
const headerDiv = document.querySelector(".headerDiv");
let originalHeaderHTML = headerDiv.innerHTML;
const searchInputHTML = `
    <div style="display: flex; align-items: center; justify-content: center; text-align: center; width: 50%; gap: 25px;">
        <div class="navLinks searchDiv" style="width: 100%;">
            <input type="text" placeholder="Search" style="padding: 11px 21px; width: 100%; font-size: 16px; border-radius: 5px; border: 1px solid #ccc;">
            <svg class="cursor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-a84689ca-fde2-4e43-a612-bf54685e150b, rgb(67, 87, 111))" style="user-select: none; display: inline-block; fill: var(--token-a84689ca-fde2-4e43-a612-bf54685e150b, rgb(67, 87, 111)); color: var(--token-a84689ca-fde2-4e43-a612-bf54685e150b, rgb(67, 87, 111)); flex-shrink: 0;"><g color="var(--token-a84689ca-fde2-4e43-a612-bf54685e150b, rgb(67, 87, 111))" weight="regular"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></g></svg>
        </div>
        <div class="setIcon cursor alignC" id="closeSearch">
            <p> x </p>
        </div>
    </div> `;
searchIconDiv.addEventListener("click", () => (checkOnSearch ()) );
function reattachListeners() {
    const shopNew = document.querySelector(".shop");
    const hContentNew = document.querySelector(".headerContent2");
    shopNew.addEventListener("mouseenter", () => {
        hContentNew.style.display = "flex";
        hideTimeout = setTimeout(() => (hContentNew.style.display = "none"), 2000);
    });
    hContentNew.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
        hContentNew.style.display = "flex";
    });
    hContentNew.addEventListener("mouseleave", () => (hContentNew.style.display = "none"));
    const searchIconDivNew = document.querySelector(".searchIconDiv");
    searchIconDivNew.addEventListener("click", () => (checkOnSearch()) );
};
function bodyClickHandler(event) {
    if (!(headerDiv.contains(event.target)) || (event.target.closest("#closeSearch"))) (closeSearch());
};
function checkOnSearch() {
    headerDiv.innerHTML = searchInputHTML;
    document.body.addEventListener("click", bodyClickHandler);
    headerDiv.classList.toggle("reduced-padding");
    const searchScrollDiv = document.querySelector(".searchScrollDiv");
    searchScrollDiv.style.display = "block";
    document.body.style.overflow = 'hidden';
};
function closeSearch() {
    headerDiv.innerHTML = originalHeaderHTML;
    document.body.removeEventListener("click", bodyClickHandler);
    headerDiv.classList.toggle("reduced-padding");
    const searchScrollDiv = document.querySelector(".searchScrollDiv");
    if (searchScrollDiv) searchScrollDiv.style.display = "none";
    document.body.style.overflow = 'auto';
    reattachListeners();
};
// 버튼 이동하기
const link = () => {
    const li = document.querySelectorAll(".header_nav ul li a");

    li.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault(); // #의 기능을 차단

            const $href = document.querySelector(element.getAttribute("href"));
            $href.scrollIntoView({ behavior: "smooth" });
        });
    });
};

export default link;

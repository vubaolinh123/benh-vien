let currentSlide = 0;
const slides = [...document.querySelectorAll('[data-slide]')];
function changeSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => { slide.hidden = i !== currentSlide; slide.classList.toggle('active', i === currentSlide); });
  document.querySelectorAll('[data-goto]').forEach((button, i) => {
    button.classList.toggle('selected', i === currentSlide);
    button.setAttribute('aria-pressed', String(i === currentSlide));
  });
}
document.querySelector('.slide-arrow.prev').addEventListener('click', () => changeSlide(currentSlide - 1));
document.querySelector('.slide-arrow.next').addEventListener('click', () => changeSlide(currentSlide + 1));
document.querySelectorAll('[data-goto]').forEach(button => button.addEventListener('click', () => changeSlide(Number(button.dataset.goto))));
document.querySelector('#open-gallery').addEventListener('click', () => {
  showModal(`${title('HÌNH ẢNH ĐẠI AN', 'Gần gũi trong từng khoảnh khắc')}<div class="gallery-grid"><figure><img src="../assets/4c135fdb1e0c0e75.png" alt="Chụp X-quang"><figcaption>Hoạt động chẩn đoán hình ảnh</figcaption></figure><figure><img src="../assets/b89bed8cfcf32aa1.png" alt="Lấy mẫu xét nghiệm"><figcaption>Hoạt động xét nghiệm</figcaption></figure><figure><img src="../assets/9f782df485306de5.jpg" alt="Trao quà cho bệnh nhi"><figcaption>Khoảnh khắc quan tâm, chia sẻ cùng người bệnh</figcaption></figure></div><p class="source-note">Ảnh từ fanpage Bệnh viện Đa khoa Đại An.</p>`);
});

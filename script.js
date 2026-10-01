const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a, button');

if (cursor) {
  window.addEventListener('pointermove', (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
}

links.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    if (cursor) {
      cursor.classList.add('is-link');
    }
  });

  link.addEventListener('mouseleave', () => {
    if (cursor) {
      cursor.classList.remove('is-link');
    }
  });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    skillCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = selected === 'all' || category === selected;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

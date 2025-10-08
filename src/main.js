'use strict ';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  horizontal.style.transform = `translateY(${y}px)`;
  vertical.style.transform = `translateX(${x}px)`;
  target.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  tag.style.transform = `translate(${x}px, ${y}px)`;
  tag.innerHTML = `${x}px, ${y}px`;
});

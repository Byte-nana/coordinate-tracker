'use strict ';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (e) => {
  horizontal.style.transform = `translateY(${e.clientY}px)`;
  vertical.style.transform = `translateX(${e.clientX}px)`;
  target.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  tag.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  tag.innerHTML = `${e.clientX}px, ${e.clientY}px`;
});

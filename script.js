const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

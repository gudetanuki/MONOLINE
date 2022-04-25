'use strict';
{
  const target = document.getElementById('face');
  const name = document.getElementById('title-name');
  const profile = document.getElementById('profile-text');

  function callback(entries, obs) {
    console.log(entries[0]);

    if (!entries[0].isIntersecting) {
      return;
    }
    entries[0].target.classList.add('appear');
    entries[0].name.classList.add('appear');
    entries[0].profile.classList.add('appear');
    obs.unobserve(entries[0].target);
    obs.unobserve(entries[0].name);
    obs.unobserve(entries[0].profile);



    // if (entries[0].isIntersecting) {
    //   entries[0].target.classList.add('appear');
    // } else {
    //   entries[0].target.classList.remove('appear');
    // }
  }

  const options = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px',
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(target);
  observer.observe(name);
  observer.observe(profile);
}
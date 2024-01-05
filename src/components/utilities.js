export function navigateTo(htmlElementId) {
  if (!htmlElementId) {
    window.scrollTo(0, -window.scrollY);
    return;
  }
  const element = document.getElementById(htmlElementId);
  window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - 60);
  setTimeout(() => {
    if (Math.abs(element.getBoundingClientRect().top - 60) > 10) {
      window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - 60);
    }
  }, 10);

  window.history.replaceState(null, null, `#${htmlElementId}`);
}

export function openGithub(gotoIssuePage) {
  const path = gotoIssuePage ? 'issues' : 'pulls';
  window.open(`https://github.com/Rhosys/soc2.fyi/${path}`, '_blank');
}

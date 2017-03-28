$(document).ready(function() {
	/* Fullpage Initialization */
	$('#fullpage').fullpage({
    sectionsColor: ['#83DBF1', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['inicio', 'sobre', 'habilidades', 'projetos', 'curriculo', 'contato'],
    menu: '#menu',
    css3: true,
    // Scrolling
    fitToSection: true,
    scrollOverflow: true,
		scrollOverflowEndPrevent: { delay: 500, reversal: false },
    scrollingSpeed: 1000
  });
});
$(document).ready(function() {
	/* Fullpage Initialization */
	$('#fullpage').fullpage({
		navigation: true,
    sectionsColor: ['#83DBF1', '#5b5b5b', '#7BAABE', 'whitesmoke'],
    anchors: ['inicio', 'sobre', 'projetos', 'contato'],
    navigationTooltips: ['Início', 'Sobre', 'Projetos', 'Contato'],
    menu: '#menu',
    css3: true,
    // Scrolling
    fitToSection: true,
    scrollOverflow: true,
		scrollOverflowEndPrevent: { delay: 500, reversal: false },
    scrollingSpeed: 1000
  });
});
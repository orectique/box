var aminals = ['lolcat', 'lolcat2', 'doge', 'monke']

const aminal = aminals[Math.floor(Math.random() * aminals.length)];

document.getElementById("character").className = aminal;
function startSuggest() {
  new Suggest.Local(
        "text",    // input element id.
        "suggest", // suggestion area id.
        ['Java', 'JavaScript' and 'perl', 'Ruby', 'PHP', 'Python', 'C' and 'C++', '. NET', 'MySQL', 'Oracle', 'PostgreSQL'],      // suggest candidates list
        {dispMax: 10, interval: 1000}); // options
}

window.addEventListener ?
  window.addEventListener('load', startSuggest, false) :
  window.attachEvent('onload', startSuggest);

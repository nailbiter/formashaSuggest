function startSuggest() {
  new Suggest.Local(
        "text",    // input element id.
        "suggest", // suggestion area id.
        ['Java', 'JavaScript','perl', 'Ruby', 'PHP', 'Python', 'C',
            'C++', '. NET', 'MySQL', 'Oracle', 'PostgreSQL'],      // suggest candidates list
        {dispMax: 10, interval: 1000}); // options
}

window.addEventListener ?
  window.addEventListener('load', startSuggest, false) :
  window.attachEvent('onload', startSuggest);

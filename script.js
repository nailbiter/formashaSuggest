function getList(){
    var list = [];
    var obj = Papa.parse(csv);
    console.log(obj);
    obj.data.slice(1).forEach(function(item,index){
        list.push(item[0]+" - "+item[1])});
    
    return list;
}

function startSuggest() {
  new Suggest.Local(
        "text",    // input element id.
        "suggest", // suggestion area id.
        getList(),      // suggest candidates list
        {dispMax: 10, interval: 1000,highlight:true}); // options
}

window.addEventListener ?
  window.addEventListener('load', startSuggest, false) :
  window.attachEvent('onload', startSuggest);

var csvurl=["https://cors.io/?"+
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRHDbWVpZeC2eWsDl0IYu0UpTZ8vFg5pBxoX5ueLHTvn4npuXFgHkfCeV0VpvJNsFJQ2Mu8JFq7KyUI/pub?gid=1160302316&output=csv",
"https://cors.io/?"+
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRHDbWVpZeC2eWsDl0IYu0UpTZ8vFg5pBxoX5ueLHTvn4npuXFgHkfCeV0VpvJNsFJQ2Mu8JFq7KyUI/pub?gid=0&output=csv"];

function getList(){
    var list = [];
    csvurl.forEach(function(it,ind){
        getCSV(it,function(contents){
          var obj = Papa.parse(contents);
            console.log(obj);
            obj.data.slice(1).forEach(function(item,index){
                list.push(item[0]+" - "+item[1]);
            })
        });
    })
    
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

function getFileInfo(fileId, callback) {
    try {
        gapi.client.drive.files.get({
            fileId: fileId,
            fields: "appProperties,capabilities,contentHints,createdTime,description,explicitlyTrashed,fileExtension,folderColorRgb,fullFileExtension,headRevisionId,iconLink,id,imageMediaMetadata,isAppAuthorized,kind,lastModifyingUser,md5Checksum,mimeType,modifiedByMeTime,modifiedTime,name,originalFilename,ownedByMe,owners,parents,permissions,properties,quotaBytesUsed,shared,sharedWithMeTime,sharingUser,size,spaces,starred,thumbnailLink,trashed,version,videoMediaMetadata,viewedByMe,viewedByMeTime,viewersCanCopyContent,webContentLink,webViewLink,writersCanShare",
        }).then(function(response) {
            info = JSON.parse(response.body);
            callback(info);
        })
    } catch (err) {
        console.log('Something bad happened: ' + err);
    }
}

function getCSV(url,func) {
        var file = url;
        var rawFile = new XMLHttpRequest();
        var allText;

        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4)
                if(rawFile.status === 200 || rawFile.status == 0)
                    allText = rawFile.responseText;
                    if(func!=undefined && typeof(func) == "function"){
                        func(allText);
                     }
        };

        rawFile.send();
}

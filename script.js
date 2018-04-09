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

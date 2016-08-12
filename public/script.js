/* public/script.js */

window.onload = function() {
    var converter = new showdown.Converter();
    var pad = document.getElementById('pad');
    var markdownArea = document.getElementById('markdown');   

    var convertTextAreaToMarkdown = function(){
        var markdownText = pad.value;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };

    pad.addEventListener('input', convertTextAreaToMarkdown);

    convertTextAreaToMarkdown();

    $("#submitContent").click(function() {
        var url = "/createVelocity";
        var name = document.getElementById('contentName');
        var html = document.getElementById('pad');
        url += "?contentName=" + name.value;
        console.log(name.value);
        url += "&contentHTML=" + html.value;
        console.log(url);
        $.ajax({
            url: url, 
            success: function(result){
                alert("Velocity File Created!");
            }
        }).fail(function() {
            alert("error");
        });
    });
};
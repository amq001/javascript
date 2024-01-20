//  Callbacks
function loadScript(src, Callbacks){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("loaded script with SRC: " + src)
        Callbacks(null,src);
    }
    script.onerror = function(){
        console.log("Error loading script with SRC: " + src)
        Callbacks(new Error("Src got some error"));
    }
    document.body.appendChild(script);
}
function hello(error, src){
    if (error) {
        console.log(error)
        return
    }
    console.log("hello world" +src)
}
function goodmorning(error, src){
    if (error) {
        console.log(error)
        return
    }
    console.log("goodmorning" +src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",goodmorning)

// pyramid of doom
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
    if (error) {
        console.log(error)
        return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap2.bundle.min.js",function goodmorning(error, src){
        if (error) {
            console.log(error)
            return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap3.bundle.min.js",function goodmorning(error, src){
            if (error) {
                console.log(error)
                return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap4.bundle.min.js",function goodmorning(error, src){})
        })
        
    })
    
})

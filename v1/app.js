var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.set("view engine", "ejs");

var campgrounds = [
    {name: "salmon creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {name: "creek", image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"},
    {name: "granite", image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
    {name: "salmon creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {name: "creek", image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"},
    {name: "granite", image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
    {name: "salmon creek", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
    {name: "creek", image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"},
    {name: "granite", image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"}
    
      
]
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image= req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");

    //redirect  back to camogrounds page
    res.send("YOU HIT THE POST ")
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
})





app.listen(3004, function() {
    console.log("app is listening on port 3001!!!")
});
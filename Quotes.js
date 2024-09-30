let quotes = $(".quotes");
let newquote = $(".newquote");
let post = $(".post");
let tag = $(".tag");
let author = $(".auname");
let apiUrl = "https://api.quotable.io/random";



post.on("click",function()
{
  let tweettext = encodeURIComponent(quotes.html());
    let windo = window.open(
        "https://twitter.com/intent/tweet?text=" + tweettext, 
        "width=300,height=300,left=100,top=100","_blank"
      );
});

newquote.on("click",function(){
       Api();
});

async function Api() //es6 feature that makes the api resoponse very fast and easy way than .then method....
{
    try{
      quotes.text("loading...");
      tag.text("loading...");
      author.text("loading...");

      let response  = await fetch(apiUrl);
      let data = await response.json();
      if(response.ok){
      
        quotes.text(data.content);
        author.text(data.author);
        tag.text(data.tags);
      }
     
}catch(error)
{
    console.log(error);
}
} 




var channel="abc-news-au";
function load(){
    //popup modal
    var modal=document.createElement("div");
    modal.setAttribute("id","myModal");
    modal.setAttribute("class","modal");
    var modalContent=document.createElement("div");
    modalContent.setAttribute("class","modal-content");
    var modalHeader=document.createElement("div");
    modalHeader.setAttribute("class","modal-header");
    var span=document.createElement("span");
    span.setAttribute("class","close");
    span.setAttribute("onclick","closeModal()");
    span.appendChild(document.createTextNode("\u00D7"));
    modalHeader.appendChild(span);
    var h2=document.createElement("h2");
    h2.appendChild(document.createTextNode("Title"));
    modalHeader.appendChild(h2);
    modalContent.appendChild(modalHeader);
    var modalBody=document.createElement("div");
    modalBody.setAttribute("class","modal-body");
    var p1=document.createElement("p");
    p1.appendChild(document.createTextNode("p1"));
    var p2=document.createElement("p");
    p2.appendChild(document.createTextNode("p2"));
    modalBody.appendChild(p1);
    modalBody.appendChild(p2);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    //header
    let header=document.createElement("header");
    var h1=document.createElement("h1");
    var p=document.createElement("p");
    var i=document.createElement("i");
    i.appendChild(document.createTextNode("Yet another newsfeed"));
    p.appendChild(i);
    h1.appendChild(document.createTextNode("NEWSFEED"));
    header.appendChild(h1);
    header.appendChild(p);
    document.body.appendChild(modal);
    //main
    let main=document.createElement("main");
        //left block
        let left=document.createElement("div");
        left.setAttribute("class","left");
        let innerLeft=document.createElement("div");
        innerLeft.setAttribute("class","innerLeft");
        innerLeft.setAttribute("id","innerLeft");
        var i=0;
        fetch(`https://newsapi.org/v1/articles?source=${channel}&apiKey=38bdf22d077e45dcbdd9bbf51d0cf880`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
      titles=myJson.articles;
        let fragment=document.createDocumentFragment();
        titles.forEach(function(value){
        let tile=document.createElement("div");
        tile.setAttribute("class","tile");
        let image=document.createElement("div");
        image.setAttribute("class","image");
        let img=document.createElement("img");
        img.setAttribute("src",value.urlToImage);
        image.appendChild(img);
        tile.appendChild(image);
        let info=document.createElement("div");
        info.setAttribute("class","info");
        info.setAttribute("id",i);
        var h1=document.createElement("h1");
        h1.appendChild(document.createTextNode(value.title));
        info.appendChild(h1);
        var h5=document.createElement("h5");
        var grayText=document.createElement("span");
        grayText.setAttribute("class","grayText");
        grayText.appendChild(document.createTextNode("Posted on "));
        h5.appendChild(grayText);
        var published=new Date(value.publishedAt);
        const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
        h5.appendChild(document.createTextNode(published.getDate()+" "+months[published.getMonth()]+", "+published.getFullYear()));
        var grayText=document.createElement("span");
        grayText.setAttribute("class","grayText");
        grayText.appendChild(document.createElement("i").appendChild(document.createTextNode("// Category:")));
        h5.appendChild(grayText);
        h5.appendChild(document.createTextNode(" Category One"));
        info.appendChild(h5);
        var p=document.createElement("p");
        p.appendChild(document.createTextNode(value.description));
        info.appendChild(p);
        var button=document.createElement("button");
        button.setAttribute("onclick","details("+i+")");
        i++;
        button.appendChild(document.createTextNode("Continue Reading"));
        info.appendChild(button);
        tile.appendChild(info);
        fragment.appendChild(tile);
        })
        innerLeft.appendChild(fragment);
        left.appendChild(innerLeft);
    });
        main.appendChild(left);
    
        //right block
        let right=document.createElement("div");
        right.setAttribute("class","right");
        var b=document.createElement("b");
        b.appendChild(document.createTextNode("SELECT CATEGORY"));
        right.appendChild(b);
        right.appendChild(document.createElement("br"));
        var select=document.createElement("select");
        select.setAttribute("onChange","optionSelect()");
        select.setAttribute("id","mySelect");
        var option1=document.createElement("option");
        option1.setAttribute("value","abc-news-au");
        option1.appendChild(document.createTextNode("ABC News"));
        var option2=document.createElement("option");
        option2.setAttribute("value","cnbc");
        option2.appendChild(document.createTextNode("CNBC"));
        var option3=document.createElement("option");
        option3.setAttribute("value","daily-mail");
        option3.appendChild(document.createTextNode("Daily Mail"));
        var option4=document.createElement("option");
        option4.setAttribute("value","mirror");
        option4.appendChild(document.createTextNode("Mirror"));
        var option5=document.createElement("option");
        option5.setAttribute("value","bbc-news");
        option5.appendChild(document.createTextNode("BBC News"));
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);
        select.appendChild(option5);
        right.appendChild(select);
        right.appendChild(document.createElement("br"));
        right.appendChild(document.createElement("br"));
        var b=document.createElement("b");
        b.appendChild(document.createTextNode("SUBSCRIBE"));
        right.appendChild(b);
        right.appendChild(document.createElement("br"));
        var input=document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("placeholder","\xa0\xa0Email Address");
        input.setAttribute("id","email");
        right.appendChild(input);
        var button=document.createElement("button");
        button.setAttribute("onclick","storeEmail()");
        var b=document.createElement("b");
        b.appendChild(document.createTextNode("Subscribe"));
        button.appendChild(b);
        right.appendChild(button);
        var message=document.createElement("div");
        message.setAttribute("class","message");
        message.setAttribute("id","message");
        right.appendChild(message);
        var message2=document.createElement("div");
        message2.setAttribute("class","message2");
        message2.setAttribute("id","message2");
        right.appendChild(message2);
        main.appendChild(right);
    //footer
    let footer=document.createElement("footer");
    var small=document.createElement("small");
    var text=document.createTextNode("\u00A9 NewsFeed 2019");
    small.appendChild(text);
    footer.appendChild(small);
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);   
}
var modal;
function closeModal(){
    modal.style.display = "none";
}
var emails=[];
window.localStorage.setItem("emails",JSON.stringify(emails));
function storeEmail(){
    var message2=document.getElementById("message2");
            message2.style.display="none";
            var message=document.getElementById("message");
            message.style.display="none";            
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)){
        emails=JSON.parse(window.localStorage.getItem("emails"));
        if(emails.includes(document.getElementById("email").value)){
            document.getElementById("email").value="";
            message.innerHTML="<b>Email already registered!<b>"
            message.style.display="block";
        }else{
            emails.push(document.getElementById("email").value);
            window.localStorage.setItem("emails",JSON.stringify(emails));
            document.getElementById("email").value="";
            message2.innerHTML="<b>Email registered!<b>"
            message2.style.display="block";
        }
  }
  else{
        message.innerHTML="<b>Invalid email!<b>"
        message.style.display="block";
    }
}

function details(tileId){
    modal=document.getElementById("myModal");
    var info=document.getElementById(tileId);
    var title=info.getElementsByTagName("h1")[0];
    var p1=info.getElementsByTagName("h5")[0];
    var p2=info.getElementsByTagName("p")[0];
    var header=modal.getElementsByClassName("modal-header")[0];
    header.getElementsByTagName("h2")[0].innerHTML=title.innerHTML;
    var body=modal.getElementsByClassName("modal-body")[0];
    body.getElementsByTagName("p")[0].innerHTML=p1.innerHTML;
    body.getElementsByTagName("p")[1].innerHTML=p2.innerHTML;
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
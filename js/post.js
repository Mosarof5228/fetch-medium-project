//1.creat a project by use fetch and post.
//2.prothome amaderke api use kore server theke data ante hobe.
//fake ip like  search kore jason placeholder theke post k nite hobe.
//3.pore oi data goluke amra one by one pabo for  of loop run kore.
//4.html page er akti container k id dara select korbo.
//5.and loop chalia protibar akti kore div creat korbo and div er bitore
//6.div er bitore innerHTML=`` use kore doita h2 and p tag creat korte hobe.
//7.pore dynamic babe ${} use kore  server er id  title and  descrption use korbo.
function firstFunc() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        //api k call korar por se akta promise korbe .then dia and response korbe.
        .then(promise => promise.json())//promise take jason a convert korbo.
        .then(data => secondFunc(data));//akhane console.log na kore secondFunc k call kore dibe and data take pathia dibe.
}

function secondFunc(posts) {
    // console.log(posts) akhane arra of object akare sob golo posts k pabo.
    //akhon amra akekta post k alada alada babe pete chay for of  loop chalia.
    const postContainer=document.getElementById("post-container")
    for (const post of posts) {
        console.log(post);
        //akhon amader kaj holo index html pager post-container id take get kora.
        const postEachDiv = document.createElement("div");
        postEachDiv.classList.add('eachDivStyle');
        postEachDiv.innerHTML = `
        <h5>Id:</h5>
        <h5>Title:</h5>
        <p>Description:</p>

        `
        postContainer.appendChild(postEachDiv);

    }
}


document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#name").innerHTML = domainName();
});

let pronoun = ['the','tech','Wp','super','monster','Hack'];
let adj = ['loose','byte','swole','green'];
let noun = ['hub','drive','form','point','db','goose','bud','bid'];
    

function domainName (){
    let i=0;
    let j=0;
    let k=0;
    
    let temp = "";
    
    for (let i=0;i<pronoun.length;i++)
    {
        for (let j=0;j<adj.length;j++)
        {
            for (let k=0;k<noun.length;k++)
            {
                temp += pronoun[i]+adj[j]+noun[k]+".com <br>" + pronoun[i]+ noun[k]+ ".org <br>";
            }
        }
    }
    return temp;
}


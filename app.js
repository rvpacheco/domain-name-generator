oun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['.com', '.net', '.us', '.io', 'etc.']




let dom = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
        for(let l =0; l < ext.length; l++){
            let doms = pronoun[i] + " " + adj[j] + noun[k]+ext[l];
            dom.push(doms);

        }
    }
  }
}
console.log(dom);


let posts= document.querySelector("#posts");
let factoryMethod =document.querySelector('#factoryM');
let factoryMethod2 =document.querySelector('#factoryM2');
// let partyCandidate=document.querySelector('#')

// Question One instalgram Constructor

function InstalgramPost(instalHandle,content,imageLink,numView,numLikes){
    this.instalHandle =instalHandle,
    this.content=content,
    this.imageLink=imageLink,
    this.numView=numView,
    this.numLikes=numLikes
    this.introduce= function(){
        return(`this is ${post.instalHandle}, with ${post.content} content linked,${post.imageLink} and a ${post.numView} views
    with ${post.numLikes} likes`);

    };
    return this

 
}

const post = new InstalgramPost("Joy","scholarship","alx_image",15,200);
posts.innerHTML=post.introduce()

// posts.innerHTML=`this is ${post.instalHandle}, with ${post.content} content linked,${post.imageLink} and a ${post.numView} views
//     with ${post.numLikes} likes`;

//Question 2 creating an instalgram post

let Person = function(name,age,location){
    //creating a person object

    let person ={};
    //setting the parameters as keys to the object
    person.name=name;
    person.age=age;
    person.location=location;

    person.greeting = function(){
        return(`${person.name} is a${person.age} years old Nigerian male who lives with his parents in
         ${person.location}, Lagos State`);
    };

    return person

}
 let person1 = Person('Musa Dawodu',19,'Lekki')
 factoryMethod.innerHTML=person1.greeting();



let JambScore = function(Eng,Govt,Lit,Crk){
    //creating a person object

    let score ={};
    //setting the parameters as keys to the object
    score.Eng=Eng;
    score.Govt=Govt;
    score.Lit=Lit;
    score.Crk=Crk

    score.result = function(){
        return(`${score.Eng} <br> ${score.Govt}<br>
         ${score.Lit} <br> ${score.Crk} <br>`);
    };

    return score

}
 let score1 = JambScore(70,85,82,94)
 factoryMethod2.innerHTML=score1.result();

 //QUESTION 4
//  To clone a JavaScript object correctly, you have 4 different options:

// Use the spread operator.
// Call the Object.assign() function.
// Use JSON parsing.
// Use the structuredClone() function.

// Example for each

// const data = { name: "Alice", age: 26 }
// // 1
// const copy1 = { ...data }
// // 2
// const copy2 = Object.assign({}, data)
// // 3
// const copy3 = JSON.parse(JSON.stringify(data))
// // 4
// const copy4 = structuredClone(data)



const presidentialCandidates = {
     AAC: 'Omoyele Sowore',
     ACCORD: 'Christopher Imumolen',
     APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}
for (let party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
  }
  

// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
// 	’Omoyele Sowore is the presidential candidate of AAC’


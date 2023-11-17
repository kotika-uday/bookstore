console.log('connected')
const arr=[1,3,5]
const [a,b,c]=arr
console.log(arr)
const restaurent={
    name:'classic indian',
    place:"hyd,telangana",
 categories:['indian','punjabi','chinese'],
 startermenu:['soup','fries','burger','chicken'],
mainmenu:['dal makhini','chiken biryani','noodles'],
order: function(starterindex,mainindex){
return[this.startermenu[starterindex],this.mainmenu[mainindex]]
},
deliverorder:function({time="20:00",address,mainindex,starterindex=2}){
    console.log(`orderplaced! for ${this.mainmenu[mainindex]} and ${startermenu[starterindex]} To be delivered to ${address} at ${time}`)
},
 const openinghours={
    thur:{
        open:'10am',
        close:'12am'
    },
    fri:{
        open:'10am',
        close:'12am'
    },
    sat:{
        open:'10am',
        close:'4am'
    }
},
    orderpasta:function(ing1,ing2,ing3){
        console.log(`here is your pasta with ${ing1},${ing2},${ing3}`)
    },
    orderpizza:function(mainingridient,...otheringridients){
    console.log(mainingridient);
    console.log(otheringridients);
    },
    
}
//spread operator
const newarr1=[...restaurent.mainmenu,'chicken'];
console.log(newarr1)

const newr=[...restaurent.startermenu,...restaurent.mainmenu]
console.log(newr)

//iterables:arrays,strings,maps,sets,not objects
const str1='uday';
const letter=[...str1,'','','k']
console.log(letter)



//rest:because it is on the lest side
const [dal,,oodles,...others]=[...restaurent.mainmenu,...restaurent.startermenu];
console.log(dal,oodles,others);

const {sat,...weekdays}=restaurent.openinghours;
console.log(weekdays)
console.log(sat)

restaurent.numGuests=0;
const juest1=restaurent.numGuests ? restaurent.numGuests :10;
console.log(juest1);
 const guestcorrect=restaurent.numGuests ?? 10;
 console.log(guestcorrect);

// logical assessment
const rest1={
    name:'true indian',
    numGuests:20,
}
const rest2={
    name:'indian palace',
    owner:'uday'
}

//or assignment
//rest1.numGuests=rest1.numGuests || 10;
//rest2.numGuests=rest2.numGuests || 20;
// rest1.numGuests ||=10;
// rest2.numGuests ||=10;
// console.log(rest1);
// console.log(rest2);
// rest1.numGuests &&='u1';
// rest2.numGuests &&='u2';


//for -OF loop
// const menu=[...restaurent.mainmenu,...restaurent.startermenu]

// for(let i=0;i<menu.length;i++){
//     console.log(menu[i]);
// }

// for(const item of menu.entries()){
//     console.log(item)
// }

// for(const [i,el] of menu.entries()){
//     console.log(`${i+1}:${el}`)
// }
// for(const item of menu){
//     console.log(item)
// }
// console.log([...menu.entries()]);


// code3
// function findmax(numb){

// let maxno=numb[0];
// for(const num of numb){
//     if(num > maxno)
//     maxno=num;
// }
// return maxno;

// }
// const numarr=[1,4,77,3,5];
// const result=findmax(numarr);
// console.log(result);


//code4
function sum(a,b,c){
const d=a+b+c;
return d;
}

const reu=sum();
console.log(reu)



//code1
//function get(num1){
  //  if(num1.length == 0){
    //    return {first:undefined,last:undefined}
 //   }
 //   else{
   //     const first=num1[0];
     //   const last=num1[num1.length-1];
//        return{first,last}
  //  }
//}
//const add=[1,2,3,4,5];
//const result=get(add)
//console.log(result)
//const add1=[10,20,30,40]
//const result1=get(add1)
//console.log(result1)

//code 3#
// const ab=['uday','kRTHIK','mahi'];
// const bc=[5,6,7];
// const u=ab.concat(bc);
// console.log(u)

// function abc(original,...others){
//     const m=[...original,...others]
//     return m;
// }
// const ini=[1,2,300];
// const final=abc(ini,4,5,6)
// console.log(final)



// //&& and ||
// in || it will returns the truthy values
// ex:console.log('' || 'uday')
// o/p: uday

//  && it first returns the falsy values,else if there are both truthy values then it 
// just prints the last value
//c.log('7' && 'uday')
//o/p: uday



// functions
/*function addNums(...numbers){
    console.log(numbers);
    let sum=0;
    for(let i=0;numbers.length;i++)
    sum+=numbers[i]
console.log(sum)
}
addNums(2,5,5);
*/

restaurent.orderpizza('mushrooms','onions','tomatos')

/*const ingri =
    prompt("lets make pasta.ingri1");
    prompt("ingri 2");
    prompt("ingri 3");

console.log(ingri);
restaurent.orderpasta(ingri[0],ingri[1],ingri[2])
*/


//object desturcturing?
/*
const {name,startermenu,openinghours}=restaurent;
console.log(name,startermenu,openinghours)

let x=11;
let y=22;
const obj={x:12,y:3,z:7}
console.log(obj)

const {fri:{open:o,close:cl}}=openinghours;
console.log('friday opening hours',o,cl)


restaurent.deliverorder({
    address:'123 alpha',
    mainindex:2,

})

*/
//arrays destructures?
//const [first,second]= restaurent.categories;
//console.log(first,second);

//let [firstitem,,thirditem]=restaurent.startermenu
//console.log(firstitem,thirditem)
//let temp=firstitem;
//firstitem=thirditem;
//thirditem=temp;
//console.log(firstitem,thirditem)
//const [starter,main]=restaurent.order(2,1)
//console.log(starter,main)

// nested 
//const nested=[2,3,[4,7]]
//const [i,,[j,k]]=nested;
//console.log(i,j,k)



//    sets  //
// const orderset =new Set([
//     'chicken',
//     'dal makhini',
//     'paneer',
//     'chicken',
//     'soup',
//     'dal makhini',
//     'paneer'
// ])
// console.log(orderset.size);
// orderset.add('noodles')
// orderset.delete('paneer')
// console.log(orderset);
// console.log(orderset.has('chicken'))


// const nameset=new Set('uday kiran')
// console.log(nameset)

// const staff=['waiter','cheff','waiter','manager','cheff','waiter']
// //const staffunique=new Set(staff)
// const staffunique=[...new Set(staff)]
// console.log(staffunique)
// console.log(typeof staffunique)


// console.log(new Set('uday').size)

// maps  //

const rest=new Map();
rest.set('name','indian palace')
rest.set(1,'new delhi')
rest.set(2,'mumbai')
rest.set('categories',['indian','punjabi','chinese']).set('open',11).set('close',23).set(true,'we are open:D').set(false,'sorry we are closed')
console.log(rest)
console.log(rest.get('name'))

console.log(rest.get(1))
console.log(rest.get(true))

// convert objects to map
console.log(Object.entries(openinghours))


 const hoursmap=new Map(Object.entries(openinghours))
console.log(hoursmap)
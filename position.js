/*Petya loves football very much. One day, as he was watching a football match, he was writing the players' current positions on a piece of paper. To simplify the situation he depicted it as a string consisting of zeroes and ones. A zero corresponds to players of one team; a one corresponds to players of another team. If there are at least 7 players of some team standing one after another, then the situation is considered dangerous. For example, the situation 00100110111111101 is dangerous and 11110111011101 is not. You are given the current situation. Determine whether it is dangerous or not. Input The first input line contains a non-empty string consisting of characters "0" and "1", which represents players. The length of the string does not exceed 100 characters. There's at least one player from each team present on the field. Output Print "YES" if the situation is dangerous. Otherwise, print "NO".*/

/*let s="000000111111100000";
let cnt=0;
let currChr = '*';
let f=1;

for(let i=0;i<s.length;i++)
{
    if(s[i]===currChr){
        cnt=cnt+1;
    }else{
        cnt=1;
        currChr=s[i];
    }

    if(cnt==7){
        console.log("YES");
        f=0;
    }
}

if(f)console.log("NO");*/



/*Being a nonconformist, Volodya is displeased with the current state of things, particularly with the order of natural numbers (natural number is positive integer number). He is determined to rearrange them. But there are too many natural numbers, so Volodya decided to start with the first n. He writes down the following sequence of numbers: firstly all odd integers from 1 to n (in ascending order), then all even integers from 1 to n (also in ascending order). Help our hero to find out which number will stand at the position number k.The only line of input contains integers n and k (1≤kn≤10^12).
Print the number that will stand at the position number k after Volodya's manipulations.*/


let n = 12;
let k = 12;
// 1 3 5 7 9 11 2 4 6 8 10 12

let evnCnt = Math.floor(n/2);
let oddCnt = n-evnCnt;

if(k<=oddCnt){
    console.log(2*k-1);
}else{
    console.log(2*(k-oddCnt));
}
*/



/*Theatre Square in the capital city of Berland has
a rectangular shape with the size n xm meters. On the occasion of the city's anniversary, a decision was taken to pave the Square with square granite flagstones. Each flagstone is of the size a xa.What is the least number of flagstones needed to pave the Square? It's allowed to cover the surface larger than the Theatre Square, but the Square has to be covered. It's not allowed to break the flagstones. The sides of flagstones should be parallel to the sides of the Square. The input contains three positive integer numbers in the first line: n, m and a (1 ≤ n, m, a≤10^9). Write the needed number of flagstones.INPUT=> 664
output=>4*/

let n=15;
let m=20;
let a=5;

let x=Math.ceil(n/a);
let y=Math.ceil(m/a);

console.log(x*y);


/*You are given an array a of n integers. Count the number of pairs of indices (i,j) such that i<j and aj−ai=j−I.

The first line contains one integer t (1≤t≤104). Then t test cases follow.

The first line of each test case contains one integer n (1≤n≤2⋅105).

The second line of each test case contains n integers a1,a2,…,an (1≤ai≤n) — array a.

It is guaranteed that the sum of n over all test cases does not exceed 2⋅10^5.
For each test case output the number of pairs of indices (i,j) such that i<j and aj−ai=j−*/ 
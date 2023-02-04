let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';


let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let storyWords = story.split(' ');
// console.log(storyWords)
let count  = 0
storyWords.forEach((word) =>{
  count ++
})
console.log(count)
storyWords = storyWords.filter((word) =>{
  return word !== unnecessaryWord
})



// to check misspelled words, if any word from the passage has the misspelled word, then it corrects it to the right word. you have to know the misspelled word so as to correct it
storyWords =storyWords.map((word) =>{
  if (word === misspelledWord){
    return 'beautiful'
  }else{
    return word
  }
})


// to find the index with the bad word, then change the bad word to another word
let badWordIndex = storyWords.findIndex((word ) => {
   return (word === badWord)
})
console.log(badWordIndex)
storyWords[78] ='really'


// to check if there are words less than or equal to 10 character. if there are none is logs true. if there are it logs false
let lengthCheck = storyWords.every((word) => {
  return word.length <= 10
})
console.log(lengthCheck)

// to find the word greater than 10 characters. You can just manual change to the new word in the paaragraph since i know what it is
longWords = storyWords.filter((word) => {
  return word.length >10 
  
})
console.log(longWords)
longWords['breathtaking'] ='stunning'

console.log(storyWords.join(' '))







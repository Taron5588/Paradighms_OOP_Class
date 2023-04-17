class Shiritori {
    constructor (words) {
        this.words = words
        this.game_over = false
    }

    play(word) {
        try { if(typeof word !== "string") {
            throw TypeError("enter a valid value")
        }
        } catch (err) {
            console.log(err)
        }
        if(!this.words.length) {
            this.words.push(word)
            return this.words
        } else {
        const arrCopy = [...this.words]
        const lastItem = arrCopy.pop()
        const lastLetter = lastItem.slice(-1)
        const condition1 = lastLetter.toUpperCase() === word.trim().toUpperCase()[0]
        const condition2 = !this.words.some(item => item.trim().toUpperCase() === word.trim().toUpperCase())
        if(condition1 && condition2) {
            this.words.push(word)
            return this.words
        }
        this.game_over = true
        return `Game_over, "${word}" doesn't start with an "${lastLetter}" or "${word}" has already been said.`
        }
    }
    restart() {
        this.words.length = 0
        this.game_over = false
        return "game restarted"
    }
 }

const myWords = ["new", "welcome", "even", "node"]

const myShiritori = new Shiritori(myWords)

console.log(myShiritori.play("error")) //[ 'new', 'welcome', 'even', 'node', 'error' ]
console.log(myShiritori.play("radio")) //[ 'new', 'welcome', 'even', 'node', 'error', 'radio' ]
console.log(myShiritori.play("home")) //game over
console.log(myShiritori.restart()) //game restarted
console.log(myShiritori) //Shiritori { words: [], game_over: false }
console.log(myShiritori.play("start")) //[ 'start' ]
console.log(myShiritori.play("Tokio")) //[ 'start', 'Tokio' ]
console.log(myShiritori.play("Object")) //[ 'start', 'Tokio', 'Object' ]
console.log(myShiritori.play("   tokio")) //Game_over, "   tokio" doesn't start with an "t" or "   tokio" has already been said.

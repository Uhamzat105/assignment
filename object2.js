const book = {
    title: "story of life ",
    description: "how it goes",
    numberofpages: 200,
    author: "hamzat usman",
    reading: false,
    toggleReadingStatus: function(){
        this.reading = !this.reading;
        console.log(`The book "${this.title}" is currently being read: ${this.reading}`)
    }
}
books.toggleReadingStatus()
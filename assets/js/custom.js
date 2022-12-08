new WOW().init();

var Person = {
    name: 'Forhad',
    age: 25,
    mySelf: function () {
        console.log('hi i am ' + this.name)
        console.log('my age is '+ this.age)
    }
}
Person.mySelf()

var Person2 = {
    name: 'Munni',
    age: 18,
    myself: Person.mySelf()
}
Person2.myself()
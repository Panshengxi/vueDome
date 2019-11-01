class Person {
    constructor(name, age) {
        this.name = name || 'pan';
        this.age = age || 18;
    }
    say() {
        console.log(this, '哈哈。。。。。。。。。。。')
    }
    static height = {
        18: 18,
        6: 6
    };
}

export default Person;
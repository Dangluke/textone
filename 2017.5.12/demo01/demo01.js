/**
 * Created by 201605181 on 2017/5/12.
 */
// 创建一个包含所有必要信息的 Person 对象
// 可以无数次的调用这个函数，而且每次都会返回一个包含三个属性的方法的对象
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name+' is '+this.age);
    }
    return o;
}
var p1 = createPerson("Hiraku", 23, "JavaScript Engineer");
var p2 = createPerson("Wang", 22, "Java Engineer");
p1.sayName();
p2.sayName();
# cloneChange
I create this package javascript to clone a object and verify if that is dirty to form and validation object keys.

##How to install
``` npm install --save clone-change ```

##How to use
```
let object ={
  name:'Raphael',
  age:19,
  job:{
    name:'Developer'
  }
}

let CloneChange = require('clone-change');
let cloneChange = new CloneChange(object)

cloneChange.Backup() //return object

let objectNew ={
  name:'Raphael2',
  age:19,
  job:{
    name:'Developer'
  }
}

cloneChange.IsDirty(objectNew) //compare object with object objectNew and return false

cloneChange.Expect(['job.name'],['Developer']); //return true
cloneChange.Expect(['job.name'],['Dev']);   //return false

cloneChange.Expect(['name','age'],['Rapha',19]);   //return false

If you require reset your object in cloneChange and your comparations make in a new object.
cloneChage.Reset(objectNew);
```

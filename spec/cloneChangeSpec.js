var cloneChanged = require('../clone-change');

var objectReference = {
	name:'Raphael',
	age:19,
	job:{
		name:'Desenvolvedor',
		anos:15,
		language:{
			name:"Python"
		}
	}
}

var objectReferenceClone = {
	name:'Raphael',
	age:19,
	job:{
		name:'Desenvolvedor',
		anos:15,
		language:{
			name:"Python"
		}
	}
}

var objectReferenceDirty = {
	name:'Raphael',
	age:19,
	job:{
		name:'Desenvolvedor',
		anos:15
	}
}


describe('CloneChanged',function(){
	it('Return a Backup to object Referenct',function(){
		let clone = new cloneChanged(objectReference);
		expect(clone.Backup()).toEqual(objectReference)
	});

	it('Return TRUE if object is Dirty',function(){
		let clone = new cloneChanged(objectReference);
		expect(clone.IsDirty(objectReferenceDirty)).toEqual(true)
	});

	it('Return FALSE if object NOT is Dirty',function(){
		let clone = new cloneChanged(objectReference);
		expect(clone.IsDirty(objectReference)).toEqual(false)
	});

	it('Return FALSE if object NOT is Dirty compare to other object equal',function(){
		let clone = new cloneChanged(objectReference);
		expect(clone.IsDirty(objectReferenceClone)).toEqual(false)
	});

	it('Return a Boolean if object is Dirty after Backup is run',function(){
		let clone = new cloneChanged(objectReference);
		clone.IsDirty(objectReference)
		
		expect(clone.Backup()).toEqual(objectReference);
	});

	it('Return true for Expect function for 1 - 2 - 3 ramifications',function(){
		let clone = new cloneChanged(objectReference);

		expect(clone.Expect(['job.name','name','job.language.name'],['Desenvolvedor','Raphael','Python'])).toEqual(true);
	})

	it('Return false for Expect function',function(){
		let clone = new cloneChanged(objectReference);

		expect(clone.Expect(['name','name'],['Desenvolvedor','Raphael'])).toEqual(false);
	})

	it('Return new object after Reset object function',function(){
		let clone = new cloneChanged(objectReference);
		clone.Reset(objectReferenceDirty);

		expect(clone.Backup()).toEqual(objectReferenceDirty);
	})
});
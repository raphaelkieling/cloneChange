var CloneChange = function(objectReferenceOriginal){
	if(!objectReferenceOriginal)
		throw new Error('Object Original for reference is required');

	this.objectReferenceOriginal = objectReferenceOriginal;
}


CloneChange.prototype.Backup = function(){
	return this.objectReferenceOriginal;
}

CloneChange.prototype.IsDirty = function (objectNewReference){
	if(!objectNewReference)
		throw new Error('Need a Object for compare');
	return !(JSON.stringify(this.objectReferenceOriginal) === JSON.stringify(objectNewReference));
}

CloneChange.prototype.Expect = function(propsNameArray,propsNameExpect){
	if(!this.objectReferenceOriginal)
		throw new Error('Need instance a object reference. Try new CloneChange(object)');
	let arrayParametersName   = [...propsNameArray];
	let arrayParametersExpect = [...propsNameExpect];
	let errors                = [];

	arrayParametersName.forEach((parameterName,i)=>{
		if(this._getPropByString(this.objectReferenceOriginal,parameterName) !== arrayParametersExpect[i])
			errors.push(`[[ERROR]]: ${this._getPropByString(this.objectReferenceOriginal,parameterName)}`)
	})

	return !errors.length>0;
}

CloneChange.prototype.Reset=function(newObjectReferenceOriginal){
	this.objectReferenceOriginal = newObjectReferenceOriginal;
}

CloneChange.prototype._getPropByString=function(object,parameterStringDotNotation){
	let arrayParameter = parameterStringDotNotation.split('.');

	if(!arrayParameter)
		throw new Error('Nothing to create your object for dot notation');
	if(!object)
		throw new Error('Not have a object to create for dot notation');

	for(let i=0;i<arrayParameter.length;i++){
		let candidate = object[arrayParameter[i]];
		if(!candidate)
			break;
		object = candidate
	}
	return object;
}



module.exports = CloneChange;

// Next developments
// valid decimal
// date validation period
// valid keys for a object
// required


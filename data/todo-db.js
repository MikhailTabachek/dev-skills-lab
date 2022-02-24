const skills = [
  {text: 'Create online game', done: true, _id: 0001},
  {text: 'Make a money transfer app', done: false, _id: 0002},
  {text: 'Build supermarket in VR', done: false, _id: 0003},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, todos)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}
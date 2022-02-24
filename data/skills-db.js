const skills = [
  {text: 'Git', done: true, _id: 1001},
  {text: 'GitHub', done: true, _id: 1002},
  {text: 'HTML', done: true, _id: 1003},
  {text: 'CSS', done: true, _id: 1004},
  {text: 'Java Script', done: "in progress", _id: 1005},
  {text: 'Create online game for project', done: true, _id: 1006},
  {text: 'React', done: false, _id: 1007},
  {text: 'Python', done: "in progress", _id: 1008}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}
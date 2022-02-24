import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Skills',
    h1: "Mike's skills"
    
  })
})

export { 
  router
}

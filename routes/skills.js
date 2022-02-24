import { Router } from 'express'
import * as skillsDb from "../data/skills-db.js"
const router = Router()

/* GET skills listing. */
router.get('/', function(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
})


export {
  router
}
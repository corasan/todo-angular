const Todo = require('./models/Todo')

module.exports = (app) => {
  app.get('/todos', (req, res) => {
    Todo.find((err, todos) => {
      if (err) {
        res.send(err)
      }
      res.json(todos)
    })
  })

  app.post('/todos', (req, res) => {
    Todo.create({
      text: req.body.text,
      done: false,
    }, (err, todo) => {
      if (err) {
        res.send(err)
      }

      Todo.find((err, todos) => {
        if(err) {
          res.send(err)
        }
        res.json(todos)
      })
    })
  })

  app.delete('/todos/:todo_id', (req, res) => {
    Todo.remove(({
      _id: req.params.todo_id
    }, (err, todo) => {
      if (err) {
        res.send(err)
      }

      Todo.find((err, todos) => {
        if(err) {
          res.send(err)
        }
        res.json(todos)
      })
    }))
  })
}

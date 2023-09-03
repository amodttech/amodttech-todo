# db/seeds/projects.rb
Project.create(name: 'Project 1', deadline: Date.today + 7.days)
Project.create(name: 'Project 2', deadline: Date.today + 14.days)

# db/seeds/todos.rb
project1 = Project.find_by(name: 'Project 1')
project1.todos.create(name: 'Todo 1 for Project 1', deadline: Date.today + 3.days, priority: 1, complete: false)
project1.todos.create(name: 'Todo 2 for Project 1', deadline: Date.today + 5.days, priority: 2, complete: false)

project2 = Project.find_by(name: 'Project 2')
project2.todos.create(name: 'Todo 1 for Project 2', deadline: Date.today + 10.days, priority: 1, complete: false)

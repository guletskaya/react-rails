# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([
    {
        username: "lizagul",
        name: "Lizaveta",
        surname: "Guletskaya",
        birthdate: "November 13, 2002",
        email: "guletskayaliza@gmail.com",
        password: "password",
        admin: true
    },
    {
        username: "nika",
        name: "Veronika",
        surname: "Kruchok",
        birthdate: "October 18, 2002",
        email: "kruchokveronika@gmail.com",
        password: "password1",
        admin: false
    },
])

posts = Post.create([
    {
       title: "The first post",
       description: "This id the first post that belongs to admin Lizaveta",
       user_id: 3
    },
    {
        title: "The second post",
       description: "This is the second post that belongs to user Veronika",
       user_id: 4
    },
])
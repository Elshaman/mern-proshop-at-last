import bcryptjs from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'jhon@email.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true
    },
]

export default users;
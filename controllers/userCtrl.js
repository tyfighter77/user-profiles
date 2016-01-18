var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
    login: function(req, res, next){
      var found = false;
      for (var i = 0; i < users.length; i++){
        if ((users[i].name === req.body.userName) && (users[i].password === req.body.password)){
          console.log(req.body, users[i]);
          req.session.currentUser = users[i];
          found = true;
        }
      }
    res.send({ userFound: found });
}};

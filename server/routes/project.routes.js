const ProjectController = require('../controllers/project.controller');

module.exports = (app) => {
    app.get('/api/projects', ProjectController.index);
    app.post('/api/projects', ProjectController.create);
    app.get('/api/projects/:id', ProjectController.show);
    app.put('/api/projects/:id', ProjectController.update);
    app.delete('/api/projects/:id', ProjectController.destroy);
}
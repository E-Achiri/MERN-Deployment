const Project = require("../models/project.model");

    module.exports = {
        index: (req,res) =>{
            Project.find()
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors:err.errors}))
        },
        create: (req,res) =>{
            Project.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors:err.errors}))
            
        },
        show: (req,res) =>{
            Project.find({_id: req.params.id})
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors:err.errors}))
            
        },
        update: (req,res) =>{
            Project.updateOne({_id: req.params.id},req.body, {runValidators: true})
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors:err.errors}))
            
        },
        destroy: (req,res) =>{
            Project.deleteOne({_id:req.params.id})
            .then(data => res.json({results: data}))
            // .then(data => res.redirect('/api/Projects')) ## for simplifying front end
            .catch(err => res.status(404).json({errors:err.errors}))
            
            
        },
    }
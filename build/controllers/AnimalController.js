"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../sequelize/models");

class AnimalController {
  async createAnimal(req, res) {
    // Validate request
    console.log('Names: ', req.body);

    if (!req.body.type) {
      res.status(400).json({
        message: "Animal type should be specified"
      });
      return;
    }

    const {
      animalId,
      weight,
      type,
      SlaughterhouseId
    } = req.body;

    _models.Animal.create({
      animalId,
      weight,
      type,
      SlaughterhouseId
    }).then(data => {
      res.status(201).json({
        data,
        message: 'Animal created successfully!'
      });
    }).catch(err => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the Animal."
      });
    });
  }

  async findOneAnimal(req, res) {
    const id = req.params.id;

    _models.Animal.findByPk(id).then(data => {
      res.status(200).json({
        data
      });
    }).catch(err => {
      res.status(500).json({
        message: err.message || "Error retrieving that Animal"
      });
    });
  }

  async findAllAnimals(req, res) {
    _models.Animal.findAll().then(data => {
      res.status(200).json({
        message: 'List of all Animals',
        data
      });
    }).catch(err => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving Animals."
      });
    });
  }

  async countAnimalsBySlaughterHouseName(req, res) {
    const name = req.params.name;

    _models.Slaughterhouse.findOne({
      where: {
        name: name
      }
    }).then(data => {
      if (data) {
        const {
          id
        } = data;

        _models.Animal.findAll({
          where: {
            SlaughterhouseId: id
          }
        }).then(animal => {
          let count = 0;
          animal.map(items => {
            return count++;
          });
          if (count > 0) return res.status(200).json({
            message: `Found ${count} animal`,
            numberOfAnimal: count,
            animal
          });else throw new Error('Animal not found');
        }).catch(err => {
          res.status(404).json({
            message: err.message
          });
        });
      } else {
        res.status(404).json({
          message: 'Animal not found!! Try with another slaughter house.'
        });
      }
    }).catch(error => {
      res.status(404).json({
        message: error.message || 'Unable to find such slaughter house'
      });
    });
  }

  async findAnimalBySlaughterhouseName(req, res) {
    const name = req.params.name;

    _models.Slaughterhouse.findOne({
      where: {
        name: name
      }
    }).then(data => {
      if (data) {
        const {
          id
        } = data;

        _models.Animal.findOne({
          where: {
            SlaughterhouseId: id
          }
        }).then(animal => {
          if (animal) return res.status(200).json({
            message: 'Animal found successfuly',
            data: animal
          });else throw new Error('Animal not found');
        }).catch(err => {
          res.status(404).json({
            message: err.message
          });
        });
      } else {
        res.status(404).json({
          message: 'Animal not found!! Try with another slaughter house.'
        });
      }
    }).catch(error => {
      res.status(404).json({
        message: error.message || 'Unable to find such slaughter house'
      });
    });
  }

  async updateAnimal(req, res) {
    const id = req.params.id;

    _models.Animal.update(req.body, {
      where: {
        id: id
      }
    }).then(num => {
      if (num == 1) {
        res.status(200).json({
          message: "Animal was updated successfully."
        });
      } else {
        res.json({
          message: `Cannot update Animal with id=${id}. Maybe Animal was not found or req.body is empty!`
        });
      }
    }).catch(err => {
      res.status(500).json({
        message: "Error updating Animal with id=" + id
      });
    });
  }

  async deleteAnimal(req, res) {
    const id = req.params.id;

    _models.Animal.destroy({
      where: {
        id: id
      }
    }).then(num => {
      if (num == 1) {
        res.status(200).json({
          message: "Animal was deleted successfully!"
        });
      } else {
        res.status(401).json({
          message: `Cannot delete Animal with id=${id}. Maybe Animal was not found!`
        });
      }
    }).catch(err => {
      res.status(500).json({
        message: "Could not delete Animal with id=" + id
      });
    });
  }

}

var _default = AnimalController;
exports.default = _default;
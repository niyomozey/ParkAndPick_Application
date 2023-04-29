import bcrypt from "bcrypt";
import "dotenv/config";
import getPassword from "../services/createPassword.js";
import sendEmail from "../services/sendEmail.js";
import {User, Slaughterhouse} from '../../sequelize/models'

class ShouseController {

   async registerSlaughterHouse(req, res) {
    Slaughterhouse.create({ 
      SlaughterhouseId: req.body.slaughterhouseId,
      name: req.body.name,
      address: req.body.address,
      TIN: req.body.TIN
    })
      .then(async data => { 
            res.status(201).json({message: "Slaughter House created successfully!",data});
          }).catch(err => {
        res.status(500).json({
          message:
            err.message || "Some error occurred while creating the Slaugher House."
        });});};


  async findOneSlaughterHouse(req, res) {
    const name = req.params.id;
    Slaughterhouse.findOne({where: { name: name }})
      .then(data => {        
        if (data) {          
          res.json({data});
        } else {
          res.status(404).json({
            message: `Cannot find Slaugher House with id=${name}.`
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "Error retrieving Slaugher House with id=" + name
        });
      });
  };

  async findAllSlaughterHouse(req, res) {
    Slaughterhouse.findAll()
      .then(data => {
        res.status(200).json(data);

      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message || "Some error occurred while retrieving Slaughter house."
        });
      });
  };

  async deleteSlaughterhouse(req, res) {
    const id = req.params.id;
    Slaughterhouse.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.json({
            message: "Slaughter house was deleted successfully!"
          });
        } else {
          res.json({
            message: `Cannot delete Slaughter house with id=${id}. Maybe Slaughter house was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "Could not delete Slaughter house with id=" + id
        });
      });
  };

}
export default ShouseController

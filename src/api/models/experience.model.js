const mongoose = require("mongoose");
//const User = require("./user.model");

const ExperienceSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Empresa donde se trabajó
    workedWith: {
      type: String,
      required: true,
    },

    //Tiempo
    duration: {
      type: Number,
      required: true,
    },

    //Tecnologías con las que se trabajó en la experiencia laboral
    technologies: {
      type: [String],
      required: true,
      default: [],
    },

    // Descripcion
    description: {
      type: String,
      required: true,
    },

    //Imagen ¿Sería necesario? consultar con el equipo.
    image: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

// we create the data schema model for mongoose
const Experience = mongoose.model("Experience", ExperienceSchema);
module.exports = Experience;

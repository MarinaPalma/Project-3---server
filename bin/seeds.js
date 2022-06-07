const mongoose = require("mongoose");
const Restaurant = require("../models/Restaurant.model");

  const restaurants = [
    {
    name: "Taska Real",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654528769/Taskas/img_472x263_2015_10_25_18_02_57_141408_tsvntx.png",
    city: "Lisboa",
    contact: 214571036,
    address: "Calcada do Patriarcal 38 Bairro Alto",
    averagePrice: 15,
},
  {
    name: "Tasca Zé dos Queijos",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654528812/Taskas/35554010_liq4oqAobtz_lbs5mYWzX2xr-cSBQpzS6BCqIKdL4b0_oomlhr.jpg",
    city: "Seixal",
    contact: 212229614,
    address: "Av. Siderurgia Nacional - Cucena, Paio Pires",
    averagePrice: 12,
  },
  {
    name: "Taberna 2 à Esquina",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654528864/Taskas/portugal-e-isto-cores_tvy9um.jpg",
    city: "Setúbal",
    contact: 265613060,
    address: "Rua da Encosta do Castelo No 21",
    averagePrice: 15,
  },
  {
    name: "Tasca Kome",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654528895/Taskas/image_xjbffi.jpg",
    city: "Lisboa",
    contact: 211340117,
    address: "Rua da Madalena 36-60",
    averagePrice: 25,
  },
  {
    name: "A Muralha Tasca Tipica",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654528949/Taskas/a-qualidade-tem-nome_z0x9hc.jpg",
    city: "Lisboa",
    contact: 218867089,
    address: "Rua Jardim do Tabaco, 112",
    averagePrice: 12,
  },
  {
    name: "Tasca Caseira",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654528974/Taskas/tasca-caseira_jsqmvm.jpg",
    city: "Porto",
    contact: 914339729,
    address: "Rua das Taipas, 8",
    averagePrice: 27,
  },
  {
    name: "Tascö",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654529001/Taskas/tasco_fv1bf9.jpg",
    city: "Porto",
    contact: 924262233,
    address: "Rua do Almada, 151 A",
    averagePrice: 20,
  },
  {
    name: "Tasca do Bairro",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654589355/Taskas/getlstd-property-photo_twslpk.jpg",
    city: "Porto",
    contact: 226182079,
    address: "Rua de São Bartolomeu, 20",
    averagePrice: 14,
  },
  {
    name: "Tasca Da Pipa",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654589388/Taskas/la-tasca_gynh3p.jpg",
    city: "Porto",
    contact: 220124081,
    address: "Rua Antero de Quental 618 R/C",
    averagePrice: 21,
  },
  {
    name: "Mestrias, Nova Tasca",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654589388/Taskas/la-tasca_gynh3p.jpg",
    city: "Lisboa",
    contact: 913342204,
    address: "Largo Paz 22-B",
    averagePrice: 15,
  },
  {
    name: "Tasca Pombalina",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654589469/Taskas/the-outside-seating_qocyeq.jpg",
    city: "Lisboa",
    contact: 213470791,
    address: "Praça D. Pedro IV, 76/77",
    averagePrice: 15,
  },
  {
    name: "Tasca da Avenida",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654589469/Taskas/the-outside-seating_qocyeq.jpg",
    city: "Setúbal",
    contact: 964269599,
    address: "Avenida Luisa Todi 578",
    averagePrice: 15,
  },
  {
    name: "Tasca Do Aviz",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654529001/Taskas/tasco_fv1bf9.jpg",
    city: "Porto",
    contact: 222002874,
    address: "Rua Pedro Homem de Melo 244",
    averagePrice: 16,
  },
  {
    name: "Tasca Do Bernardo",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654529001/Taskas/tasco_fv1bf9.jpg",
    city: "Odemira",
    contact: 927011299,
    address: "Avenida do Comercio 6 Boavista dos Pinheiros",
    averagePrice: 20,
  },
  {
    name: "Tasca Do Celso",
    imageUrl: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654592499/Taskas/caption_qgivj2.jpg",
    city: "Odemira",
    contact: 283996753,
    address: "Rua dos Aviadores, Vila Nova de Milfontes",
    averagePrice: 20,
  }
]

const MONGODB_URI = "mongodb+srv://project3:taskas22@cluster0.zxqnzkd.mongodb.net/Project3?retryWrites=true&w=majority"

mongoose
  .connect(MONGODB_URI)
  .then((x) => console.log("Connected to the database"))
  .then(() => {
    return Restaurant.create(restaurants)
  })
  .then((restaurantCreated) => {
    console.log(`Created ${restaurantCreated.length} restaurants in the db`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));

  })
  .catch((err) =>console.log(err))

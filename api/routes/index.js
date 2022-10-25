import express from "express";
import { database } from "../db/database.js";

import UsersService from "../services/users.service.js";
import ItemsService from "../services/items.service.js";
import ShoesService from "../services/shoes.service.js";
import SweatsService from "../services/sweats.service.js";
import TShirtsService from "../services/tShirts.service.js";

const usersService = new UsersService(database);
const itemsService = new ItemsService(database);
const shoesService = new ShoesService(database);
const sweatsService = new SweatsService(database);
const tShirtsService = new TShirtsService(database);

export const router = express.Router();

// User endpoints

router.post("/users", usersService.createUser.bind(usersService));

router.get("/users", usersService.getUsers.bind(usersService));
router.get("/users:id", usersService.getUserById.bind(usersService));

router.patch("/users:id", usersService.updateUser.bind(usersService));

router.delete("/users:id", usersService.deleteUser.bind(usersService));

// Item endpoints

router.post("/items", itemsService.createItem.bind(itemsService));

router.get("/items", itemsService.getItems.bind(itemsService));
router.get("/items:id", itemsService.getItemById.bind(itemsService));

router.patch("/items:id", itemsService.updateItem.bind(itemsService));

router.delete("/items:id", itemsService.deleteItem.bind(itemsService));

// Shoe endpoints

router.post("/shoes", shoesService.createShoe.bind(shoesService));

router.get("/shoes", shoesService.getShoes.bind(shoesService));
router.get("/shoes:id", shoesService.getShoeById.bind(shoesService));

router.patch("/shoes:id", shoesService.updateShoe.bind(shoesService));

router.delete("/shoes:id", shoesService.deleteShoe.bind(shoesService));

// Sweat endpoints

router.post("/sweats", sweatsService.createSweat.bind(sweatsService));

router.get("/sweats", sweatsService.getSweats.bind(sweatsService));
router.get("/sweats:id", sweatsService.getSweatById.bind(sweatsService));

router.patch("/sweats:id", sweatsService.updateSweat.bind(sweatsService));

router.delete("/sweats:id", sweatsService.deleteSweat.bind(sweatsService));

// TShirts endpoints

router.post("/tShirts", tShirtsService.createTShirt.bind(tShirtsService));

router.get("/tShirts", tShirtsService.getTShirts.bind(tShirtsService));
router.get("/tShirts:id", tShirtsService.getTShirtById.bind(tShirtsService));

router.patch("/tShirts:id", tShirtsService.updateTShirt.bind(tShirtsService));

router.delete("/tShirts:id", tShirtsService.deleteTShirt.bind(tShirtsService));

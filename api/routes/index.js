import express from "express";
import { database } from "../db/database.js";

import UsersService from "../services/users.service.js";

const usersService = new UsersService(database);

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

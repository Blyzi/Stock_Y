import express from "express";
import { database } from "../db/database.js";

import UsersService from "../services/users.service.js";
import ItemsService from "../services/items.service.js";
import StocksService from "../services/stocks.service.js";

const usersService = new UsersService(database);
const itemsService = new ItemsService(database);
const stocksService = new StocksService(database);

export const router = express.Router();

// User endpoints

router.get("/users", async (request, response) => {
  response.status(200).send(await usersService.getUsers());
});

router.get("/users/:id", async (request, response) => {
  response.status(200).send(await usersService.getUserById(request.params.id));
});

router.post("/users", async (request, response) => {
  try {
    response.status(201).send(...(await usersService.createUser(request.body)));
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.patch("/users/:id", async (request, response) => {
  response
    .status(200)
    .send(...(await usersService.updateUser(request.params.id, request.body)));
});

router.delete("/users/:id", async (request, response) => {
  response
    .status(200)
    .send(...(await usersService.deleteUser(request.params.id)));
});

router.post("/users/login", async (request, response) => {
  try {
    const user = await usersService.login(request.body);
    response.status(200).send(user);
  } catch (error) {
    response.status(401).send(error.message);
  }
});

// Item endpoints

router.get("/items", async (request, response) => {
  response.status(200).send(await itemsService.getItems());
});

router.get("/items/:id", async (request, response) => {
  response.status(200).send(await itemsService.getItemById(request.params.id));
});

router.post("/items", async (request, response) => {
  try {
    response.status(201).send(...(await itemsService.createItem(request.body)));
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.patch("/items/:id", async (request, response) => {
  response
    .status(200)
    .send(...(await itemsService.updateItem(request.params.id, request.body)));
});

router.delete("/items/:id", async (request, response) => {
  response
    .status(200)
    .send(...(await itemsService.deleteItem(request.params.id)));
});

// Stock endpoints

router.get("/stocks", async (request, response) => {
  response.status(200).send(await stocksService.getStocks());
});

router.get("/stocks/:id", async (request, response) => {
  response
    .status(200)
    .send(await stocksService.getStockById(request.params.id));
});

router.post("/stocks", async (request, response) => {
  try {
    response
      .status(201)
      .send(...(await stocksService.createStock(request.body)));
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.patch("/stocks/:id", async (request, response) => {
  response
    .status(200)
    .send(
      ...(await stocksService.updateStock(request.params.id, request.body))
    );
});

router.delete("/stocks/:id", async (request, response) => {
  response
    .status(200)
    .send(...(await stocksService.deleteStock(request.params.id)));
});

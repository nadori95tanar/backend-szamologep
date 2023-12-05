const express = require("express");

const szamologepControllers = require("../controllers/szamologep.controller");

const szamologepRouter = express.Router();

// A /osszead végpont POST kéréséhez tartozó kontroller beállítása.
szamologepRouter.post("/osszead", szamologepControllers.osszeadPostController);

// A /kivon végpont POST kéréséhez tartozó kontroller beállítása.
szamologepRouter.post("/kivon", szamologepControllers.kivonPostController);

// A /szoroz végpont POST kéréséhez tartozó kontroller beállítása.
szamologepRouter.post("/szoroz", szamologepControllers.szorozPostController);

// A /osztas végpont POST kéréséhez tartozó kontroller beállítása.
szamologepRouter.post("/osztas", szamologepControllers.osztasPostController);

// A /muvelet/:muveletiJel végpont POST kéréséhez tartozó kontroller beállítása.
szamologepRouter.post("/muvelet/:muveletiJel", szamologepControllers.muveletPostController);

module.exports = szamologepRouter;
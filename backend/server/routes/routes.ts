import { Router } from "express";
import {
  createMessage,
  retrieveMessages,
  retrieveMessage,
  removeMessages,
  updatedMessages,
  retrieveFavoriteMessages,
  createUser,
  retrieveUser,
  createFavorite,
  removeFavorited,
} from "../controllers/messages";

const router = Router();

// POST new blog post
router.post("/", createMessage);

// POST new user
router.post("/user", createUser);

// POST new favorite
router.post("/favorites/:userId", createFavorite);

// GET current user
router.get("/user/:authId", retrieveUser);

// GET all blog posts
router.get("/", retrieveMessages);

// GET one blog post
router.get("/:id", retrieveMessage);

// GET favorite blog posts
router.get("/favorites/:userId", retrieveFavoriteMessages);

// DELETE one blog post
router.delete("/:id", removeMessages);

// DELETE favorited blog post
router.delete("/favorites/:userId", removeFavorited);

// UPDATE one blog post
router.patch("/:id", updatedMessages);

export default router;

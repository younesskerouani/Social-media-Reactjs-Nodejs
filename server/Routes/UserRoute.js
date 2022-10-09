import express  from "express";
import {getAllUsers, getUser , updateUser ,deleteUser, followUser, UnfollowUser } from "../Controllers/UserController.js";

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id',getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnfollowUser)

export default router;
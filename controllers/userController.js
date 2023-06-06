import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Auth user/set Token
// route    POST api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Auth User` });
});

// @desc    Register a new User
// route    POST api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Register User` });
});

// @desc    Logout User
// route    POST api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Logout User` });
});

// @desc    Get User Profile
// route    Get api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `User Profile` });
});

// @desc    Update User Profile
// route    Put api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update User Profile` });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};

import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  addSubject,
  deleteSubject,
  getAllSubjects,
} from "../controllers/subjectDetails.js";
import {
  addOrUpdateQuestionSet,
  getUserQuestionSets,
} from "../controllers/questionController.js";
import { generateQuestionPaper } from "../controllers/generateQuestion.js";

const QpMainrouter = express.Router();

QpMainrouter.route("/subject")
  .post(authMiddleware, addSubject)
  .delete(authMiddleware, deleteSubject)
  .get(authMiddleware, getAllSubjects);

QpMainrouter.route("/question")
  .post(authMiddleware, addOrUpdateQuestionSet)
  .get(authMiddleware, getUserQuestionSets);

QpMainrouter.route("/generateQp").post(authMiddleware, generateQuestionPaper);

export default QpMainrouter;

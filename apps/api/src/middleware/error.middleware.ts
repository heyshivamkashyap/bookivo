import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/api-error";
import { ApiResponse } from "../utils/api-response";

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error("Error:", error);

  // Known application errors
  if (error instanceof ApiError) {
    return res
      .status(error.statusCode)
      .json(new ApiResponse(error.statusCode, error.data, error.message));
  }

  // Unknown server errors
  return res
    .status(500)
    .json(new ApiResponse(500, null, "Internal Server Error"));
};

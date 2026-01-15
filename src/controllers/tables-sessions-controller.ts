import { Request, Response, NextFunction } from "express";

class TablesSessionsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      response.status(201).json();
    } catch (error) {
      next(error);
    }
  }
}

export { TablesSessionsController };

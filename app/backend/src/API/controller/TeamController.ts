import { Request, Response } from 'express';
import IGetTeam from '../interfaces/IGetTeam';

export default class TeamController {
  protected _service: IGetTeam;

  constructor(service: IGetTeam) {
    this._service = service;
  }

  async getAll(req: Request, res: Response) {
    const allTeams = await this._service.getAll();
    return res.status(200).json(allTeams);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const teamById = await this._service.getById(Number(id));
    return res.status(200).json(teamById);
  }
}

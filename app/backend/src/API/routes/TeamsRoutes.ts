import { Request, Response, Router } from 'express';
import TeamController from '../controller/TeamController';
import TeamService from '../services/TeamService';

const teamsRoutes = Router();
const teamService = new TeamService();
const teamController = new TeamController(teamService);

teamsRoutes.get('/', (req: Request, res: Response) => teamController.getAll(req, res));
teamsRoutes.get('/:id', (req: Request, res: Response) => teamController.getById(req, res));

export default teamsRoutes;

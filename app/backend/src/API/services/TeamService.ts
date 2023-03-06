import { ModelStatic } from 'sequelize';
import Teams from '../../database/models/TeamsModel';
import IGetTeam from '../interfaces/IGetTeam';
// import ITeam from '../interfaces/ITeam';

export default class TeamService implements IGetTeam {
  protected model: ModelStatic<Teams> = Teams;

  async getAll(): Promise<Teams[]> {
    const allTeams = await this.model.findAll();
    return allTeams;
  }

  async getById(id: number): Promise<Teams | null> {
    const teamById = await this.model.findOne({ where: { id } });
    return teamById;
  }
}

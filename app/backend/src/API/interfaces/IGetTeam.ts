import Teams from '../../database/models/TeamsModel';

export default interface IGetTeam {
  getAll: () => Promise<Teams[]>
  getById: (id: number) => Promise<Teams | null>
}

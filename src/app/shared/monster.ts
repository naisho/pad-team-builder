export class Monster {
  pad_id: number;
  padh_id: number;
  padh_url: string;
  name: string;
  element: number;
  element2: number;
  rarity: number;
  team_cost: number;
  type: number;
  type2: number;
  type3: number;
  leader_skill: string;
  leader_skill_desc: string;
  current_xp: number;
  level: number;
  max_level: number;
  hp_max: number;
  plus_hp: number;
  atk_max: number;
  plus_atk: number;
  rcv_max: number;
  plus_rcv: number;
  skill_level: number;
  awakening: number;
  awoken_skills: number[];
  latent1: number;
  latent2: number;
  latent3: number;
  latent4: number;
  latent5: number;
  latent6: number;

  isMaxLevel() {
    return (this.max_level == 99);
  }
}
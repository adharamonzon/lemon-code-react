export interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  avatar_url: string;
  bio: string;
}

export const createDefaultMemberDetail = () => ({
  id: "",
  login: "",
  name: "",
  company: "",
  avatar_url: '',
  bio: "",
});